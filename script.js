// DOM Elements
const navigation = document.getElementById('navigation');
const navToggle = document.getElementById('nav-toggle');
const navMenu = document.getElementById('nav-menu');
const contactForm = document.getElementById('contact-form');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toast-message');
const currentYearElement = document.getElementById('current-year');

// Set current year in footer
if (currentYearElement) {
    currentYearElement.textContent = new Date().getFullYear();
}

// Navigation scroll effect
let isScrolled = false;

function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > 50 && !isScrolled) {
        navigation.classList.add('scrolled');
        isScrolled = true;
    } else if (scrollTop <= 50 && isScrolled) {
        navigation.classList.remove('scrolled');
        isScrolled = false;
    }
}

// Throttle scroll events for better performance
let scrollTimeout;
window.addEventListener('scroll', () => {
    if (scrollTimeout) {
        clearTimeout(scrollTimeout);
    }
    scrollTimeout = setTimeout(handleScroll, 10);
});

// Mobile navigation toggle
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // Close mobile menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
}

// Smooth scrolling to sections
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        const offsetTop = element.offsetTop - 80; // Account for fixed navbar
        window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
        });
    }
    
    // Close mobile menu if open
    if (navToggle && navMenu) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
}

// Add click listeners to all navigation links
document.addEventListener('DOMContentLoaded', () => {
    const allNavLinks = document.querySelectorAll('a[href^="#"]');
    allNavLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            scrollToSection(targetId);
        });
    });
});

// Download resume functionality
function downloadResume() {
   
    
   
     const link = document.createElement('a');
    link.href = 'assets/Dinithi_Resume.pdf';
    link.download = 'Dinithi_Bandaranayake_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}

// Project view functions
function viewProject() {
    showToast('Project demo would open here. Add your project URL!');
    // window.open('https://my-project-url.com', '_blank');
}

function viewCode() {
    showToast('GitHub repository would open here. Add your GitHub URL!');
    // window.open('https://github.com/my-username/thrift-thrive', '_blank');
}

// Contact form handling
if (contactForm) {
    contactForm.addEventListener('submit', handleFormSubmit);
}

function handleFormSubmit(e) {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        message: formData.get('message')
    };
    
    // Basic validation
    if (!data.name.trim() || !data.email.trim() || !data.message.trim()) {
        showToast('Please fill in all fields.', 'error');
        return;
    }
    
    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showToast('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    showToast('Thank you for your message! I\'ll get back to you soon.', 'success');
    
    // Reset form
    contactForm.reset();
    
    // fetch('/api/contact', {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(data)
    // })
    // .then(response => response.json())
    // .then(result => {
    //     if (result.success) {
    //         showToast('Message sent successfully!', 'success');
    //         contactForm.reset();
    //     } else {
    //         showToast('Failed to send message. Please try again.', 'error');
    //     }
    // })
    // .catch(error => {
    //     showToast('An error occurred. Please try again.', 'error');
    // });
}

// Toast notification system
function showToast(message, type = 'success') {
    if (!toast || !toastMessage) return;
    
    toastMessage.textContent = message;
    
    // Add type-specific styling
    toast.className = 'toast';
    if (type === 'error') {
        toast.style.background = '#ef4444';
    } else {
        toast.style.background = 'var(--primary)';
    }
    
    // Show toast
    toast.classList.add('show');
    
    // Hide toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
            entry.target.style.opacity = '1';
        }
    });
}, observerOptions);

// Observe all animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.fade-in-up');
    animatedElements.forEach(el => {
        // Initially pause animations and make elements invisible
        el.style.animationPlayState = 'paused';
        el.style.opacity = '0';
        observer.observe(el);
    });
});

// Keyboard navigation
document.addEventListener('keydown', (e) => {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
    }
});

// Add loading animation for images
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        } else {
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.3s ease';
            img.addEventListener('load', () => {
                img.style.opacity = '1';
            });
        }
    });
});

// Smooth scrolling polyfill for older browsers
if (!('scrollBehavior' in document.documentElement.style)) {
    function smoothScrollTo(targetY, duration = 500) {
        const startY = window.pageYOffset;
        const difference = targetY - startY;
        const startTime = performance.now();

        function step() {
            const progress = (performance.now() - startTime) / duration;
            const ease = 0.5 * (1 + Math.sin(Math.PI * (progress - 0.5)));
            
            if (progress < 1) {
                window.scrollTo(0, startY + difference * ease);
                requestAnimationFrame(step);
            } else {
                window.scrollTo(0, targetY);
            }
        }

        requestAnimationFrame(step);
    }

    // Override scrollToSection for older browsers
    window.scrollToSection = function(sectionId) {
        const element = document.getElementById(sectionId);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            smoothScrollTo(offsetTop);
        }
    };
}

// Performance optimization: Lazy load animations
const lazyAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const element = entry.target;
            element.classList.add('animate');
            lazyAnimationObserver.unobserve(element);
        }
    });
}, { rootMargin: '50px' });

// Apply lazy animation observer to cards and interactive elements
document.addEventListener('DOMContentLoaded', () => {
    const lazyElements = document.querySelectorAll('.skill-card, .interest-card, .soft-skill-card');
    lazyElements.forEach(el => {
        lazyAnimationObserver.observe(el);
    });
});

// Add CSS for lazy animation
const style = document.createElement('style');
style.textContent = `
    .skill-card:not(.animate),
    .interest-card:not(.animate),
    .soft-skill-card:not(.animate) {
        opacity: 0;
        transform: translateY(20px);
        transition: opacity 0.6s ease, transform 0.6s ease;
    }
    
    .skill-card.animate,
    .interest-card.animate,
    .soft-skill-card.animate {
        opacity: 1;
        transform: translateY(0);
    }
`;
document.head.appendChild(style);

// Console message for developers
console.log(`
🚀 Portfolio Website by Dinithi Bandaranayake
📧 Contact: dinithi.bandaranayake@example.com
💼 LinkedIn: linkedin.com/in/dinithi-bandaranayake
🔗 GitHub: github.com/dinithi-bandaranayake

This portfolio is built with pure HTML, CSS, and JavaScript.
Feel free to reach out for collaboration opportunities!
`);


