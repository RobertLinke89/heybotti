import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ContactEmailRequest {
  type: 'contact' | 'callback';
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
  budget?: number;
  revenue?: number;
  date?: string;
  time?: string;
}

// HTML escaping function to prevent XSS
function escapeHtml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Input validation
function validateInput(data: ContactEmailRequest): { valid: boolean; error?: string } {
  if (!data.name || data.name.length > 100) {
    return { valid: false, error: 'Name must be between 1 and 100 characters' };
  }
  if (!data.email || data.email.length > 255 || !/^\S+@\S+\.\S+$/.test(data.email)) {
    return { valid: false, error: 'Valid email required (max 255 characters)' };
  }
  if (data.phone && data.phone.length > 20) {
    return { valid: false, error: 'Phone number too long' };
  }
  if (data.company && data.company.length > 200) {
    return { valid: false, error: 'Company name too long' };
  }
  if (data.message && data.message.length > 5000) {
    return { valid: false, error: 'Message too long (max 5000 characters)' };
  }
  if (data.budget && (data.budget < 0 || data.budget > 1000000)) {
    return { valid: false, error: 'Invalid budget value' };
  }
  if (data.revenue && (data.revenue < 0 || data.revenue > 10000000)) {
    return { valid: false, error: 'Invalid revenue value' };
  }
  return { valid: true };
}

// Simple rate limiting using in-memory storage
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 15 * 60 * 1000; // 15 minutes
const RATE_LIMIT_MAX = 5; // 5 requests per window

function checkRateLimit(ip: string): { allowed: boolean; retryAfter?: number } {
  const now = Date.now();
  const record = rateLimitMap.get(ip);
  
  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return { allowed: true };
  }
  
  if (record.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfter: Math.ceil((record.resetTime - now) / 1000) };
  }
  
  record.count++;
  return { allowed: true };
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Rate limiting check
    const ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
               req.headers.get('x-real-ip') || 
               'unknown';
    
    const rateLimitResult = checkRateLimit(ip);
    if (!rateLimitResult.allowed) {
      console.log('Rate limit exceeded', { ip, retryAfter: rateLimitResult.retryAfter });
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        {
          status: 429,
          headers: {
            ...corsHeaders,
            'Content-Type': 'application/json',
            'Retry-After': String(rateLimitResult.retryAfter)
          }
        }
      );
    }

    const data: ContactEmailRequest = await req.json();
    
    // Validate input
    const validation = validateInput(data);
    if (!validation.valid) {
      console.log('Invalid input received', { error: validation.error });
      return new Response(
        JSON.stringify({ error: validation.error }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
    
    // Log only non-sensitive data for debugging
    console.log('Contact request received', {
      type: data.type,
      hasName: !!data.name,
      hasEmail: !!data.email,
      emailDomain: data.email.split('@')[1],
      hasPhone: !!data.phone,
      hasCompany: !!data.company,
      timestamp: new Date().toISOString()
    });

    let subject = "";
    let htmlContent = "";

    if (data.type === 'contact') {
      subject = `Neue Projektanfrage von ${escapeHtml(data.name)}`;
      htmlContent = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Neue Projektanfrage</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Kontaktdaten</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(data.name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">E-Mail:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(data.email)}</td>
              </tr>
              ${data.company ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Unternehmen:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(data.company)}</td>
              </tr>
              ` : ''}
              ${data.phone ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Telefon:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(data.phone)}</td>
              </tr>
              ` : ''}
            </table>

            <h2 style="color: #333;">Projektdetails</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              ${data.revenue ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Aktueller Umsatz:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${data.revenue.toLocaleString('de-DE')}€</td>
              </tr>
              ` : ''}
              ${data.budget ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Budget:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${data.budget.toLocaleString('de-DE')}€</td>
              </tr>
              ` : ''}
            </table>

            ${data.message ? `
            <h2 style="color: #333;">Nachricht</h2>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; margin-bottom: 20px;">
              <p style="margin: 0; color: #333; line-height: 1.6;">${escapeHtml(data.message).replace(/\n/g, '<br>')}</p>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
              <p>Diese Anfrage wurde über das Kontaktformular auf heybotti.de gesendet.</p>
            </div>
          </div>
        </div>
      `;
    } else if (data.type === 'callback') {
      subject = `Neue Rückruf-Anfrage von ${escapeHtml(data.name)}`;
      htmlContent = `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px 10px 0 0; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">Neue Rückruf-Anfrage</h1>
          </div>
          
          <div style="background: white; padding: 30px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
            <h2 style="color: #333; margin-top: 0;">Kontaktdaten</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Name:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(data.name)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">E-Mail:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(data.email)}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Telefon:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${escapeHtml(data.phone || '')}</td>
              </tr>
            </table>

            <h2 style="color: #333;">Gewünschter Rückruf-Termin</h2>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; margin-bottom: 20px;">
              <p style="margin: 0; color: #333; font-size: 18px; font-weight: bold;">📅 ${escapeHtml(data.date || '')} um ${escapeHtml(data.time || '')} Uhr</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
              <p>Diese Rückruf-Anfrage wurde über heybotti.de gesendet.</p>
            </div>
          </div>
        </div>
      `;
    }

    // Send email to both recipients
    const emailResponse = await resend.emails.send({
      from: "HeyBotti <noreply@heybotti.com>",
      to: ["robert.linke@me.com", "robertlinke9+dnqysqf0rwspcmn5fzss@app.trello.com"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully to both recipients");

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function", {
      errorType: error.name,
      message: error.message,
      timestamp: new Date().toISOString()
    });
    return new Response(
      JSON.stringify({ error: "Failed to process request" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);