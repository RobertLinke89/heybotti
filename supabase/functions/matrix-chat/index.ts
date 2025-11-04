import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { z } from "https://deno.land/x/zod@v3.22.4/mod.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

// Validation schema
const messageSchema = z.object({
  message: z.string().trim().min(1).max(2000),
  userName: z.string().trim().min(1).max(100).optional(),
});

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    console.log('Matrix chat request received');
    
    const body = await req.json();
    const validatedData = messageSchema.parse(body);
    
    const MATRIX_ACCESS_TOKEN = Deno.env.get('MATRIX_ACCESS_TOKEN');
    const MATRIX_USER_ID = Deno.env.get('MATRIX_USER_ID');
    const MATRIX_ROOM_ID = '!nCecMFyUnqxyUVSMMy:matrix.org'; // #newchats:matrix.org
    
    if (!MATRIX_ACCESS_TOKEN || !MATRIX_USER_ID) {
      console.error('Missing Matrix credentials');
      throw new Error('Matrix credentials not configured');
    }

    // Extract homeserver from user ID (@user:homeserver)
    const homeserver = MATRIX_USER_ID.split(':')[1];
    const matrixBaseUrl = `https://${homeserver}`;

    console.log('Sending message to Matrix room:', MATRIX_ROOM_ID);
    
    // Format message with user identification if provided
    const messageText = validatedData.userName 
      ? `**${validatedData.userName}** (via botti.co):\n${validatedData.message}`
      : `**Website Visitor** (via botti.co):\n${validatedData.message}`;
    
    // Generate transaction ID
    const txnId = `m${Date.now()}.${Math.random().toString(36).substring(7)}`;
    
    // Send message to Matrix room
    const response = await fetch(
      `${matrixBaseUrl}/_matrix/client/v3/rooms/${encodeURIComponent(MATRIX_ROOM_ID)}/send/m.room.message/${txnId}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${MATRIX_ACCESS_TOKEN}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          msgtype: 'm.text',
          body: messageText,
          format: 'org.matrix.custom.html',
          formatted_body: messageText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>').replace(/\n/g, '<br/>'),
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      console.error('Matrix API error:', response.status, errorText);
      throw new Error(`Matrix API error: ${response.status}`);
    }

    const result = await response.json();
    console.log('Message sent successfully to Matrix:', result.event_id);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message sent to team',
        eventId: result.event_id 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200 
      }
    );

  } catch (error) {
    console.error('Error in matrix-chat function:', error);
    
    if (error instanceof z.ZodError) {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: 'Invalid input',
          details: error.errors 
        }),
        { 
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400 
        }
      );
    }

    return new Response(
      JSON.stringify({ 
        success: false, 
        error: error instanceof Error ? error.message : 'Failed to send message' 
      }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500 
      }
    );
  }
});
