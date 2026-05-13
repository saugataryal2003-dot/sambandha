// Mobile Navigation Toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Close mobile menu when a link is clicked
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

// Update active nav link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Menu PDF Button Functionality
function showMenu(type) {
    const btns = document.querySelectorAll('.menu-pdf-btn');
    const panels = document.querySelectorAll('.pdf-panel');

    btns.forEach(btn => btn.classList.remove('active'));
    panels.forEach(panel => panel.classList.remove('active'));

    event.target.closest('.menu-pdf-btn').classList.add('active');
    document.getElementById('menu-' + type).classList.add('active');
}

// Reservation Form Submission
const reservationForm = document.getElementById('reservationForm');
reservationForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(reservationForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        date: formData.get('date'),
        time: formData.get('time'),
        guests: formData.get('guests'),
        requests: formData.get('requests')
    };

    // In production, this would send to a server
    console.log('Reservation request:', data);
    alert('Thank you for your reservation request! We will confirm shortly via email or phone.');
    reservationForm.reset();
});

// Contact Form Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };

    // In production, this would send to a server
    console.log('Contact message:', data);
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Smooth scroll behavior for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
