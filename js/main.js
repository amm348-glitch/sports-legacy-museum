// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(el => {
    if (el.isIntersecting) {
      el.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.wing-card, .legend-card, .artifact-card, .timeline-item, .exhibit-card').forEach(el => {
  el.classList.add('fade-in');
  observer.observe(el);
});

// Active nav link
const currentPage = window.location.pathname.split('/').pop();
document.querySelectorAll('.nav-links a').forEach(link => {
  const href = link.getAttribute('href').split('/').pop();
  if (href === currentPage) link.classList.add('active');
  else link.classList.remove('active');
});
