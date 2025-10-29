/**
 * Custom JavaScript for Dagii Scrubs Website
 */

// 1. Bootstrap Form Validation (Used on contact.html)
(function () {
    'use strict';

    const forms = document.querySelectorAll('.needs-validation');

    Array.prototype.slice.call(forms).forEach(function (form) {
        form.addEventListener('submit', function (event) {
            if (!form.checkValidity()) {
                event.preventDefault();
                event.stopPropagation();
            } else {
                // Form is valid - In a real application, this is where you'd send data via AJAX
                event.preventDefault(); 
                alert("Thank you for your message! We will get back to you shortly.");
                form.reset(); // Clear the form
                form.classList.remove('was-validated'); // Reset validation state
            }
            // Add 'was-validated' class to show feedback messages (required by Bootstrap 5)
            form.classList.add('was-validated');
        }, false);
    });
})();


// 2. Gallery Lightbox/Modal Logic (Used on gallery.html)
document.addEventListener('DOMContentLoaded', function() {
    const imageModal = document.getElementById('imageModal');
    
    if (imageModal) {
        imageModal.addEventListener('show.bs.modal', function (event) {
            // Button that triggered the modal (the gallery item)
            const item = event.relatedTarget; 

            // Extract info from data- attributes set in the HTML
            const imgSrc = item.getAttribute('data-img-src');
            const imgCaption = item.getAttribute('data-img-caption');

            // Update the modal's content
            const modalImage = imageModal.querySelector('#modalImage');
            const modalCaption = imageModal.querySelector('#modalCaption');

            modalImage.src = imgSrc;
            modalCaption.textContent = imgCaption;
        });
    }
});