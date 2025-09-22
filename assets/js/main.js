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
 * Restricts access to protected pages and saves the intended destination.
 */
function handlePageProtection() {
    const protectedPaths = [
        '/products/',
        '/services/',
        '/lessons/'
    ];

    const currentPath = window.location.pathname;
    const isProtected = protectedPaths.some(path => currentPath.startsWith(path));

    if (isProtected) {
        onAuthStateChanged(auth, user => {
            if (!user) {
                // Save the current page URL to redirect back to after login
                sessionStorage.setItem('redirectUrl', currentPath);
                console.log("Access denied. Storing redirect URL and redirecting to login.");
                window.location.href = '/login.html';
            }
        });
    }
}


/**
 * Sets up the dynamic Login/Logout button.
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

// Main execution block
document.addEventListener('DOMContentLoaded', () => {
    handlePageProtection();

    loadPartial('header-placeholder', '/partials/header.html', () => {
        setupAuthButton();
        setupMobileMenu();
    });

    loadPartial('footer-placeholder', '/partials/footer.html');
});