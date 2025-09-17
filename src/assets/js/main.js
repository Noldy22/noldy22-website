document.addEventListener('DOMContentLoaded', function() {
  
  // Function to fetch and inject HTML content
  const loadHTML = (filePath, elementId) => {
    // This path is updated to look for "partials" instead of "_partials"
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