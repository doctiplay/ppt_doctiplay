import './style.css'

const container = document.getElementById('main');
const indicator = document.getElementById('indicator');

// Progress bar
container.addEventListener('scroll', () => {
  const scrollPos = container.scrollTop;
  const height = container.scrollHeight - container.clientHeight;
  const scrolled = height > 0 ? (scrollPos / height) * 100 : 0;
  indicator.style.height = scrolled + '%';
});

// Reveal animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('active');
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Keyboard navigation
window.addEventListener('keydown', (e) => {
  const viewH = container.clientHeight;

  if (e.key === 'ArrowDown' || e.key === 'PageDown') {
    e.preventDefault();
    container.scrollBy({ top: viewH, left: 0, behavior: 'smooth' });
  }
  if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    container.scrollBy({ top: -viewH, left: 0, behavior: 'smooth' });
  }
  if (e.key === 'p' || e.key === 'P') {
    e.preventDefault();
    if (!document.fullscreenElement) document.documentElement.requestFullscreen();
    else document.exitFullscreen();
  }
});

// Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', (e) => {
    const id = a.getAttribute('href');
    const target = document.querySelector(id);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// (Optional) Mode buttons demo interaction (purely visual)
document.querySelectorAll('.mode-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.mode-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  });
});

console.log('Doctiplay Presentation Initialized');
