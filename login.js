// Add this alert handling code at the top of your file
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
  
  // Error message formatter
  function getFriendlyErrorMessage(errorCode) {
    switch(errorCode) {
        case 'auth/invalid-email':
            return 'Please enter a valid email address.';
        case 'auth/user-disabled':
            return 'This account has been disabled.';
        case 'auth/user-not-found':
            return 'No account found with this email.';
        case 'auth/wrong-password':
            return 'Incorrect password. Please try again.';
        case 'auth/too-many-requests':
            return 'Too many attempts. Please try again later.';
        default:
            return 'An error occurred. Please try again.';
    }
  }
  
  // Import the functions you need from the Firebase SDK
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
  import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
  
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
  const analytics = getAnalytics(app);
  const auth = getAuth(app);
  
  // Submit event listener
  const submit = document.getElementById('submit');
  submit.addEventListener("click", function(event) {
      event.preventDefault();
  
      // Inputs
      const email = document.getElementById('email').value;
      const password = document.getElementById('password').value;
  
      // 1) Sign in to Firebase Auth
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
          showAlert('Logging in to your account...', 'success');
  
          console.log("🔑 About to fetch token cookie…");
             return auth.currentUser.getIdToken(true)
             .then(idToken => {
           console.log("🔐 Got ID token, now POSTing to /setTokenCookie");
           return fetch('/setTokenCookie', { … });


          // 2) Get fresh ID token
          return auth.currentUser.getIdToken(/* forceRefresh */ true);
      })
      .then((idToken) => {
          // 3) POST token to your Cloudflare Function to set cookie
          return fetch('/setTokenCookie', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({ token: idToken })
          });
      })
      .then((response) => {
          if (!response.ok) {
              throw new Error('Failed to set auth cookie.');
          }
          // 4) Only after cookie is set, redirect into your protected area
          window.location.href = 'index.html';
      })
      .catch((error) => {
          // If any step errors, show a friendly message
          console.error(error);
          showAlert(
            error.message.includes('Failed to set auth cookie')
              ? 'Login succeeded, but we couldn’t complete setup. Try again.'
              : getFriendlyErrorMessage(error.code),
            'error'
          );
      });
  });
  