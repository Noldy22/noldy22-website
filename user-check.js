  import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";

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
