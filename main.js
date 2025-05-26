// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');
    
    mobileMenuBtn.addEventListener('click', function() {
        navMenu.classList.toggle('active');
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
            }
        });
    });
    
    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let valid = true;
            
            // Validate name
            const nameInput = this.querySelector('input[name="name"]');
            if (nameInput.value.trim() === '') {
                valid = false;
                nameInput.style.borderColor = 'red';
            } else {
                nameInput.style.borderColor = '#ddd';
            }
            
            // Validate email
            const emailInput = this.querySelector('input[name="email"]');
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(emailInput.value.trim())) {
                valid = false;
                emailInput.style.borderColor = 'red';
            } else {
                emailInput.style.borderColor = '#ddd';
            }
            
            // Validate subject
            const subjectInput = this.querySelector('input[name="subject"]');
            if (subjectInput.value.trim() === '') {
                valid = false;
                subjectInput.style.borderColor = 'red';
            } else {
                subjectInput.style.borderColor = '#ddd';
            }
            
            // Validate message
            const messageInput = this.querySelector('textarea[name="message"]');
            if (messageInput.value.trim() === '') {
                valid = false;
                messageInput.style.borderColor = 'red';
            } else {
                messageInput.style.borderColor = '#ddd';
            }
            
            if (!valid) {
                e.preventDefault();
                alert('Please fill all fields correctly.');
            }
        });
    }
});