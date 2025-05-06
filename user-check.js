import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-analytics.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
  
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
  const auth = getAuth();
  onAuthStateChanged(auth, user => {
    if (user) {
      console.log("✅ Client sees user:", user.uid);
      // maybe show a “Logout” button
    } else {
      console.log("❌ Client sees NO user, redirecting…");
      window.location.replace('/login.html');
    }
  });
