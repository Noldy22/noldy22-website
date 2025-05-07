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
  onAuthStateChanged,
  signOut
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

// Grab your nav auth link
const authLink = document.getElementById('authLink');

// Listen for auth state changes
onAuthStateChanged(auth, user => {
  if (user) {
    console.log("✅ Client sees user:", user.uid);

    // Signed in → show “Logout”
    authLink.textContent = 'Logout';
    authLink.href = '#';            // override the link
    authLink.onclick = e => {
      e.preventDefault();
      signOut(auth)
        .then(() => {
          // Use styled alert instead of default
          showAlert('Logged out successfully', 'success');
          
          // Redirect to login after short delay
          setTimeout(() => {
            window.location.href = '/login.html';
          }, 1500); // Let user see the success message first
        })
        .catch(err => {
          console.error(err);
          showAlert('Error logging out', 'error');
        });
    };
  } else {
    console.log("❌ Client sees NO user");

    // Not signed in → show “Login”
    authLink.textContent = 'Login';
    authLink.href = '/login.html';
    authLink.onclick = null;        // remove any old handler
  }
});