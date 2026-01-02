function toggleMenu() {
    const navMenu = document.querySelector('nav');
    if (navMenu.style.display === 'none' || navMenu.style.display === '') {
        navMenu.style.display = 'block';
    } else {
        navMenu.style.display = 'none';
    }
}

// Attach to hamburger icon click event
document.querySelector('.hamburger').addEventListener('click', toggleMenu);

// Add smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({ behavior: 'smooth' });
            navMenu.style.display = 'none'; // Close menu after clicking
        }
    });
});

// Lightbox functionality for project images
const lightbox = document.createElement('div');
lightbox.className = 'lightbox';
lightbox.innerHTML = '<span class="close">&times;</span><img class="lightbox-image" src="" alt="">';
document.body.appendChild(lightbox);

document.querySelectorAll('.project-image').forEach(image => {
    image.addEventListener('click', () => {
        const lightboxImage = lightbox.querySelector('.lightbox-image');
        lightboxImage.src = image.src;
        lightboxImage.alt = image.alt;
        lightbox.style.display = 'flex';
    });
});

lightbox.querySelector('.close').addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});
// Filter projects by category
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.dataset.category === category) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Attach filter buttons to category clicks
document.querySelectorAll('.filter-btn').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProjects(button.dataset.category);
    });
});
// Form validation for Contact form
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');
        
        let isValid = true;
        
        // Validate name
        if (!nameInput.value.trim()) {
            nameInput.classList.add('error');
            isValid = false;
        } else {
            nameInput.classList.remove('error');
        }
        
        // Validate email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailInput.value.trim() || !emailRegex.test(emailInput.value)) {
            emailInput.classList.add('error');
            isValid = false;
        } else {
            emailInput.classList.remove('error');
        }
        
        // Validate message
        if (!messageInput.value.trim()) {
            messageInput.classList.add('error');
            isValid = false;
        } else {
            messageInput.classList.remove('error');
        }
        
        if (isValid) {
            alert('Form submitted successfully!');
            contactForm.reset();
        }
    });
}