const menuButton = document.querySelector('.menu-button');
const mainNav = document.querySelector('.main-nav');

menuButton?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
});

mainNav?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuButton?.setAttribute('aria-expanded', 'false');
  });
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));

const filterButtons = document.querySelectorAll('.squad-tabs button');
const playerCards = document.querySelectorAll('.player-card');

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    const filter = button.dataset.filter;
    playerCards.forEach((card) => {
      card.classList.toggle('hidden', filter !== 'all' && card.dataset.position !== filter);
    });
  });
});

const toast = document.querySelector('.toast');
const toastText = toast?.querySelector('p');
let toastTimer;

function showDemoMessage(message) {
  if (!toast || !toastText) return;
  toastText.textContent = message;
  toast.classList.add('visible');
  toast.setAttribute('aria-hidden', 'false');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(hideToast, 5200);
}

function hideToast() {
  toast?.classList.remove('visible');
  toast?.setAttribute('aria-hidden', 'true');
}

document.querySelectorAll('.demo-action').forEach((button) => {
  button.addEventListener('click', () => showDemoMessage(button.dataset.message));
});

toast?.querySelector('button')?.addEventListener('click', hideToast);
