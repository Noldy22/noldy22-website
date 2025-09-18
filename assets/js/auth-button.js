import { auth } from './firebase-init.js';
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-auth.js";
import { showAlert } from './main.js';

const authLink = document.getElementById('authLink');
if (authLink) {
    onAuthStateChanged(auth, user => {
        if (user) {
            authLink.textContent = 'Logout';
            authLink.href = '#';
            authLink.onclick = (e) => {
                e.preventDefault();
                signOut(auth).then(() => {
                    showAlert('Logged out successfully', 'success');
                    setTimeout(() => window.location.href = '/', 1500);
                }).catch(err => showAlert('Error logging out.', 'error'));
            };
        } else {
            authLink.textContent = 'Login';
            authLink.href = '/login.html';
            authLink.onclick = null;
        }
    });
}