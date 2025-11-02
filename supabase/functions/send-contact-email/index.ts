import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Comprehensive Zod validation schemas
const contactSchema = z.object({
  type: z.literal('contact'),
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  company: z.string().trim().max(200, "Company name must be less than 200 characters").optional(),
  phone: z.string().trim().max(50, "Phone must be less than 50 characters").optional(),
  message: z.string().trim().min(1, "Message is required").max(5000, "Message must be less than 5000 characters"),
  budget: z.number().int().min(0).max(10000000).optional(),
  revenue: z.number().int().min(0).max(10000000).optional(),
});

const callbackSchema = z.object({
  type: z.literal('callback'),
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  phone: z.string().trim().min(1, "Phone is required").max(50, "Phone must be less than 50 characters"),
  date: z.string().trim().min(1, "Date is required").max(50),
  time: z.string().trim().min(1, "Time is required").max(50),
});

const requestSchema = z.discriminatedUnion('type', [contactSchema, callbackSchema]);

type ContactEmailRequest = z.infer<typeof requestSchema>;

// HTML escaping function to prevent XSS
function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

// Zod-based validation function
function validateInput(data: unknown): { valid: boolean; data?: ContactEmailRequest; errors?: string[] } {
  try {
    const validated = requestSchema.parse(data);
    return { valid: true, data: validated };
  } catch (error) {
    if (error instanceof z.ZodError) {
      const errors = error.errors.map(err => `${err.path.join('.')}: ${err.message}`);
      return { valid: false, errors };
    }
    return { valid: false, errors: ['Invalid request data'] };
  }
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

// Clean up old entries periodically
setInterval(() => {
  const now = Date.now();
  for (const [ip, record] of rateLimitMap.entries()) {
    if (now > record.resetTime) {
      rateLimitMap.delete(ip);
    }
  }
}, 60000); // Clean up every minute

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

    const requestData: unknown = await req.json();
    
    // Validate input with Zod
    const validation = validateInput(requestData);
    if (!validation.valid) {
      console.log('Validation failed', { errors: validation.errors });
      return new Response(
        JSON.stringify({ error: 'Validation failed', details: validation.errors }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
    
    const data = validation.data!;
    
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

    console.log("Email sent successfully", { 
      emailId: emailResponse.data?.id,
      timestamp: new Date().toISOString()
    });

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    // Log errors without sensitive data
    console.error("Error in send-contact-email function", {
      errorType: error.name,
      errorMessage: error.message,
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
