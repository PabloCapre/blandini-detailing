/**
 * BLANDINI DETAILING — Lógica Interactiva del Frontend
 * Agencia WAFLERS | Vanilla JS Modular | Rendimiento 60fps sin dependencias
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initBeforeAfterSlider();
  initBeforeAfterTabs();
  initScrollSpy();
});

/**
 * 1. Menú Móvil Accesible
 */
function initMobileNav() {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !mobileNav) return;

  function toggleMenu() {
    const isOpen = hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen);
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMenu() {
    hamburger.classList.remove('active');
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  hamburger.addEventListener('click', toggleMenu);

  navLinks.forEach(link => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
      closeMenu();
    }
  });
}

/**
 * 2. Slider Comparador Interactivo Antes y Después
 */
function initBeforeAfterSlider() {
  const container = document.getElementById('beforeAfterSlider');
  if (!container) return;

  const handle = container.querySelector('.before-after-handle');
  const beforeImg = container.querySelector('.before-after-img-before');

  if (!handle || !beforeImg) return;

  let isDragging = false;

  function setSliderPosition(x) {
    const rect = container.getBoundingClientRect();
    let pos = (x - rect.left) / rect.width;
    if (pos < 0) pos = 0;
    if (pos > 1) pos = 1;

    const percentage = pos * 100;
    handle.style.left = `${percentage}%`;
    beforeImg.style.width = `${percentage}%`;
  }

  function onPointerMove(e) {
    if (!isDragging) return;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);
  }

  function onPointerUp() {
    isDragging = false;
    window.removeEventListener('mousemove', onPointerMove);
    window.removeEventListener('mouseup', onPointerUp);
    window.removeEventListener('touchmove', onPointerMove);
    window.removeEventListener('touchend', onPointerUp);
  }

  function onPointerDown(e) {
    isDragging = true;
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    setSliderPosition(clientX);

    window.addEventListener('mousemove', onPointerMove);
    window.addEventListener('mouseup', onPointerUp);
    window.addEventListener('touchmove', onPointerMove, { passive: true });
    window.addEventListener('touchend', onPointerUp);
  }

  container.addEventListener('mousedown', onPointerDown);
  container.addEventListener('touchstart', onPointerDown, { passive: true });

  // Soporte de accesibilidad por teclado
  handle.setAttribute('tabindex', '0');
  handle.setAttribute('role', 'slider');
  handle.setAttribute('aria-label', 'Comparador de imágenes antes y después');
  handle.setAttribute('aria-valuenow', '50');

  handle.addEventListener('keydown', (e) => {
    const currentLeft = parseFloat(handle.style.left) || 50;
    if (e.key === 'ArrowLeft') {
      const newPos = Math.max(0, currentLeft - 5);
      handle.style.left = `${newPos}%`;
      beforeImg.style.width = `${newPos}%`;
      handle.setAttribute('aria-valuenow', newPos.toString());
    } else if (e.key === 'ArrowRight') {
      const newPos = Math.min(100, currentLeft + 5);
      handle.style.left = `${newPos}%`;
      beforeImg.style.width = `${newPos}%`;
      handle.setAttribute('aria-valuenow', newPos.toString());
    }
  });
}

/**
 * 3. Pestañas de Alternancia Antes y Después (Motor vs Chapa)
 */
function initBeforeAfterTabs() {
  const tabs = document.querySelectorAll('.tab-btn[data-case]');
  const slider = document.getElementById('beforeAfterSlider');
  if (!tabs.length || !slider) return;

  const imgBefore = slider.querySelector('.before-after-img-before img');
  const imgAfter = slider.querySelector('.before-after-img-after img');

  const casesData = {
    motor: {
      before: '/assets/cases/before-after/blazer-motor-antes.webp',
      after: '/assets/cases/before-after/blazer-motor-despues.webp',
      altBefore: 'Motor de Chevrolet Blazer con grasa y suciedad acumulada antes de la limpieza',
      altAfter: 'Motor de Chevrolet Blazer restaurado y protegido con terminación mate después del detallado'
    },
    chapa: {
      before: '/assets/cases/before-after/blazer-chapa-antes.webp',
      after: '/assets/cases/before-after/blazer-chapa-despues.webp',
      altBefore: 'Pintura negra de Chevrolet Blazer con marcas de lavado y barniz opaco antes de pulir',
      altAfter: 'Pintura negra de Chevrolet Blazer con corrección en 3 pasos y brillo de espejo después de pulir'
    }
  };

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const caseType = tab.getAttribute('data-case');
      const data = casesData[caseType];

      if (data && imgBefore && imgAfter) {
        imgBefore.src = data.before;
        imgBefore.alt = data.altBefore;
        imgAfter.src = data.after;
        imgAfter.alt = data.altAfter;
      }
    });
  });
}

/**
 * 4. Navegación Activa por Scroll (Intersection Observer)
 */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-link');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, {
    threshold: 0.35,
    rootMargin: "-68px 0px 0px 0px"
  });

  sections.forEach(sec => observer.observe(sec));
}
