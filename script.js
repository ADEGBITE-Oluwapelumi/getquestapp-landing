// ================================
// Initialize AOS (Animate On Scroll)
// ================================
AOS.init({
    duration: 600,
    easing: 'ease-out-cubic',
    once: true,
    offset: 50,
});

// ================================
// Navbar Scroll Effect
// ================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
});

// ================================
// Video Modal
// ================================
const watchDemoBtn = document.getElementById('watchDemoBtn');
const videoModal = document.getElementById('videoModal');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const demoVideo = document.getElementById('demoVideo');

const videoUrl = 'https://drive.google.com/file/d/1Bn-BHlSSpQp_bCeF4qv2-pElH0ZpGOe0/preview';

function openModal() {
    videoModal.classList.add('active');
    demoVideo.src = videoUrl;
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    videoModal.classList.remove('active');
    demoVideo.src = '';
    document.body.style.overflow = '';
}

watchDemoBtn.addEventListener('click', openModal);
modalOverlay.addEventListener('click', closeModal);
modalClose.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        closeModal();
    }
});

// ================================
// Smooth Scroll for Anchor Links
// ================================
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

// ================================
// Mission Cards Hover Effect
// ================================
const missionItems = document.querySelectorAll('.mission-item');

missionItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(8px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});

// ================================
// Parallax Effect on Scroll (Subtle)
// ================================
const heroVisual = document.querySelector('.hero-visual');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const rate = scrolled * 0.3;
    
    if (heroVisual && scrolled < 600) {
        heroVisual.style.transform = `translateY(${rate}px)`;
    }
});

// ================================
// Button Ripple Effect
// ================================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
            background: rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.style.position = 'relative';
        this.style.overflow = 'hidden';
        this.appendChild(ripple);
        
        setTimeout(() => ripple.remove(), 600);
    });
});

const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ================================
// Intersection Observer for Section Animations
// ================================
const sections = document.querySelectorAll('section');

const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

sections.forEach(section => {
    sectionObserver.observe(section);
});

// ================================
// Console Easter Egg
// ================================
console.log('%c⚔️ QUEST', 'font-size: 24px; font-weight: bold; color: #4A7BF7;');
console.log('%cTurn ideas into Missions that get done.', 'font-size: 14px; color: #1E3A5F;');
console.log('%cInterested in joining the adventure? Visit our site!', 'font-size: 12px; color: #94A3B8;');
