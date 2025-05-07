import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics }   from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
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

// 2. Grab your nav auth link
const authLink = document.getElementById('authLink');

// 3. Listen for auth state changes
onAuthStateChanged(auth, user => {
  if (user) {
    // Signed in → show “Logout”
    authLink.textContent = 'Logout';
    authLink.href = '#';            // override the link
    authLink.onclick = e => {
      e.preventDefault();
      signOut(auth)
        .then(() => {
          // optional feedback
          alert('Logged out successfully');
          // redirect to login (or home)
          window.location.href = '/login.html';
        })
        .catch(err => {
          console.error(err);
          alert('Error logging out');
        });
    };
  } else {
    // Not signed in → show “Login”
    authLink.textContent = 'Login';
    authLink.href = '/login.html';
    authLink.onclick = null;        // remove any old handler
  }
});
