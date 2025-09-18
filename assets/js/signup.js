// Helper functions (self-contained within this script)
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

// Import Firebase functions
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

const firebaseConfig = {
    apiKey: "AIzaSyAWmF_ZmHuxD4beWeJ29rqW-E49BdwQYyE",
    authDomain: "noldy22-7836c.firebaseapp.com",
    projectId: "noldy22-7836c",
    storageBucket: "noldy22-7836c.firebasestorage.app",
    messagingSenderId: "782608981663",
    appId: "1:782608981663:web:bfe34cec174ed662060caa",
    measurementId: "G-HNT78Q9EM6"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

document.addEventListener('DOMContentLoaded', () => {
    // Friendly error messages
    function getFriendlyErrorMessage(errorCode) {
        switch(errorCode) {
            case 'auth/email-already-in-use': return 'This email is already registered.';
            case 'auth/weak-password': return 'Password should be at least 6 characters.';
            case 'auth/invalid-email': return 'Please enter a valid email address.';
            default: return 'An error occurred. Please try again.';
        }
    }

    // Close alert button
    const closeAlertButton = document.getElementById('closeAlert');
    if (closeAlertButton) {
        closeAlertButton.addEventListener('click', () => {
            document.getElementById('alertContainer').style.display = 'none';
        });
    }

    // Signup form
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener("submit", function(event) {
            event.preventDefault();
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;

            createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                showAlert('Account created successfully! Please log in.', 'success');
                setTimeout(() => {
                    window.location.href = "/login.html";
                }, 2000);
            })
            .catch((error) => {
                const errorMessage = getFriendlyErrorMessage(error.code);
                showAlert(errorMessage, 'error');
            });
        });
    }
});