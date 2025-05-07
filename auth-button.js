// ── Alert helpers (copied from login.js) ───────────────────────
function showAlert(message, type = 'success') {
    const container = document.getElementById('alertContainer');
    const content   = container.querySelector('.alert-content');
    const msgEl     = document.getElementById('alertMessage');
  
    content.className = 'alert-content';
    msgEl.textContent = message;
    content.classList.add(type);
    container.style.display = 'block';
  
    setTimeout(() => {
      container.style.display = 'none';
    }, 5000);
  }
  
  function getFriendlyErrorMessage(errorCode) {
    switch (errorCode) {
      case 'auth/invalid-email':       return 'Please enter a valid email address.';
      case 'auth/user-disabled':       return 'This account has been disabled.';
      case 'auth/user-not-found':      return 'No account found with this email.';
      case 'auth/wrong-password':      return 'Incorrect password. Please try again.';
      case 'auth/too-many-requests':   return 'Too many attempts. Please try again later.';
      default:                         return 'An error occurred. Please try again.';
    }
  }
  // ────────────────────────────────────────────────────────────────
  
  
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics }   from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import {
    getAuth,
    onAuthStateChanged,
    signOut
  } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
    
  const firebaseConfig = {
    apiKey: "…",
    authDomain: "noldy22-7836c.firebaseapp.com",
    projectId: "noldy22-7836c",
    // …
  };
    
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  
  // Grab the nav link
  const authLink = document.getElementById('authLink');
  
  // Swap between Login/Logout
  onAuthStateChanged(auth, user => {
    if (user) {
      authLink.textContent = 'Logout';
      authLink.href = '#';
      authLink.onclick = e => {
        e.preventDefault();
        signOut(auth)
          .then(() => {
            showAlert('Logged out successfully', 'success');
            setTimeout(() => { window.location.href = '/login.html'; }, 1000);
          })
          .catch(err => {
            console.error(err);
            showAlert('Error logging out. Please try again.', 'error');
          });
      };
    } else {
      authLink.textContent = 'Login';
      authLink.href = '/login.html';
      authLink.onclick = null;
    }
  });
  