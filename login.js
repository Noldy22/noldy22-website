import { showError } from './error-handler.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        // Use full backend URL with credentials included
        const response = await fetch('https://noldy22-website.onrender.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include' // Include credentials to allow cookies
        });

        const data = await response.json();
        
        if (response.ok && data.success) {
            // No need to store the token; it's handled by the cookie
            // Wait for any potential cookie setting before redirect
            setTimeout(() => {
                const urlParams = new URLSearchParams(window.location.search);
                const redirectPath = urlParams.get('redirect') || '/index.html';
                window.location.href = decodeURIComponent(redirectPath);
            }, 100);
        } else {
            showError(data.error || 'Login failed: Check your credentials');
        }
    } catch (err) {
        showError('Connection error: Server unavailable');
    }
});