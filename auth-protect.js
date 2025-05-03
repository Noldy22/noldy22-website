import { isAuthenticated } from './auth.js';

document.addEventListener('DOMContentLoaded', () => {
    const protectedPaths = [
        '/products/',
        '/services/',
        '/about-Noldy22.html',
        '/contact-Noldy22.html'
    ];

    const currentPath = window.location.pathname;
    
    if (protectedPaths.some(path => currentPath.startsWith(path))) {
        if (!isAuthenticated()) {
            const redirectUrl = encodeURIComponent(window.location.pathname);
            window.location.href = `/login.html?redirect=${redirectUrl}`;
        }
    }
});

window.logout = () => {
    localStorage.removeItem('token');
    window.location.href = '/login.html';
};