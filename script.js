'use strict';

// Set variables to reduce duplication
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnsOpenModal = document.querySelectorAll('.show-modal');

// Remove 'hidden' from class lists
const openModal = function() {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

// Add 'hidden' to class lists
const closeModal = function() {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

// Loop through all of the modals
for (let i = 0; i < btnsOpenModal.length; i++) {
    // When a modal is clicked got to openModal
    btnsOpenModal[i].addEventListener('click', openModal);
}

// Close modal when the close button is clicked
btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

// Handle 'esc' keyboard event
document.addEventListener('keydown', function(e) {
    if (e.key === "Escape" && !modal.classList.contains('hidden')) {
        closeModal();
    }
});
