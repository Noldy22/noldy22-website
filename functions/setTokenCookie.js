import { json } from '@cloudflare/workers-types';

export async function onRequest(context) {
  const { request, env } = context;
  const { token } = await request.json();
  // Set as HttpOnly cookie so it automatically goes with every request:
  const cookie = [
    `fb_token=${token}`,
    'HttpOnly',
    'Secure',
    'SameSite=Lax',
    'Path=/',
    'Max-Age=3600'  // one hour
  ].join('; ');

  return new Response(null, {
    status: 302,
    headers: {
      'Set-Cookie': cookie,
      'Location': '/'   // or wherever you want to redirect
    }
  });
}
