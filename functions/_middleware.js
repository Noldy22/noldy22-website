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

export async function onRequest(context) {
  const { request, env, next } = context;
  const url = new URL(request.url);

  // Only protect paths under /protected/
  if (url.pathname.startsWith('/products/') || url.pathname.startsWith('/services/')) {
    // grab fb_token cookie:
    const cookie = request.headers.get('cookie') || '';
    const match = cookie.match(/(?:^|;\s*)fb_token=([^;]+)/);
    const token = match && match[1];
    if (!token) return Response.redirect('/login', 302);

    try {
      initAdmin();
      await getAuth().verifyIdToken(token);
      // token valid → continue to page
      return next();
    } catch (e) {
      // invalid or expired → back to login
      return Response.redirect('/login', 302);
    }
  }

  // everything else flows through
  return next();
}
