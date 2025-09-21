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

// NOTE: The 'showAlert' function is defined here. No need to import it.
function showAlert(message, type = 'success') {
    // This function will be used by the login/signup pages if an alert container exists
    const container = document.getElementById('alertContainer');
    if (container) {
        const content = container.querySelector('.alert-content');
        const messageElement = document.getElementById('alertMessage');
        content.className = 'alert-content';
        messageElement.textContent = message;
        content.classList.add(type);
        container.style.display = 'block';
        setTimeout(() => { container.style.display = 'none'; }, 5000);
    }
}

// Function to handle the auth button logic
function setupAuthButton() {
    const authLink = document.getElementById('authLink');
    if (!authLink) {
        // This is expected on login/signup pages, so we don't log an error
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
                    window.location.href = '/index.html';
                });
            };
        } else {
            // User is signed out, show Login
            authLink.textContent = 'Login';
            authLink.href = '/login.html';
            authLink.onclick = null;
        }
    });
}

// Function to load HTML partials
const loadPartial = (placeholderId, filePath) => {
    fetch(filePath)
        .then(response => response.ok ? response.text() : Promise.reject(`Failed to load ${filePath}`))
        .then(data => {
            const placeholder = document.getElementById(placeholderId);
            if (placeholder) placeholder.innerHTML = data;
            
            // If we just loaded the header, set up its interactive elements
            if (placeholderId === 'header-placeholder') {
                setupAuthButton(); // Set up the Login/Logout button
                // Re-initialize nav logic from nav.js if needed, or ensure nav.js runs after this
                const menuToggle = document.getElementById('menu-toggle');
                const navMenu = document.getElementById('nav-menu');
                if (menuToggle && navMenu) {
                    menuToggle.addEventListener('click', () => {
                        navMenu.classList.toggle('active'); // Ensure nav.js uses a class like 'active'
                    });
                }
            }
        })
        .catch(error => console.error(error));
};

// Load header and footer on all pages
document.addEventListener('DOMContentLoaded', () => {
    loadPartial('header-placeholder', '/partials/header.html');
    loadPartial('footer-placeholder', '/partials/footer.html');
});