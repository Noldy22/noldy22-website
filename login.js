import { showError } from './error-handler.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        // Use full backend URL
        const response = await fetch('https://your-render-backend-url.onrender.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            // Wait for storage to complete before redirect
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