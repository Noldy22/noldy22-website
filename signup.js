import { showError } from './error-handler.js';

document.getElementById('signupForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Enhanced validation
    if (!email.includes('@')) return showError('Invalid email format');
    if (password !== confirmPassword) return showError('Passwords must match');
    if (password.length < 8) return showError('Password needs 8+ characters');

    try {
        const response = await fetch('https://noldy22-website.onrender.com/api/signup', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
            credentials: 'include' // Include credentials for consistency
        });

        const data = await response.json();
        
        if (response.ok && data.message === 'Registration successful') {
            alert('Registration successful! Please login.');
            window.location.href = 'login.html';
        } else {
            showError(data.error || 'Registration failed: Try different credentials');
        }
    } catch (err) {
        showError('Connection error: Server unavailable');
    }
});