/**
 * BLANDINI DETAILING — Lógica Interactiva del Frontend
 * Agencia WAFLERS | Vanilla JS Modular | Rendimiento 60fps sin dependencias
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initBeforeAfterSlider();
  initBeforeAfterTabs();
  initCarouselArrows();
  initLightbox();
  initScrollSpy();
});

/**
 * 1. Menú Móvil Accesible (Drawer & Toggle)
 */
function initMobileNav() {
  const hamburger = document.getElementById('hamburgerBtn');
  const mobileNav = document.getElementById('mobileNav');
  const navLinks = document.querySelectorAll('.mobile-nav-link');

  if (!hamburger || !mobileNav) return;

  function toggleMenu() {
    const isOpen = hamburger.classList.toggle('active');
    mobileNav.classList.toggle('open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
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

  // Accesibilidad por teclado (slider role)
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
 * 3. Pestañas de Alternancia Antes y Después (Vano Motor vs Chapa)
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
 * 4. Control de Flechas del Carrusel en Desktop (◀ y ▶)
 */
function initCarouselArrows() {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');

  if (!track || !prevBtn || !nextBtn) return;

  function getScrollDistance() {
    const firstItem = track.querySelector('.carousel-item');
    if (!firstItem) return 380;
    // Ancho del item + gap (16px)
    return firstItem.offsetWidth + 16;
  }

  prevBtn.addEventListener('click', () => {
    const distance = getScrollDistance();
    track.scrollBy({ left: -distance, behavior: 'smooth' });
  });

  nextBtn.addEventListener('click', () => {
    const distance = getScrollDistance();
    track.scrollBy({ left: distance, behavior: 'smooth' });
  });
}

/**
 * 5. Modal / Lightbox de Pantalla Completa en Vanilla JS
 */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const overlay = document.getElementById('lightboxOverlay');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const imgElement = document.getElementById('lightboxImg');
  const captionElement = document.getElementById('lightboxCaption');

  if (!modal || !imgElement) return;

  // Colección de imágenes con soporte lightbox (excluyendo el slider arrastrable para no bloquear gestos)
  const imageElements = Array.from(document.querySelectorAll('img[data-lightbox]')).filter(img => {
    return !img.closest('#beforeAfterSlider');
  });

  if (!imageElements.length) return;

  let currentIndex = 0;

  function updateLightbox(index) {
    currentIndex = (index + imageElements.length) % imageElements.length;
    const targetImg = imageElements[currentIndex];

    imgElement.src = targetImg.getAttribute('src');
    imgElement.alt = targetImg.getAttribute('alt') || 'Imagen ampliada de Blandini Detailing';

    // Obtener leyenda si existe en el contenedor padre
    const captionContainer = targetImg.parentElement ? targetImg.parentElement.querySelector('.carousel-caption') : null;
    const captionText = captionContainer ? captionContainer.textContent : targetImg.getAttribute('alt');
    if (captionElement) {
      captionElement.textContent = captionText || '';
    }
  }

  function openLightbox(index) {
    updateLightbox(index);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  // Vincular eventos de apertura a cada imagen
  imageElements.forEach((img, idx) => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox(idx);
    });
  });

  // Eventos de controles del Lightbox
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (overlay) overlay.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      updateLightbox(currentIndex + 1);
    });
  }

  // Controles por teclado: Escape para cerrar, Flechas para navegar
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      updateLightbox(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      updateLightbox(currentIndex + 1);
    }
  });
}

/**
 * 6. ScrollSpy y Resaltado de Sección Activa (Intersection Observer)
 * Sincroniza orden exacto: #inicio -> #certificacion-3m -> #servicios -> #casos -> #faq -> #contacto
 */
function initScrollSpy() {
  const targetIds = ['inicio', 'certificacion-3m', 'servicios', 'casos', 'faq', 'contacto'];
  const sections = targetIds.map(id => document.getElementById(id)).filter(Boolean);
  const desktopLinks = document.querySelectorAll('.nav-menu .nav-link');
  const mobileLinks = document.querySelectorAll('.mobile-nav .mobile-nav-link');

  if (!sections.length || (!desktopLinks.length && !mobileLinks.length)) return;

  function setActiveLink(activeId) {
    desktopLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // Intersection Observer para detectar sección dominante
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        setActiveLink(entry.target.id);
      }
    });
  }, {
    rootMargin: '-20% 0px -55% 0px',
    threshold: 0
  });

  sections.forEach(section => observer.observe(section));

  // Manejo de scroll en el límite inferior para activar la última sección (#contacto)
  window.addEventListener('scroll', () => {
    const isAtBottom = (window.innerHeight + window.scrollY) >= (document.documentElement.scrollHeight - 60);
    if (isAtBottom) {
      setActiveLink('contacto');
    } else if (window.scrollY < 100) {
      setActiveLink('inicio');
    }
  }, { passive: true });
}
