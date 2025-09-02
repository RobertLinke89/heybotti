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

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: ContactEmailRequest = await req.json();
    console.log("Received contact request:", data);

    let subject = "";
    let htmlContent = "";

    if (data.type === 'contact') {
      subject = `Neue Projektanfrage von ${data.name}`;
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
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">E-Mail:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${data.email}</td>
              </tr>
              ${data.company ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Unternehmen:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${data.company}</td>
              </tr>
              ` : ''}
              ${data.phone ? `
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Telefon:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${data.phone}</td>
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
              <p style="margin: 0; color: #333; line-height: 1.6;">${data.message.replace(/\n/g, '<br>')}</p>
            </div>
            ` : ''}

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
              <p>Diese Anfrage wurde über das Kontaktformular auf heybotti.de gesendet.</p>
            </div>
          </div>
        </div>
      `;
    } else if (data.type === 'callback') {
      subject = `Neue Rückruf-Anfrage von ${data.name}`;
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
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">E-Mail:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${data.email}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #555;">Telefon:</td>
                <td style="padding: 8px 0; border-bottom: 1px solid #eee; color: #333;">${data.phone}</td>
              </tr>
            </table>

            <h2 style="color: #333;">Gewünschter Rückruf-Termin</h2>
            <div style="background: #f8f9fa; padding: 15px; border-radius: 5px; border-left: 4px solid #667eea; margin-bottom: 20px;">
              <p style="margin: 0; color: #333; font-size: 18px; font-weight: bold;">📅 ${data.date} um ${data.time} Uhr</p>
            </div>

            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; text-align: center; color: #666; font-size: 14px;">
              <p>Diese Rückruf-Anfrage wurde über heybotti.de gesendet.</p>
            </div>
          </div>
        </div>
      `;
    }

    const emailResponse = await resend.emails.send({
      from: "HeyBotti <noreply@heybotti.com>",
      to: ["request@heybotti.de"],
      subject: subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(JSON.stringify({ success: true, emailId: emailResponse.data?.id }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        ...corsHeaders,
      },
    });
  } catch (error: any) {
    console.error("Error in send-contact-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);