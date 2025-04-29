document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');
  const headerElement = document.querySelector('header');
  const body = document.body;

  // Dynamic padding adjustment (DESKTOP ONLY)
  function updatePadding() {
      if (window.innerWidth > 768) {
          const headerHeight = headerElement.offsetHeight;
          body.style.paddingTop = headerHeight + 'px';
      } else {
          body.style.paddingTop = '0';
      }
  }

  // Initial setup
  updatePadding();
  window.addEventListener('resize', updatePadding);

  // Mobile menu toggle
  menuToggle.addEventListener('click', function(e) {
      e.stopPropagation();
      navMenu.classList.toggle('menu-active');
  });

  // Dropdown toggle functionality
  document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
      toggle.addEventListener('click', function(e) {
          e.preventDefault();
          e.stopPropagation();
          const dropdown = this.closest('.dropdown');
          const isActive = dropdown.classList.contains('active');
          
          // Close all dropdowns first
          document.querySelectorAll('.dropdown').forEach(d => d.classList.remove('active'));
          
          // Toggle current dropdown if not active
          if (!isActive) {
              dropdown.classList.add('active');
          }
      });
  });

  // Close menus when clicking outside
  document.addEventListener('click', function(e) {
      // Close mobile menu
      if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          navMenu.classList.remove('menu-active');
      }
      
      // Close all dropdowns
      document.querySelectorAll('.dropdown').forEach(dropdown => {
          dropdown.classList.remove('active');
      });
  });

  // Mobile: Close dropdowns when resizing to desktop
  window.addEventListener('resize', function() {
      if (window.innerWidth > 768) {
          document.querySelectorAll('.dropdown').forEach(dropdown => {
              dropdown.classList.remove('active');
          });
      }
  });
});