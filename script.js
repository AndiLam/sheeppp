document.getElementById('burger-button').addEventListener('click', function() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active'); // Toggle class active untuk nav
});

const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav');
burger.addEventListener('click', () => {
    nav.classList.toggle('active'); // Menambahkan atau menghapus kelas 'active' pada nav
});

// Auto scroll to section
document.querySelectorAll('.nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({ behavior: 'smooth' });
    });
});

// Function for contact alert
function contactUs() {
    alert("Terima kasih atas ketertarikan Anda! Silakan hubungi kami di email: kontak@ternakdomba.com.");
}
