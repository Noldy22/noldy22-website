export async function onRequest({ request }) {
    const { token } = await request.json();
  
    // Build an HttpOnly cookie
    const cookie = [
      `fb_token=${token}`,
      'HttpOnly',
      'Secure',
      'SameSite=Lax',
      'Path=/',
      'Max-Age=3600'
    ].join('; ');
  
    return new Response(null, {
      status: 302,
      headers: {
        'Set-Cookie': cookie,
        'Location': '/'  // or wherever you want to send them
      }
    });
  }
  