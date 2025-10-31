// Animación al hacer scroll
const elements = document.querySelectorAll('.section, .hero-content, .card');

function showElements() {
  const triggerBottom = window.innerHeight * 0.85;
  elements.forEach(el => {
    const top = el.getBoundingClientRect().top;
    if (top < triggerBottom) el.classList.add('visible');
  });
}

window.addEventListener('scroll', showElements);
showElements();

// Validación simple del formulario
const form = document.getElementById('contactForm');
form.addEventListener('submit', e => {
  e.preventDefault();
  alert("Gracias por contactarnos 💌. Te responderemos pronto.");
  form.reset();
});
