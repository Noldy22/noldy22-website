import { auth } from './firebase-init.js';
import { signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// This self-contained alert function will be used only by this page.
function showAlert(message, type = 'error') {
    const container = document.getElementById('alertContainer');
    if (!container) return;
    message.startsWith('Error:') ? (type = 'error') : (type = 'success');

    const content = container.querySelector('.alert-content');
    const messageElement = document.getElementById('alertMessage');
    
    content.className = 'alert-content';
    messageElement.textContent = message;
    content.classList.add(type);
    container.style.display = 'block';
    
    setTimeout(() => { container.style.display = 'none'; }, 5000);
}

document.addEventListener('DOMContentLoaded', () => {
    // All the elements this script needs
    const loginForm = document.getElementById('loginForm');
    const googleBtn = document.getElementById('google-signin');
    const forgotPasswordBtn = document.getElementById('forgotPasswordBtn');
    const passwordResetModal = document.getElementById('passwordResetModal');
    const closeResetModal = document.getElementById('closeResetModal');
    const submitResetEmail = document.getElementById('submitResetEmail');
    const resetEmailInput = document.getElementById('resetEmail');

    // Close alert button
    const closeAlertButton = document.getElementById('closeAlert');
    if (closeAlertButton) {
        closeAlertButton.addEventListener('click', () => {
            document.getElementById('alertContainer').style.display = 'none';
        });
    }

    // Friendly error messages
    function getFriendlyErrorMessage(errorCode) {
        if (errorCode === 'auth/user-not-found' || errorCode === 'auth/wrong-password') {
            return 'Incorrect email or password. Please try again.';
        }
        return 'An unknown error occurred. Please try again.';
    }
    
    // The function that runs on successful Firebase login
    function handleAuthSuccess(user) {
        return user.getIdToken(true).then(idToken => {
            return fetch('/setTokenCookie', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ token: idToken })
            });
        }).then(response => {
            if (!response.ok) {
                // This error IS expected on your local server
                throw new Error('Failed to set auth cookie.');
            }
            // This redirect will happen when deployed on Cloudflare
            window.location.href = '/services/lessons.html';
        });
    }

    // Email/Password login
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredential => handleAuthSuccess(userCredential.user))
                .catch(error => showAlert(getFriendlyErrorMessage(error.code)));
        });
    }

    // Password Reset
    if (forgotPasswordBtn) {
        forgotPasswordBtn.addEventListener('click', (e) => {
            e.preventDefault();
            passwordResetModal.style.display = 'block';
        });
    }
    if (closeResetModal) {
        closeResetModal.addEventListener('click', () => passwordResetModal.style.display = 'none');
    }
    if (submitResetEmail) {
        submitResetEmail.addEventListener('click', (e) => {
            e.preventDefault();
            const email = resetEmailInput.value;
            sendPasswordResetEmail(auth, email)
                .then(() => {
                    passwordResetModal.style.display = 'none';
                    showAlert('Password reset email sent! Check your inbox.', 'success');
                })
                .catch(error => showAlert(getFriendlyErrorMessage(error.code)));
        });
    }
});