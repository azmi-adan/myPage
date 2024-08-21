document.addEventListener("DOMContentLoaded", function() {
    const header = document.querySelector('header');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const projectItems = document.querySelectorAll('.project-item');

    // Navbar Scroll Effect
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }

        // Show/Hide Scroll to Top Button
        if (window.scrollY > 100) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }

        // Project Items Fade-In Effect
        projectItems.forEach(item => {
            const itemPosition = item.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            if (itemPosition < screenPosition) {
                item.classList.add('visible');
            }
        });
    });

    // Scroll to Top Button Click
    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
