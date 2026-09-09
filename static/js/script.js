// ============================================
// JAVASCRIPT - INTERACTIVITY & DYNAMIC BEHAVIOR
// ============================================

// ============================================
// VARIABLES & STATE MANAGEMENT
// ============================================
let modoSensorialActual = 'estandar';
const modosSensoriales = ['estandar', 'calm', 'high-contrast'];

// ============================================
// DOM ELEMENTS
// ============================================
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const sensoryToggle = document.getElementById('sensory-toggle');
const body = document.body;

// ============================================
// MOBILE NAVIGATION TOGGLE
// ============================================
function toggleNav() {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    
    // Update ARIA attributes for accessibility
    const isExpanded = navToggle.classList.contains('active');
    navToggle.setAttribute('aria-expanded', isExpanded);
}

// Event listener for mobile menu toggle
if (navToggle) {
    navToggle.addEventListener('click', toggleNav);
}

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu.classList.contains('active')) {
            toggleNav();
        }
    });
});

// ============================================
// SENSORY MODE TOGGLE
// ============================================
function cambiarModoSensorial() {
    // Find current mode index
    const indiceActual = modosSensoriales.indexOf(modoSensorialActual);
    // Calculate next mode index (cycling through modes)
    const siguienteIndice = (indiceActual + 1) % modosSensoriales.length;
    modoSensorialActual = modosSensoriales[siguienteIndice];
    
    // Apply the new mode to body
    body.setAttribute('data-sensory', modoSensorialActual);
    
    // Update button icon based on mode
    actualizarIconoSensorial();
    
    // Optional: Show visual feedback
    mostrarFeedbackSensorial();
}

function actualizarIconoSensorial() {
    const iconos = {
        'estandar': '🎨',
        'calm': '🌙',
        'high-contrast': '⚡'
    };
    
    if (sensoryToggle) {
        const iconElement = sensoryToggle.querySelector('.sensory-icon');
        if (iconElement) {
            iconElement.textContent = iconos[modoSensorialActual];
        }
    }
}

