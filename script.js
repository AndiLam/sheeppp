document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger-button');
    const nav = document.getElementById('nav');

    burger.addEventListener('click', function() {
        nav.classList.toggle('active');
    });

    document.querySelectorAll('.nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Check if targetSection is not null before calling scrollIntoView
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                console.error(`No section found for ID: ${targetId}`);
            }
        });
    });
});
