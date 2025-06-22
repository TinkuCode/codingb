// Boy Character Interaction
const boyCharacter = document.querySelector('.boy-character');
const speechBubble = document.querySelector('.speech-bubble');

const messages = [
    "Hi there!",
    "Welcome to my portfolio!",
    "Feel free to explore!",
    "Need help? Just ask!",
    "Have a great day!"
];

let currentMessageIndex = 0;

// Only show boy character on home section
const showBoyOnHome = () => {
    const homeSection = document.getElementById('home');
    const rect = homeSection.getBoundingClientRect();
    
    if (rect.top <= 0 && rect.bottom >= window.innerHeight / 2) {
        boyCharacter.style.opacity = '1';
        boyCharacter.style.pointerEvents = 'auto';
    } else {
        boyCharacter.style.opacity = '0';
        boyCharacter.style.pointerEvents = 'none';
    }
};

// Check on scroll
window.addEventListener('scroll', showBoyOnHome);
// Check on initial load
document.addEventListener('DOMContentLoaded', showBoyOnHome);

boyCharacter.addEventListener('click', () => {
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    
    // Add wave animation to the speech bubble
    speechBubble.style.animation = 'none';
    speechBubble.offsetHeight; // Trigger reflow
    speechBubble.style.animation = 'fadeIn 0.5s ease forwards';
    
    // Update the message
    speechBubble.textContent = messages[currentMessageIndex];
    
    // Add bounce effect to the boy character
    boyCharacter.style.transform = 'scale(0.9)';
    setTimeout(() => {
        boyCharacter.style.transform = 'scale(1)';
    }, 150);
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar scroll effect
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        navbar.style.boxShadow = 'none';
    } else {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Animate elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;
        
        if (elementTop < triggerPoint) {
            element.classList.add('animated');
        } else {
            // Remove animation class when element is out of view (for re-animation when scrolling back up)
            element.classList.remove('animated');
        }
    });
};

// Initial setup for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    // Ensure boy character is always visible on all sections
    document.addEventListener('DOMContentLoaded', () => {
        // Make sure boy character is visible
        const boyCharacter = document.querySelector('.boy-character');
        boyCharacter.style.transform = 'translateX(0)';
    });
    
    // Add animation class to components
    const componentsToAnimate = [
        '.about h2', 
        '.about p', 
        '.tool-card', 
        '.portfolio h2', 
        '.portfolio-item', 
        '.videos h2',
        '.video-item',
        '.services h2', 
        '.service-card', 
        '.contact h2', 
        '.contact-form', 
        '.info-item'
    ];
    
    componentsToAnimate.forEach(selector => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element, index) => {
            // For grid items, calculate delay based on position
            let delay = 0;
            if (selector === '.tool-card' || selector === '.portfolio-item' || selector === '.service-card') {
                // Calculate row and column for grid items
                const parent = element.parentElement;
                const siblings = Array.from(parent.children);
                const position = siblings.indexOf(element);
                delay = position * 0.1;
            } else {
                delay = index * 0.1;
            }
            
            element.classList.add('animate-on-scroll');
            element.style.transitionDelay = `${delay}s`;
        });
    });
    
    // Run initial animation check
    animateOnScroll();
});

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('resize', animateOnScroll);

// Form submission handling
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Add animation to button
        const submitBtn = contactForm.querySelector('.submit-btn');
        submitBtn.style.transform = 'scale(0.95)';
        setTimeout(() => {
            submitBtn.style.transform = 'scale(1)';
        }, 100);
        
        // Here you would typically handle the form submission
        // For now, we'll just show an alert
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
}

// Skill bars animation
const animateSkills = () => {
    const skills = document.querySelectorAll('.progress');
    skills.forEach(skill => {
        const width = skill.style.width;
        skill.style.width = '0';
        setTimeout(() => {
            skill.style.width = width;
        }, 100);
    });
};

// Trigger skill animation when the about section is in view
const aboutSection = document.querySelector('.about');
if (aboutSection) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkills();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1.5 });
    
    observer.observe(aboutSection);
}

// Portfolio hover effect
const portfolioItems = document.querySelectorAll('.portfolio-item');
portfolioItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'scale(1.02)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'scale(1)';
    });
});