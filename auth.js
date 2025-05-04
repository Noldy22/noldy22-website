import jwtDecode from 'https://cdn.jsdelivr.net/npm/jwt-decode@3.1.2/+esm';

// Helper function to get a cookie by name
function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(';').shift();
    return null;
}

// Helper function to delete a cookie by name
function deleteCookie(name) {
    document.cookie = `${name}=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;`;
}

export function isAuthenticated() {
    const token = getCookie('auth_token');
    if (!token) return false;
    
    try {
        const { exp } = jwtDecode(token);
        return Date.now() < exp * 1000 - 5000; // 5-second buffer
    } catch {
        deleteCookie('auth_token'); // Clear invalid tokens
        return false;
    }
}

export function logout() {
    deleteCookie('auth_token');
    window.location.href = 'login.html';
}

export function getAuthHeaders() {
    const token = getCookie('auth_token');
    return {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json'
    };
}