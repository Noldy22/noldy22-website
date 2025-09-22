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
 * This runs after the header is loaded.
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
                    }).catch(error => console.error('Logout Error:', error));
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
 * Sets up the mobile menu toggle functionality.
 * This runs after the header is loaded.
 */
function setupMobileMenu() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', () => {
            mainNav.classList.toggle('mobile-active');
        });
    }
}

/**
 * Fetches and injects an HTML file into a placeholder element.
 * Includes a callback function to run reliably after injection.
 * @param {string} placeholderId - The ID of the element to inject HTML into.
 * @param {string} filePath - The path to the HTML partial file.
 * @param {function} [callback] - Optional callback function to execute after loading.
 */
const loadPartial = (placeholderId, filePath, callback) => {
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
                if (callback) {
                    callback();
                }
            }
        })
        .catch(error => console.error(`Error loading partial ${filePath}:`, error));
};

// Main execution block that runs when the page is ready
document.addEventListener('DOMContentLoaded', () => {
    // Load the header, and WHEN IT'S DONE, set up its interactive elements
    loadPartial('header-placeholder', '/partials/header.html', () => {
        setupAuthButton();
        setupMobileMenu();
    });

    // Load the footer
    loadPartial('footer-placeholder', '/partials/footer.html');
});