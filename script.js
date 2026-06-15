// ── Navbar: escurece ao rolar ─────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 40);
});

const themeToggle = document.getElementById('theme-toggle');
const savedTheme = localStorage.getItem('floraTheme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  if (themeToggle) themeToggle.classList.toggle('active', theme === 'light');
  localStorage.setItem('floraTheme', theme);
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    applyTheme(nextTheme);
  });
}

applyTheme(initialTheme);

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


// ── Carrossel de fotos ────────────────────────────────────────────────────────
const track = document.getElementById('carouselTrack');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');

if (track && btnPrev && btnNext) {
  const CARD_WIDTH = 280 + 20;
  let manualOffset = 0;

  function getCurrentAnimatedX() {
    const style = window.getComputedStyle(track);
    const matrix = new WebKitCSSMatrix(style.transform);
    return matrix.m41;
  }

  function pauseAnimation() {
    const currentX = getCurrentAnimatedX();
    track.style.animation = 'none';
    track.style.transform = `translateX(${currentX}px)`;
    manualOffset = currentX;
  }

  function resumeAnimation() {
    track.style.animation = '';
    track.style.transform = '';
    manualOffset = 0;
  }

  btnNext.addEventListener('click', () => {
    pauseAnimation();
    manualOffset -= CARD_WIDTH;
    const halfWidth = track.scrollWidth / 2;
    if (Math.abs(manualOffset) >= halfWidth) manualOffset = 0;
    track.style.transform = `translateX(${manualOffset}px)`;
    track.style.transition = 'transform 0.45s ease';
    setTimeout(() => { track.style.transition = ''; }, 460);
  });

  btnPrev.addEventListener('click', () => {
    pauseAnimation();
    manualOffset += CARD_WIDTH;
    if (manualOffset > 0) manualOffset = -(track.scrollWidth / 2 - CARD_WIDTH);
    track.style.transform = `translateX(${manualOffset}px)`;
    track.style.transition = 'transform 0.45s ease';
    setTimeout(() => { track.style.transition = ''; }, 460);
  });

  let resumeTimer;
  [btnPrev, btnNext].forEach(btn => {
    btn.addEventListener('click', () => {
      clearTimeout(resumeTimer);
      resumeTimer = setTimeout(resumeAnimation, 4000);
    });
  });
}
