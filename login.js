import { showError } from './error-handler.js';

document.getElementById('loginForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            localStorage.setItem('token', data.token);
            
            // Handle redirection
            const urlParams = new URLSearchParams(window.location.search);
            const redirectPath = urlParams.get('redirect') || '/index.html';
            window.location.href = decodeURIComponent(redirectPath);
        } else {
            showError(data.error || 'Login failed');
        }
    } catch (err) {
        showError('Network error - please try again');
    }
});