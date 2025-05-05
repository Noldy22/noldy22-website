// login.js
import { login }     from "./firebase.js";
import { showError } from "./error-handler.js";

document.getElementById("loginForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email    = document.getElementById("loginEmail").value.trim();
  const password = document.getElementById("loginPassword").value;

  try {
    // Call Firebase Auth
    await login(email, password);

    // On success, redirect to dashboard (or use your redirect logic)
    const urlParams   = new URLSearchParams(window.location.search);
    const redirectTo  = urlParams.get("redirect") || "dashboard.html";
    window.location.href = redirectTo;

  } catch (err) {
    // err.message is human‐readable (e.g. "Firebase: Error (auth/wrong-password).")
    showError(err.message);
  }
});
