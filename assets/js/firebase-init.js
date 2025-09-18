import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

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
// Get the Auth service and export it for other scripts to use
export const auth = getAuth(app);