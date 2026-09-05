// Add alert handling functions (same style as first example)
function showAlert(message, type = 'success') {
    const container = document.getElementById('alertContainer');
    const content = container.querySelector('.alert-content');
    const messageElement = document.getElementById('alertMessage');
    
    // Reset classes
    content.className = 'alert-content';
    
    // Set content and style
    messageElement.textContent = message;
    content.classList.add(type);
    
    // Show alert
    container.style.display = 'block';
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        container.style.display = 'none';
    }, 5000);
}

// Close alert handler
document.querySelector('.close-alert')?.addEventListener('click', () => {
    document.getElementById('alertContainer').style.display = 'none';
});

// Firebase imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import {
  getAuth,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);

const HIRE_DEV_URL = "https://wa.me/255755904987?text=Hi%20Noldy%2C%20I%20found%20your%20portfolio%20and%20I%27d%20like%20to%20discuss%20a%20custom%20MT5%20coding%20project.";

// Configure header CTA button
function configureCtaButton() {
  const authLink = document.getElementById('authLink');
  if (authLink) {
    authLink.innerHTML = '<i class="fab fa-whatsapp"></i> Hire Developer';
    authLink.href = HIRE_DEV_URL;
    authLink.target = '_blank';
    authLink.rel = 'noopener noreferrer';
    authLink.classList.add('nav-cta-btn');
    authLink.onclick = null;
  }
}

// Execute immediately and when DOM is ready
configureCtaButton();
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', configureCtaButton);
}

// Keep auth listener active for analytics/logging without overriding the CTA button
onAuthStateChanged(auth, user => {
  configureCtaButton();
  if (user) {
    console.log("✅ Authenticated user active:", user.uid);
  } else {
    console.log("ℹ️ Guest user - Hire Developer CTA active");
  }
});