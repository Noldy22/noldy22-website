window.addEventListener("DOMContentLoaded", function () {
  // Get the form elements
  const form = document.getElementById("contact-form");
  const successMessage = document.getElementById("success-message");

  // Add a submit event listener
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
      headers: {
        'Accept': 'application/json'
      }
    }).then(response => {
      if (response.ok) {
        // If successful, show the success message and hide the form
        successMessage.style.display = "block";
        form.style.display = "none";
      } else {
        // If there's an error, you can handle it here if you want
        alert("Oops! There was a problem submitting your form.");
      }
    }).catch(error => {
      alert("Oops! There was a problem submitting your form.");
    });
  });
});