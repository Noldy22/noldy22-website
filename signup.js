import { showError } from './error-handler.js';

document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) return showError('Passwords do not match');
    if (password.length < 8) return showError('Password must be at least 8 characters');

    try {
        const response = await fetch('/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        const data = await response.json();
        
        if (response.ok) {
            alert('Signup successful! Please login.');
            window.location.href = 'login.html';
        } else {
            showError(data.error || 'Registration failed');
        }
    } catch (err) {
        showError('Network error - please try again');
    }
});