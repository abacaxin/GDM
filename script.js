// ── Navbar: escurece ao rolar ─────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── Scroll reveal com IntersectionObserver ────────────────────────────────────
const reveals = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });
reveals.forEach(el => revealObserver.observe(el));

// ── Abre WhatsApp com mensagem do produto ─────────────────────────────────────
function openWhatsApp(product) {
  const msg = encodeURIComponent(
    'Olá! Tenho interesse no produto: ' + product + '. Pode me passar mais informações?'
  );
  window.open('https://wa.me/5598984853656?text=Boa%20noite=' + msg, '_blank');
}

// ── Newsletter: envia e-mail via WhatsApp ─────────────────────────────────────
function handleNewsletter() {
  const email = document.getElementById('email-input').value;
  if (!email || !email.includes('@')) {
    alert('Por favor, insira um e-mail válido.');
    return;
  }
  const msg = encodeURIComponent(
    'Olá! Gostaria de receber novidades da Flora Boutique. Meu e-mail é: ' + email
  );
  window.open('https://wa.me/5598984853656?text=Boa%20noite=' + msg, '_blank');
}

// ── Smooth scroll para âncoras internas ──────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});
