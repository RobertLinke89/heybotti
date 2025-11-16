import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

const bookingSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  phone: z.string().trim().max(50),
  date: z.string(),
  time: z.string(),
  message: z.string().optional(),
});

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const calendlyApiKey = Deno.env.get('CALENDLY_API_KEY');
    const eventTypeUri = Deno.env.get('CALENDLY_EVENT_TYPE_URI');

    if (!calendlyApiKey || !eventTypeUri) {
      console.error('Missing Calendly configuration');
      return new Response(
        JSON.stringify({ error: 'Calendly configuration missing' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const body = await req.json();
    const validatedData = bookingSchema.parse(body);

    // Parse date and time to create ISO timestamp
    const [day, month, year] = validatedData.date.split('.');
    const [hours, minutes] = validatedData.time.split(':');
    const startTime = new Date(`${year}-${month}-${day}T${hours}:${minutes}:00`);
    const endTime = new Date(startTime.getTime() + 30 * 60000); // 30 minutes later

    console.log('Creating Calendly booking for:', validatedData.email);
    console.log('Start time:', startTime.toISOString());

    // Create a single-use scheduling link
    const schedulingResponse = await fetch('https://api.calendly.com/scheduling_links', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${calendlyApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        max_event_count: 1,
        owner: eventTypeUri,
        owner_type: 'EventType',
      }),
    });

    if (!schedulingResponse.ok) {
      const errorText = await schedulingResponse.text();
      console.error('Calendly scheduling link error:', errorText);
      return new Response(
        JSON.stringify({ error: 'Failed to create Calendly booking' }),
        { status: schedulingResponse.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    const schedulingData = await schedulingResponse.json();
    console.log('Calendly scheduling link created:', schedulingData.resource.booking_url);

    // Send confirmation email with booking details
    const resendApiKey = Deno.env.get('RESEND_API_KEY');
    if (resendApiKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Booking <noreply@yourdomain.com>',
          to: [validatedData.email],
          subject: 'Terminbestätigung',
          html: `
            <h2>Vielen Dank für Ihre Buchung!</h2>
            <p>Hallo ${validatedData.name},</p>
            <p>Ihr Termin wurde erfolgreich gebucht:</p>
            <ul>
              <li><strong>Datum:</strong> ${validatedData.date}</li>
              <li><strong>Uhrzeit:</strong> ${validatedData.time}</li>
              ${validatedData.message ? `<li><strong>Nachricht:</strong> ${validatedData.message}</li>` : ''}
            </ul>
            <p>Sie erhalten in Kürze eine separate Bestätigung von Calendly mit dem Zugangslink.</p>
            <p>Bei Fragen erreichen Sie uns unter: <a href="tel:${validatedData.phone}">${validatedData.phone}</a></p>
          `,
        }),
      });
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        bookingUrl: schedulingData.resource.booking_url 
      }),
      { status: 200, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Booking error:', error);
    
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ error: 'Invalid booking data', details: error.errors }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