function mostrarFeedbackSensorial() {
    // Create a temporary toast notification
    const mensajes = {
        'estandar': 'Modo Estándar activado',
        'calm': 'Modo Calmado activado',
        'high-contrast': 'Modo Alto Contraste activado'
    };
    
    const toast = document.createElement('div');
    toast.className = 'sensory-toast';
    toast.textContent = mensajes[modoSensorialActual];
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 20px;
        background: linear-gradient(135deg, #00d4ff, #b829dd);
        color: white;
        padding: 12px 24px;
        border-radius: 50px;
        font-weight: 600;
        z-index: 1000;
        animation: slideIn 0.3s ease, fadeOut 0.3s ease 2.7s;
        box-shadow: 0 4px 15px rgba(0, 212, 255, 0.3);
    `;
    
    document.body.appendChild(toast);
    
    // Remove toast after animation
    setTimeout(() => {
        toast.remove();
    }, 3000);
}

// Event listener for sensory mode toggle
if (sensoryToggle) {
    sensoryToggle.addEventListener('click', cambiarModoSensorial);
}

// ============================================
// SMOOTH SCROLL & NAVIGATION
// ============================================
// Smooth scroll is handled by CSS (scroll-behavior: smooth)
// This section adds additional enhancements

// Add active state to navigation links based on scroll position
function actualizarNavActivo() {
    const secciones = document.querySelectorAll('section[id]');
    const scrollPos = window.scrollY + 100;
    
    secciones.forEach(seccion => {
        const seccionTop = seccion.offsetTop;
        const seccionHeight = seccion.offsetHeight;
        const seccionId = seccion.getAttribute('id');
        
        if (scrollPos >= seccionTop && scrollPos < seccionTop + seccionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${seccionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Add scroll event listener
window.addEventListener('scroll', actualizarNavActivo);

// ============================================
// SCROLL ANIMATIONS (FADE-IN EFFECTS)
// ============================================
function handleScrollAnimation() {
    const elementosAnimar = document.querySelectorAll('.interest-card, .skill-card, .project-card, .mini-project-card, .contact-item');
    
    elementosAnimar.forEach(elemento => {
        const elementoTop = elemento.getBoundingClientRect().top;
        const elementoVisible = 150;
        
        if (elementoTop < window.innerHeight - elementoVisible) {
            elemento.classList.add('fade-in', 'visible');
        }
    });
}

// Initial check and scroll listener
document.addEventListener('DOMContentLoaded', handleScrollAnimation);
window.addEventListener('scroll', handleScrollAnimation);

// ============================================
// DYNAMIC TYPING EFFECT FOR HERO SECTION
// ============================================
function efectoEscribir() {
    const textoDestino = "Desarrolladora Front-End Trainee";
    const elemento = document.querySelector('.hero-subtitle');
    
    if (!elemento) return;
    
    const textoOriginal = elemento.textContent;
    elemento.textContent = '';
    
    let indice = 0;
    const velocidad = 50;
    
    function escribirCaracter() {
        if (indice < textoOriginal.length) {
            elemento.textContent += textoOriginal.charAt(indice);
            indice++;
            setTimeout(escribirCaracter, velocidad);
        }
    }
    
    // Start typing effect after a short delay
    setTimeout(escribirCaracter, 500);
}

// Initialize typing effect on page load
document.addEventListener('DOMContentLoaded', efectoEscribir);

// ============================================
// PARALLAX EFFECT FOR HERO BLOBS
// ============================================
function efectoParallax() {
    const blobs = document.querySelectorAll('.gradient-blob');
    const scrollY = window.scrollY;
    
    blobs.forEach((blob, index) => {
        const velocidad = 0.1 + (index * 0.05);
        const yOffset = scrollY * velocidad;
        blob.style.transform = `translateY(${yOffset}px)`;
    });
}

window.addEventListener('scroll', efectoParallax);

// ============================================
// SKILL BADGES HOVER EFFECT
// ============================================
const skillBadges = document.querySelectorAll('.badge');
skillBadges.forEach(badge => {
    badge.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    badge.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
});

// ============================================
// PROJECT CARD TILT EFFECT
// ============================================
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ============================================
// KEYBOARD NAVIGATION ENHANCEMENTS
// ============================================
document.addEventListener('keydown', function(e) {
    // Escape key closes mobile menu
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        toggleNav();
    }
    
    // Ctrl/Cmd + K to toggle sensory mode
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        cambiarModoSensorial();
    }
});

// ============================================
// LOCAL STORAGE FOR USER PREFERENCES
// ============================================
function guardarPreferencias() {
    localStorage.setItem('modoSensorial', modoSensorialActual);
}

function cargarPreferencias() {
    const modoGuardado = localStorage.getItem('modoSensorial');
    if (modoGuardado && modosSensoriales.includes(modoGuardado)) {
        modoSensorialActual = modoGuardado;
        body.setAttribute('data-sensory', modoSensorialActual);
        actualizarIconoSensorial();
    }
}

// Load preferences on page load
document.addEventListener('DOMContentLoaded', cargarPreferencias);

// Save preferences when sensory mode changes
const originalCambiarModoSensorial = cambiarModoSensorial;
cambiarModoSensorial = function() {
    originalCambiarModoSensorial();
    guardarPreferencias();
};

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScrollAnimation = debounce(handleScrollAnimation, 50);
const debouncedParallax = debounce(efectoParallax, 50);
const debouncedNavActivo = debounce(actualizarNavActivo, 50);

// Replace scroll event listeners with debounced versions
window.removeEventListener('scroll', handleScrollAnimation);
window.removeEventListener('scroll', efectoParallax);
window.removeEventListener('scroll', actualizarNavActivo);

window.addEventListener('scroll', debouncedScrollAnimation);
window.addEventListener('scroll', debouncedParallax);
window.addEventListener('scroll', debouncedNavActivo);

// ============================================
// INITIALIZE ON PAGE LOAD
// ============================================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio de Iris C. V. - Cargado exitosamente');
    console.log('Modo sensorial actual:', modoSensorialActual);
    
    // Add fade-in class to elements for scroll animation
    const elementosAnimar = document.querySelectorAll('.interest-card, .skill-card, .project-card, .mini-project-card, .contact-item');
    elementosAnimar.forEach(elemento => {
        elemento.classList.add('fade-in');
    });
});

// ============================================
// ACCESSIBILITY: REDUCED MOTION SUPPORT
// ============================================
const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

if (mediaQuery.matches) {
    // Disable animations for users who prefer reduced motion
    document.body.classList.add('reduced-motion');
}

mediaQuery.addEventListener('change', function() {
    if (mediaQuery.matches) {
        document.body.classList.add('reduced-motion');
    } else {
        document.body.classList.remove('reduced-motion');
    }
});
