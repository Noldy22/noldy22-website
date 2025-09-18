document.addEventListener('DOMContentLoaded', function() {
    // Select elements by their unique ID for reliability
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            // This toggles the 'mobile-active' class on the <nav> element
            mainNav.classList.toggle('mobile-active');
        });
    }
});