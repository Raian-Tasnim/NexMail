// Function to handle the active state of top navbar links and dropdown menu
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link-top');
    const hamburger = document.querySelector('.hamburger');
    const dropdownMenu = document.querySelector('.dropdown-menu');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();

            // Handle active state for desktop nav links
            navLinks.forEach(l => l.classList.remove('active'));
            event.target.classList.add('active');
        });
    });

    // Toggle dropdown menu on hamburger click
    hamburger.addEventListener('click', () => {
        dropdownMenu.classList.toggle('active');
    });
});

// Function to handle the active state of email cards
function selectCard(card) {
    const allCards = document.querySelectorAll('.email-type-card');
    allCards.forEach(c => {
        c.classList.remove('selected-card');
    });

    card.classList.add('selected-card');
}