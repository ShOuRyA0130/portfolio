// Smooth scrolling for navigation links
document.querySelectorAll('header nav ul li a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form validation
const form = document.querySelector('form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Validate name, email, and message fields
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Additional validation for email format (basic validation)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // Form data is valid, proceed with submission (simulate sending)
    alert('Message sent successfully!'); // Replace with actual submission code
    form.reset(); // Clear form fields after submission
});
