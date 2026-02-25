// Cursor Glow Follow
const cursorGlow = document.querySelector('.cursor-glow');
document.addEventListener('mousemove', (e) => {
    cursorGlow.style.left = e.clientX + 'px';
    cursorGlow.style.top = e.clientY + 'px';
});

// Scroll Reveal Animation
const observerOptions = {
    threshold: 0.1
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

// Moon Phase Calculation (Simulated for Demo)
function getMoonPhase() {
    const phases = ["Luna Nuova", "Crescente", "Primo Quarto", "Gibbosa Crescente", "Luna Piena", "Gibbosa Calante", "Ultimo Quarto", "Calante"];
    const d = new Date();
    const phase = Math.floor((d.getDate() % 29.5) / 3.7);
    return phases[phase] || phases[0];
}

console.log("Fenrir System: Online. Moon Phase: " + getMoonPhase());

// Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
