// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAWmF_ZmHuxD4beWeJ29rqW-E49BdwQYyE",
    authDomain: "noldy22-7836c.firebaseapp.com",
    projectId: "noldy22-7836c",
    storageBucket: "noldy22-7836c.firebasestorage.app",
    messagingSenderId: "782608981663",
    appId: "1:782608981663:web:bfe34cec174ed662060caa",
    measurementId: "G-HNT78Q9EM6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Function to handle the auth button logic
function setupAuthButton() {
    const authLink = document.getElementById('authLink');
    if (!authLink) {
        console.error("Auth link element not found!");
        return;
    }

    onAuthStateChanged(auth, user => {
        if (user) {
            // User is signed in, show Logout
            authLink.textContent = 'Logout';
            authLink.href = '#';
            authLink.onclick = (e) => {
                e.preventDefault();
                signOut(auth).then(() => {
                    // Redirect to homepage after logout
                    window.location.href = '/index.html';
                }).catch(error => {
                    console.error('Sign out error', error);
                });
            };
        } else {
            // User is signed out, show Login
            authLink.textContent = 'Login';
            authLink.href = '/login.html';
            authLink.onclick = null; // Remove the signout handler
        }
    });
}

// Function to load HTML partials (like header and footer)
const loadPartial = (placeholderId, filePath) => {
    fetch(filePath)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Failed to load ${filePath}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(data => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) {
                placeholder.innerHTML = data;
            }
            // IMPORTANT: If we just loaded the header, NOW we can set up the auth button
            if (placeholderId === 'header-placeholder') {
                setupAuthButton();
            }
        })
        .catch(error => console.error(error));
};

// Load the header and footer when the DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    loadPartial('header-placeholder', '/partials/header.html');
    loadPartial('footer-placeholder', '/partials/footer.html');
});