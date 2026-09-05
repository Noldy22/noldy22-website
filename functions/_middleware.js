export async function onRequest(context) {
  // Server-side route guard bypassed:
  // Requests to /Products/*, /Services/*, and all other routes are served directly
  // without requiring an fb_token cookie or redirecting to login.html.
  return context.next();
}

  