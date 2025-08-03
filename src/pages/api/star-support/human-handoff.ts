import type { APIRoute } from 'astro'

export const prerender = false

export const POST: APIRoute = async ({ request }) => {
  try {
    // Check authentication if AUTH_KEY is configured
    const authKey = process.env.STAR_SUPPORT_AUTH_KEY || import.meta.env.STAR_SUPPORT_AUTH_KEY;
    if (authKey) {
      const providedKey = request.headers.get('x-auth-key');
      if (!providedKey || providedKey !== authKey) {
        return new Response(
          JSON.stringify({ error: 'Unauthorized' }),
          { status: 401, headers: { 'Content-Type': 'application/json' } }
        )
      }
    }
    
    let body
    try {
      body = await request.json()
    } catch {
      return new Response(
        JSON.stringify({ error: 'Invalid JSON' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    const { email, message, conversationHistory } = body
    
    if (!email || typeof email !== 'string') {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: 'Invalid email format' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }
    
    // In demo mode, just log the handoff request
    console.log('🤝 Human Handoff Request:', {
      email,
      message: message || '(no additional message)',
      conversationCount: conversationHistory?.length || 0,
      timestamp: new Date().toISOString()
    })
    
    // Log conversation history in a readable format
    if (conversationHistory && Array.isArray(conversationHistory)) {
      console.log('📝 Conversation History:')
      conversationHistory.forEach((msg: any, index: number) => {
        console.log(`  ${index + 1}. [${msg.role}]: ${msg.content.substring(0, 100)}${msg.content.length > 100 ? '...' : ''}`)
      })
    }
    
    // In production, this would:
    // 1. Send an email to support team with conversation history
    // 2. Create a ticket in support system
    // 3. Store request in database
    // 4. Send confirmation email to user
    
    // Configure CORS based on environment variables
    const corsOrigin = process.env.STAR_SUPPORT_CORS_ORIGIN || import.meta.env.STAR_SUPPORT_CORS_ORIGIN || '*';
    const corsHeaders = {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-auth-key',
      'Access-Control-Allow-Credentials': 'true'
    };
    
    return new Response(
      JSON.stringify({ 
        success: true,
        message: 'Support request received. We will contact you soon.'
      }),
      {
        status: 200,
        headers: corsHeaders
      }
    )
  } catch (error) {
    console.error('❌ Human handoff API error:', error)
    return new Response(
      JSON.stringify({ error: 'Failed to process handoff request' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}

export const OPTIONS: APIRoute = () => {
  // Configure CORS based on environment variables
  const corsOrigin = process.env.STAR_SUPPORT_CORS_ORIGIN || import.meta.env.STAR_SUPPORT_CORS_ORIGIN || '*';
  
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': corsOrigin,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, x-auth-key',
      'Access-Control-Allow-Credentials': 'true'
    }
  })
}