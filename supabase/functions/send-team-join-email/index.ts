import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

// Rate limiting: Track requests per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT = 5; // requests
const RATE_WINDOW = 15 * 60 * 1000; // 15 minutes in milliseconds

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now > record.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_WINDOW });
    return true;
  }

  if (record.count >= RATE_LIMIT) {
    return false;
  }

  record.count++;
  return true;
}

const teamJoinSchema = z.object({
  email: z.string().trim().email("Invalid email address").max(255),
});

function escapeHtml(unsafe: string): string {
  if (!unsafe) return '';
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    // Check rate limit
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'unknown';
    if (!checkRateLimit(ip)) {
      console.log('Rate limit exceeded for IP:', ip);
      return new Response(
        JSON.stringify({ error: 'Too many requests. Please try again later.' }),
        {
          status: 429,
          headers: { 'Content-Type': 'application/json', ...corsHeaders },
        }
      );
    }

    const requestData: unknown = await req.json();
    
    const validation = teamJoinSchema.safeParse(requestData);
    if (!validation.success) {
      return new Response(
        JSON.stringify({ error: 'Invalid email address' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }
    
    const { email } = validation.data;

    const htmlContent = `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 40px; border-radius: 10px 10px 0 0; text-align: center;">
          <h1 style="color: white; margin: 0; font-size: 28px; font-weight: 600;">Welcome to HeyBotti</h1>
        </div>
        
        <div style="background: white; padding: 40px; border-radius: 0 0 10px 10px; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 0;">
            Thank you for your interest in joining our team at HeyBotti.
          </p>
          
          <p style="color: #333; font-size: 16px; line-height: 1.6;">
            We're excited to connect with you and explore how we can collaborate. Our team uses Matrix for professional communication and collaboration – a secure, decentralized messaging platform that enables seamless teamwork.
          </p>

          <div style="background: #f8f9fa; padding: 25px; border-radius: 8px; border-left: 4px solid #667eea; margin: 30px 0;">
            <h2 style="color: #333; margin-top: 0; font-size: 18px; font-weight: 600;">Join Our Matrix Space</h2>
            <p style="color: #555; margin: 10px 0; line-height: 1.6;">
              To get started, please connect with us on Matrix using the following handle:
            </p>
            <p style="background: white; padding: 15px; border-radius: 5px; font-family: 'Courier New', monospace; font-size: 16px; color: #667eea; font-weight: 600; margin: 15px 0; word-break: break-all;">
              @heybotti:matrix.org
            </p>
            <p style="color: #555; font-size: 14px; margin-top: 15px; line-height: 1.6;">
              If you're new to Matrix, we recommend using the <a href="https://element.io/" style="color: #667eea; text-decoration: none; font-weight: 600;">Element client</a> to get started.
            </p>
          </div>

          <h3 style="color: #333; font-size: 18px; margin-top: 30px; margin-bottom: 15px;">What to Expect</h3>
          <ul style="color: #555; line-height: 1.8; padding-left: 20px;">
            <li>An initial introduction call to understand your background and interests</li>
            <li>Insights into our current projects and automation initiatives</li>
            <li>Discussion about potential collaboration opportunities</li>
            <li>Overview of our team culture and working methods</li>
          </ul>

          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-top: 30px;">
            We look forward to meeting you and discussing how we can work together to drive innovation in business automation.
          </p>

          <p style="color: #333; font-size: 16px; line-height: 1.6; margin-bottom: 0;">
            Best regards,<br>
            <strong style="color: #667eea;">The HeyBotti Team</strong>
          </p>

          <div style="margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #999; font-size: 13px;">
            <p style="margin: 5px 0;">HeyBotti - Business Automation Excellence</p>
            <p style="margin: 5px 0;">This invitation was sent from heybotti.de</p>
          </div>
        </div>
      </div>
    `;

    // Send to user
    await resend.emails.send({
      from: "HeyBotti <noreply@heybotti.com>",
      to: [email],
      subject: "Welcome to HeyBotti - Let's Connect on Matrix",
      html: htmlContent,
    });

    // Notify team
    await resend.emails.send({
      from: "HeyBotti <noreply@heybotti.com>",
      to: ["robert.linke@me.com"],
      subject: `New Team Join Request from ${email}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h2>New Team Join Request</h2>
          <p>Someone has requested to join the team:</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p>A welcome email with Matrix invitation has been sent.</p>
        </div>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-team-join-email function", error);
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
