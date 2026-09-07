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

// Universal Video Modal Integration for Strategy Tester Runs
function createVideoModalElement() {
  let modal = document.getElementById('n22VideoModal');
  if (!modal) {
    modal = document.createElement('div');
    modal.id = 'n22VideoModal';
    modal.className = 'video-modal';
    modal.setAttribute('role', 'dialog');
    modal.setAttribute('aria-modal', 'true');
    modal.innerHTML = `
      <div class="video-modal-dialog">
        <div class="video-modal-header">
          <h3 class="video-modal-title" id="videoModalTitle"><i class="fas fa-play-circle" style="color: var(--accent);"></i> Strategy Tester Run</h3>
          <button type="button" class="video-modal-close" aria-label="Close Video" id="videoModalCloseBtn">&times;</button>
        </div>
        <div class="video-responsive-16-9">
          <iframe id="videoModalIframe" src="" title="Strategy Tester Run" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      </div>
    `;
    document.body.appendChild(modal);

    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeVideoModal();
      }
    });

    const closeBtn = modal.querySelector('#videoModalCloseBtn');
    if (closeBtn) {
      closeBtn.addEventListener('click', closeVideoModal);
    }

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeVideoModal();
      }
    });
  }
  return modal;
}

window.openVideoModal = function(youtubeId, title) {
  if (!youtubeId) return;
  const modal = createVideoModalElement();
  const iframe = modal.querySelector('#videoModalIframe');
  const titleEl = modal.querySelector('#videoModalTitle');
  if (titleEl && title) {
    titleEl.innerHTML = `<i class="fas fa-play-circle" style="color: var(--accent);"></i> ${title} — Strategy Tester Run`;
  }
  if (iframe) {
    iframe.src = `https://www.youtube-nocookie.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  }
  modal.classList.add('active');
  document.body.style.overflow = 'hidden';
};

window.closeVideoModal = function() {
  const modal = document.getElementById('n22VideoModal');
  if (modal) {
    modal.classList.remove('active');
    const iframe = modal.querySelector('#videoModalIframe');
    if (iframe) iframe.src = '';
    document.body.style.overflow = '';
  }
};