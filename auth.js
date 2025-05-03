import jwtDecode from 'jwt-decode';

export function isAuthenticated() {
    const token = localStorage.getItem('token');
    if (!token) return false;
    
    try {
        const { exp } = jwtDecode(token);
        return Date.now() < exp * 1000;
    } catch {
        return false;
    }
}

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