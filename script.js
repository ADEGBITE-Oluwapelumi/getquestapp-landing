// ================================
// Initialize AOS (Animate On Scroll)
// ================================
AOS.init({
    duration: 700,
    easing: 'ease-out-cubic',
    once: true,
    offset: 80,
});

// ================================
// Navbar Scroll Effect
// ================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
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
// Subtle Parallax on Hero
// ================================
const heroVisual = document.querySelector('.hero-visual');
const heroBackground = document.querySelector('.hero-background');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    
    if (scrolled < 800) {
        if (heroVisual) {
            heroVisual.style.transform = `translateY(${scrolled * 0.1}px)`;
        }
        if (heroBackground) {
            heroBackground.style.transform = `translateY(${scrolled * 0.15}px)`;
        }
    }
});

// ================================
// Mission Items Interaction
// ================================
const missionItems = document.querySelectorAll('.mission-item');

missionItems.forEach(item => {
    item.addEventListener('mouseenter', () => {
        item.style.transform = 'translateX(4px)';
    });
    
    item.addEventListener('mouseleave', () => {
        item.style.transform = 'translateX(0)';
    });
});
