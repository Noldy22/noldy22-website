// signup.js
import { signup }     from "./firebase.js";
import { showError }  from "./error-handler.js";

document.getElementById("signupForm").addEventListener("submit", async (e) => {
  e.preventDefault();

  const email           = document.getElementById("signupEmail").value.trim();
  const password        = document.getElementById("signupPassword").value;
  const confirmPassword = document.getElementById("confirmPassword").value;

  // — Enhanced client-side validation —
  if (!email.includes("@")) {
    return showError("Invalid email format");
  }
  if (password !== confirmPassword) {
    return showError("Passwords must match");
  }
  if (password.length < 8) {
    return showError("Password needs at least 8 characters");
  }

  try {
    // Call Firebase Auth
    await signup(email, password);

    // On success, send them to login (or directly to dashboard if you prefer)
    alert("Registration successful! Please log in.");
    window.location.href = "login.html";

  } catch (err) {
    // err.code is like "auth/email-already-in-use", err.message is a human-readable string
    showError(err.message);
  }
});
