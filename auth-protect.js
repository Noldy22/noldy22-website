import { isAuthenticated } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    // Define protected paths as exact matches
    const protectedPaths = [
        '/products.html',
        '/services.html'
    ];

    const currentPath = window.location.pathname;
    
    // Check if the current path is exactly one of the protected paths
    if (protectedPaths.includes(currentPath)) {
        if (!isAuthenticated()) {
            const redirectUrl = encodeURIComponent(window.location.href); // Full URL
            window.location.href = `/login.html?redirect=${redirectUrl}`;
        }
    }
});