document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const headerElement = document.querySelector('header');
  const body = document.body;

  // Dynamic padding adjustment (DESKTOP ONLY)
  function updatePadding() {
      if (window.innerWidth > 768) { // Only apply to desktop
          const headerHeight = headerElement.offsetHeight;
          body.style.paddingTop = headerHeight + 'px';
      } else {
          body.style.paddingTop = '0'; // Reset for mobile
      }
  }

  // Initial setup
  updatePadding();
  
  // Update on resize
  window.addEventListener('resize', updatePadding);

  // Toggle menu
  menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('menu-active');
  });

  // Close menu when clicking outside
  document.addEventListener('click', function(e) {
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          navMenu.classList.remove('menu-active');
      }
  });

  // Dropdown handling for mobile
  document.querySelectorAll('.dropdown > a').forEach(item => {
      item.addEventListener('click', function(e) {
          if (window.innerWidth <= 768) {
              e.preventDefault();
              const dropdownMenu = this.nextElementSibling;
              dropdownMenu.classList.toggle('menu-active');
          }
      });
  });
});