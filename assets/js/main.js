// This function creates and manages the custom alert pop-up.
const showAlert = (message, type = 'error') => {
    const alertContainer = document.querySelector('.alert-container');
    const alertContent = alertContainer.querySelector('.alert-content');
    const alertMessage = document.getElementById('alertMessage');
    const closeButton = alertContainer.querySelector('.close-alert');

    // Failsafe in case the HTML is missing
    if (!alertContainer || !alertMessage || !closeButton) {
        console.error('Alert box HTML elements not found!');
        alert(message); // Fallback to a simple browser alert
        return;
    }

    // Set the message and style based on type ('success' or 'error')
    alertMessage.textContent = message;
    alertContent.className = 'alert-content'; // Reset classes first
    alertContent.classList.add(type);

    // Show the alert
    alertContainer.style.display = 'flex';

    // Function to hide the alert
    const hideAlert = () => {
        alertContainer.style.display = 'none';
    };

    // Add click event to the close button
    closeButton.onclick = hideAlert;
    
    // Automatically hide the alert after 4 seconds
    setTimeout(hideAlert, 4000);
};

// Export the showAlert function to make it available to other scripts
export { showAlert };


// Your existing code to load header/footer will run after the page is ready
document.addEventListener('DOMContentLoaded', function() {
  
  // Function to fetch and inject HTML content
  const loadHTML = (filePath, elementId) => {
    fetch(`/partials/${filePath}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Network response was not ok for ${filePath}`);
        }
        return response.text();
      })
      .then(data => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = data;

          // *** START: NEW CODE ADDED HERE ***
          // If we just loaded the header, find the menu button and make it work.
          if (elementId === 'header-placeholder') {
            const menuToggle = document.getElementById('menuToggle');
            const mainNav = document.getElementById('mainNav');
            if (menuToggle && mainNav) {
                menuToggle.addEventListener('click', function() {
                    mainNav.classList.toggle('mobile-active');
                });
            }
          }
          // *** END: NEW CODE ADDED HERE ***
        }
      })
      .catch(error => {
        console.error(`Error loading partial:`, error);
      });
  };

  // Load Header and Footer from the new path
  loadHTML('header.html', 'header-placeholder');
  loadHTML('footer.html', 'footer-placeholder');
  
});