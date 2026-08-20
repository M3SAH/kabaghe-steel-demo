// Footer Year
document.getElementById('year').textContent = new Date().getFullYear();

// Image Lazy Loading & Skeleton Loader Removal
document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll('.img-wrapper img');
    
    images.forEach(img => {
        // If image is already cached/loaded
        if (img.complete) {
            img.classList.add('loaded');
            img.parentElement.classList.remove('loading');
        } else {
            // Wait for load event
            img.addEventListener('load', () => {
                img.classList.add('loaded');
                img.parentElement.classList.remove('loading');
            });
            // Fallback for errors
            img.addEventListener('error', () => {
                img.parentElement.classList.remove('loading');
            });
        }
    });
});

// Mobile Menu
const hamburger = document.querySelector('.hamburger');
const closeMenu = document.querySelector('.close-menu');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileLinks = document.querySelectorAll('.mobile-nav-links a');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : 'auto';
}

hamburger.addEventListener('click', toggleMenu);
closeMenu.addEventListener('click', toggleMenu);

mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
});

// Navbar Scroll Effect
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.98)';
        navbar.style.borderBottom = '1px solid var(--accent)';
    } else {
        navbar.style.backgroundColor = 'rgba(18, 18, 18, 0.95)';
        navbar.style.borderBottom = '1px solid var(--border-color)';
    }
});

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.getElementById('lightbox-caption');

window.openLightbox = function(element) {
    const img = element.querySelector('img');
    const caption = element.querySelector('.gallery-caption').textContent;
    
    lightboxImg.src = img.src;
    lightboxCaption.textContent = caption;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

window.closeLightbox = function() {
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});

// Form Simulation
const quoteForm = document.getElementById('quoteForm');
const formSuccess = document.getElementById('form-success');
const submitBtn = quoteForm.querySelector('button[type="submit"]');

quoteForm.addEventListener('submit', (e) => {
    e.preventDefault();
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
        formSuccess.style.display = 'block';
        quoteForm.reset();
        submitBtn.textContent = 'Request a Quote';
        submitBtn.disabled = false;
        
        setTimeout(() => {
            formSuccess.style.display = 'none';
        }, 5000);
    }, 1200);
});