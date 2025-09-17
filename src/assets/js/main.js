// We now EXPORT this function so other modules can use it
export function showAlert(message) {
    const alertContainer = document.getElementById('alertContainer');
    const alertMessage = document.getElementById('alertMessage');
    const closeAlert = document.getElementById('closeAlert');

    if (alertContainer && alertMessage && closeAlert) {
        alertMessage.textContent = message;
        alertContainer.style.display = 'block';

        closeAlert.onclick = function() {
            alertContainer.style.display = 'none';
        }
        window.onclick = function(event) {
            if (event.target == alertContainer) {
                alertContainer.style.display = 'none';
            }
        }
    }
}

// The header/footer loader is no longer needed in this file
// as each page is a full document. We can keep this file
// clean for global functions like our alert.