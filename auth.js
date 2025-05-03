import jwtDecode from 'jwt-decode';

export function isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) return false;
    
    try {
        const { exp } = jwtDecode(token);
        return Date.now() < exp * 1000 - 5000; // 5-second buffer
    } catch {
        localStorage.removeItem('token'); // Clear invalid tokens
        return false;
    }
}

// Keep other functions unchanged

export function logout() {
    localStorage.removeItem('token');
    window.location.href = 'login.html';
}

export function getAuthHeaders() {
    return {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        'Content-Type': 'application/json'
    };
}