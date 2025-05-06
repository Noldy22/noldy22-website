import { initializeApp, cert } from 'firebase-admin/app';
import { getAuth } from 'firebase-admin/auth';

// Lazily initialize so cold starts aren’t repeated
let adminInitialized = false;
function initAdmin() {
  if (adminInitialized) return;
  initializeApp({
    credential: cert({
      projectId:    env.FIREBASE_PROJECT_ID,
      clientEmail:  env.FIREBASE_CLIENT_EMAIL,
      privateKey:   env.FIREBASE_PRIVATE_KEY,
    }),
  });
  adminInitialized = true;
}

export async function onRequest({ request, env, next }) {
  const url = new URL(request.url);

  // Only protect your “products” and “services” paths:
  if (
    url.pathname.startsWith('/products/') ||
    url.pathname.startsWith('/services/')
  ) {
    // Extract the token from the cookie
    const cookie = request.headers.get('cookie') || '';
    const match  = cookie.match(/(?:^|;\s*)fb_token=([^;]+)/);
    const token  = match && match[1];
    if (!token) {
      return Response.redirect('/login.html', 302);
    }

    // Verify it with Google's tokeninfo endpoint
    const verifyRes = await fetch(
      `https://oauth2.googleapis.com/tokeninfo?id_token=${token}`
    );
    if (!verifyRes.ok) {
      return Response.redirect('/login.html', 302);
    }

    // Optionally inspect verifyRes.json() to check `aud` or `exp`
    // const payload = await verifyRes.json();
    // if (payload.aud !== env.FIREBASE_API_KEY) return Response.redirect('/login.html', 302);

    // All good → serve the page
    return next();
  }

  // Everything else just passes through
  return next();
}
