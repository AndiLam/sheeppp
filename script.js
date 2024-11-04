// Handle hamburger menu click
const burger = document.getElementById('burger-button');
const nav = document.getElementById('nav');

burger.addEventListener('click', function() {
    nav.classList.toggle('active'); // Toggle class active for nav
});

// Auto scroll to section
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Scroll to the target section smoothly
        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Function for contact alert
function contactUs() {
    alert("Terima kasih atas ketertarikan Anda! Silakan hubungi kami di email: kontak@ternakdomba.com.");
}
