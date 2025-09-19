export async function onRequestPost({ request }) {
    try {
        const { token } = await request.json();

        if (!token) {
            return new Response('Token not provided', { status: 400 });
        }

        // Build an HttpOnly cookie
        const cookie = [
            `fb_token=${token}`,
            'HttpOnly',
            'Secure',
            'SameSite=Lax',
            'Path=/',
            'Max-Age=3600' // 1 hour
        ].join('; ');

        // Redirect the user to the homepage after setting the cookie
        return new Response(null, {
            status: 302,
            headers: {
                'Set-Cookie': cookie,
                'Location': '/index.html'
            }
        });

    } catch (error) {
        console.error("Error in setTokenCookie function:", error);
        return new Response('An internal error occurred', { status: 500 });
    }
}