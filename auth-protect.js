import { isAuthenticated } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const protectedPaths = [
        '/products/',          // Needs trailing slash consistency
        '/services/',
        '/about-Noldy22.html',
        '/contact-Noldy22.html'
    ];

    const currentPath = window.location.pathname;
    
    // Improved path matching
    if (protectedPaths.some(path => currentPath.includes(path))) {
        if (!isAuthenticated()) {
            const redirectUrl = encodeURIComponent(window.location.href); // Full URL
            window.location.href = `/login.html?redirect=${redirectUrl}`;
        }
    }
});