document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.querySelector('#contactForm');
    const toggleFormBtn = document.querySelector('#toggleFormBtn');

    if (toggleFormBtn) {
        toggleFormBtn.addEventListener('click', function() {
            contactForm.style.display = contactForm.style.display === 'none' ? 'block' : 'none';
        });
    }
});
