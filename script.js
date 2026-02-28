// Cursor Glow Follow
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Scroll Reveal Animation with Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Glitch Hover Effect for Title
const title = document.querySelector('.glitch-title');
if (title) {
    title.addEventListener('mouseover', () => {
        title.style.animation = 'glitch-skew 0.3s infinite linear alternate-reverse';
    });
    title.addEventListener('mouseout', () => {
        title.style.animation = 'none';
    });
}

// Uptime Counter Simulation
function updateUptime() {
    const uptimeDisplay = document.getElementById('uptime-display');
    if (!uptimeDisplay) return;

    // Fixed start date for "life uptime" - let's say Feb 12, 1980 (estimated from 386 era context)
    const startDate = new Date('1980-02-12T00:00:00');
    
    setInterval(() => {
        const now = new Date();
        const diff = now - startDate;
        
        const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((diff % (1000 * 60)) / 1000);
        
        uptimeDisplay.textContent = `${years}y ${days}d ${hours}h ${mins}m ${secs}s`;
    }, 1000);
}

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Initialization
window.addEventListener('DOMContentLoaded', () => {
    updateUptime();
    console.log("Fenrir Core: Operational. System parameters synced.");
});
