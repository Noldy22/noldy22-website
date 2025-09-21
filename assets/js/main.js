// Firebase Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

// Firebase Configuration
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

/**
 * Sets up the dynamic Login/Logout button.
 * This is called after the header is confirmed to be loaded.
 */
function setupAuthButton() {
    const authLink = document.getElementById('authLink');
    if (authLink) {
        onAuthStateChanged(auth, user => {
            if (user) {
                authLink.textContent = 'Logout';
                authLink.href = '#';
                authLink.onclick = (e) => {
                    e.preventDefault();
                    signOut(auth).then(() => {
                        window.location.href = '/index.html';
                    });
                };
            } else {
                authLink.textContent = 'Login';
                authLink.href = '/login.html';
                authLink.onclick = null;
            }
        });
    }
}

/**
 * Fetches and injects an HTML file into a placeholder element.
 * @param {string} placeholderId - The ID of the element to inject HTML into.
 * @param {string} filePath - The path to the HTML partial file.
 */
const loadPartial = (placeholderId, filePath) => {
    fetch(filePath)
        .then(response => {
            if (!response.ok) throw new Error(`Failed to load ${filePath}`);
            return response.text();
        })
        .then(data => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) placeholder.innerHTML = data;

            // If the header was just loaded, initialize its components.
            if (placeholderId === 'header-placeholder') {
                // 1. Set up the Auth button
                setupAuthButton();
                // 2. Dynamically load nav.js so it runs now that the header exists
                const navScript = document.createElement('script');
                navScript.src = '/assets/js/nav.js';
                navScript.defer = true;
                document.body.appendChild(navScript);
            }
        })
        .catch(error => console.error(error));
};

// Main execution: Load header and footer when the DOM is ready.
document.addEventListener('DOMContentLoaded', () => {
    loadPartial('header-placeholder', '/partials/header.html');
    loadPartial('footer-placeholder', '/partials/footer.html');
});