document.addEventListener('DOMContentLoaded', function() {
    // Select the menu elements directly
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('mobile-active');
        });
    }
});