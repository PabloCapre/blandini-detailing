/**
 * BLANDINI DETAILING — Lógica Interactiva del Frontend
 * Agencia WAFLERS | Vanilla JS Modular | Rendimiento 60fps sin dependencias
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initBeforeAfterSlider();
  initBeforeAfterTabs();
  initCarousel();
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
 * 4. Carrusel Infinito con Autoplay y Control Táctil/Desktop
 * - 22 fotos de alta gama con loop infinito fluido (sin retrocesos bruscos en el scroll)
 * - Autoplay continuo cada 3 segundos (setInterval)
 * - Pausa temporal ante interacción manual (touch, pointer, scroll manual, wheel, flechas)
 * - Desplazamiento suave con flechas desktop y soporte cíclico bidireccional
 */
function initCarousel() {
  const track = document.getElementById('carouselTrack');
  const prevBtn = document.getElementById('carouselPrevBtn');
  const nextBtn = document.getElementById('carouselNextBtn');

  if (!track) return;

  const originalItems = Array.from(track.querySelectorAll('.carousel-item'));
  if (!originalItems.length) return;

  // 1. Asignar índices a imágenes originales para navegación precisa del modal
  originalItems.forEach((item, idx) => {
    const img = item.querySelector('img');
    if (img) img.dataset.galleryIndex = idx.toString();
  });

  // 2. Clones dinámicos al final para lograr el loop infinito continuo sin saltos visuales
  // Clonamos 6 elementos para cubrir cualquier viewport (mobile, desktop 3 items, ultrawide)
  const cloneCount = Math.min(6, originalItems.length);
  for (let i = 0; i < cloneCount; i++) {
    const clone = originalItems[i].cloneNode(true);
    clone.classList.add('carousel-clone');
    clone.setAttribute('aria-hidden', 'true');
    const cloneImg = clone.querySelector('img');
    if (cloneImg) {
      cloneImg.dataset.galleryIndex = i.toString();
    }
    track.appendChild(clone);
  }

  // Medición dinámica del paso entre imágenes y del umbral de loop
  function getStepDistance() {
    if (originalItems.length >= 2) {
      const dist = originalItems[1].offsetLeft - originalItems[0].offsetLeft;
      if (dist > 0) return dist;
    }
    return originalItems[0].offsetWidth + 16;
  }

  function getLoopThreshold() {
    const firstClone = track.querySelector('.carousel-clone');
    if (firstClone && originalItems.length > 0) {
      const thresh = firstClone.offsetLeft - originalItems[0].offsetLeft;
      if (thresh > 0) return thresh;
    }
    return originalItems.length * getStepDistance();
  }

  // 3. Reseteo instantáneo transparente cuando el scroll entra en la zona clonada
  let isResetting = false;
  function checkAndResetLoop() {
    if (isResetting) return;
    const threshold = getLoopThreshold();
    if (threshold <= 0) return;

    if (track.scrollLeft >= threshold - 4) {
      isResetting = true;
      const prevBehavior = track.style.scrollBehavior;
      const prevSnap = track.style.scrollSnapType;

      track.style.scrollBehavior = 'auto';
      track.style.scrollSnapType = 'none';

      track.scrollLeft -= threshold;

      void track.offsetWidth; // Forzar reflow sincrónico

      track.style.scrollBehavior = prevBehavior;
      track.style.scrollSnapType = prevSnap;
      isResetting = false;
    }
  }

  // 4. Navegación programática con flags para evitar colisiones con scroll manual
  let isProgrammaticScroll = false;
  let programmaticTimer = null;

  function markProgrammaticScroll() {
    isProgrammaticScroll = true;
    if (programmaticTimer) clearTimeout(programmaticTimer);
    programmaticTimer = setTimeout(() => {
      isProgrammaticScroll = false;
    }, 750);
  }

  function scrollNext() {
    const step = getStepDistance();
    const threshold = getLoopThreshold();

    if (track.scrollLeft >= threshold - 4) {
      checkAndResetLoop();
    }

    markProgrammaticScroll();
    track.scrollBy({ left: step, behavior: 'smooth' });

    setTimeout(() => {
      checkAndResetLoop();
    }, 650);
  }

  function scrollPrev() {
    const step = getStepDistance();
    const threshold = getLoopThreshold();

    // Si estamos en la primera imagen (cerca de 0), saltar transparentemente a los clones
    // y retroceder suavemente hacia la última imagen original sin rebobinar
    if (track.scrollLeft <= 10 && threshold > 0) {
      const prevBehavior = track.style.scrollBehavior;
      const prevSnap = track.style.scrollSnapType;

      track.style.scrollBehavior = 'auto';
      track.style.scrollSnapType = 'none';

      track.scrollLeft = threshold;

      void track.offsetWidth;

      track.style.scrollBehavior = prevBehavior;
      track.style.scrollSnapType = prevSnap;

      markProgrammaticScroll();
      track.scrollBy({ left: -step, behavior: 'smooth' });
    } else {
      markProgrammaticScroll();
      track.scrollBy({ left: -step, behavior: 'smooth' });
    }

    setTimeout(() => {
      checkAndResetLoop();
    }, 650);
  }

  // 5. Autoplay de 3 segundos con Pausa Temporal reactiva
  const AUTOPLAY_INTERVAL = 3000;
  const RESUME_DELAY = 4000;
  let autoplayIntervalId = null;
  let resumeTimeoutId = null;
  let isLightboxOpen = false;

  function startAutoplay() {
    stopAutoplay();
    if (isLightboxOpen || document.hidden) return;

    autoplayIntervalId = setInterval(() => {
      if (!isLightboxOpen && !document.hidden) {
        scrollNext();
      }
    }, AUTOPLAY_INTERVAL);
  }

  function stopAutoplay() {
    if (autoplayIntervalId) {
      clearInterval(autoplayIntervalId);
      autoplayIntervalId = null;
    }
  }

  function pauseAutoplayTemporarily() {
    stopAutoplay();
    if (resumeTimeoutId) clearTimeout(resumeTimeoutId);

    resumeTimeoutId = setTimeout(() => {
      startAutoplay();
    }, RESUME_DELAY);
  }

  // Iniciar ciclo de reproducción automática
  startAutoplay();

  // 6. Listeners de interacción del usuario (Pausa y Reanudación inteligente)
  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      pauseAutoplayTemporarily();
      scrollPrev();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      pauseAutoplayTemporarily();
      scrollNext();
    });
  }

  // Gestos táctiles en mobile / tablet
  track.addEventListener('touchstart', () => {
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchmove', () => {
    stopAutoplay();
  }, { passive: true });

  track.addEventListener('touchend', () => {
    pauseAutoplayTemporarily();
  }, { passive: true });

  // Puntero y ratón en desktop
  track.addEventListener('mouseenter', () => {
    stopAutoplay();
  });

  track.addEventListener('mouseleave', () => {
    startAutoplay();
  });

  // Scroll manual (trackpad horizontal, rueda o arrastre)
  track.addEventListener('wheel', () => {
    pauseAutoplayTemporarily();
  }, { passive: true });

  track.addEventListener('scroll', () => {
    if (!isProgrammaticScroll) {
      pauseAutoplayTemporarily();
    }
    checkAndResetLoop();
  }, { passive: true });

  if ('onscrollend' in window) {
    track.addEventListener('scrollend', () => {
      checkAndResetLoop();
    });
  }

  // Pausa cuando la pestaña no está visible para ahorrar CPU y evitar desincronización
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
      stopAutoplay();
    } else {
      startAutoplay();
    }
  });

  // Integración con el Lightbox (pausa cuando el modal está abierto en pantalla completa)
  document.addEventListener('lightbox:open', () => {
    isLightboxOpen = true;
    stopAutoplay();
  });

  document.addEventListener('lightbox:close', () => {
    isLightboxOpen = false;
    startAutoplay();
  });
}

/**
 * 5. Modal / Lightbox de Pantalla Completa en Vanilla JS
 * Con encapsulamiento estricto de scope por componente y navegación cíclica (loop)
 */
function initLightbox() {
  const modal = document.getElementById('lightboxModal');
  const overlay = document.getElementById('lightboxOverlay');
  const closeBtn = document.getElementById('lightboxClose');
  const prevBtn = document.getElementById('lightboxPrev');
  const nextBtn = document.getElementById('lightboxNext');
  const imgElement = document.getElementById('lightboxImg');

  if (!modal || !imgElement) return;

  // Estado del modal activo: colección encapsulada de imágenes e índice actual
  let activeImages = [];
  let currentIndex = 0;

  function updateLightbox(index) {
    if (!activeImages.length) return;
    currentIndex = index;
    const targetImg = activeImages[currentIndex];

    imgElement.src = targetImg.getAttribute('src');
    imgElement.alt = targetImg.getAttribute('alt') || 'Imagen ampliada de Blandini Detailing';

    // Gestionar visibilidad de flechas según la cantidad de imágenes de la galería activa
    const hasMultiple = activeImages.length > 1;
    if (prevBtn) prevBtn.style.display = hasMultiple ? 'flex' : 'none';
    if (nextBtn) nextBtn.style.display = hasMultiple ? 'flex' : 'none';
  }

  // Comportamiento Cíclico (Loop): Al llegar a la última foto, el índice vuelve a 0
  function showNext() {
    if (!activeImages.length) return;
    const nextIndex = (currentIndex >= activeImages.length - 1) ? 0 : currentIndex + 1;
    updateLightbox(nextIndex);
  }

  // Comportamiento Cíclico (Loop): Al presionar izquierda en la primera foto, va a la última
  function showPrev() {
    if (!activeImages.length) return;
    const prevIndex = (currentIndex <= 0) ? activeImages.length - 1 : currentIndex - 1;
    updateLightbox(prevIndex);
  }

  function openLightbox(galleryImages, startIndex = 0) {
    if (!galleryImages || !galleryImages.length) return;
    activeImages = galleryImages;
    updateLightbox(startIndex);
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    document.dispatchEvent(new CustomEvent('lightbox:open'));
  }

  function closeLightbox() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    document.dispatchEvent(new CustomEvent('lightbox:close'));
  }

  // --- 1. ENCAPSULAMIENTO DE SCOPE: CARRUSEL PRINCIPAL ---
  // El modal encapsula exclusivamente la colección de las 22 imágenes originales
  const carouselTrack = document.getElementById('carouselTrack') || document.querySelector('.carousel-track');
  if (carouselTrack) {
    carouselTrack.addEventListener('click', (e) => {
      const clickedImg = e.target.closest('img');
      if (!clickedImg) return;
      e.preventDefault();

      const originalImages = Array.from(carouselTrack.querySelectorAll('.carousel-item:not(.carousel-clone) img'));
      const galleryIndex = parseInt(clickedImg.dataset.galleryIndex || '0', 10);
      openLightbox(originalImages, galleryIndex);
    });
  }

  // --- 2. ENCAPSULAMIENTO DE SCOPE: CASOS DE ESTUDIO ---
  // Si el modal abre un caso de estudio, encapsula únicamente las fotos de ese caso
  const caseBlocks = document.querySelectorAll('.case-study-block');
  caseBlocks.forEach(caseBlock => {
    // Buscar fotos de la galería del caso, excluyendo controles interactivos de comparación
    const caseImages = Array.from(caseBlock.querySelectorAll('.case-gallery img')).filter(img => {
      return !img.closest('#beforeAfterSlider');
    });

    caseImages.forEach((img, idx) => {
      img.style.cursor = 'zoom-in';
      img.addEventListener('click', (e) => {
        e.preventDefault();
        openLightbox(caseImages, idx);
      });
    });
  });

  // --- 3. ENCAPSULAMIENTO DE SCOPE: FOTOS INDEPENDIENTES ---
  // Imágenes con data-lightbox fuera de carrusel y casos de estudio (ej. Certificación 3M)
  const standaloneImages = Array.from(document.querySelectorAll('img[data-lightbox]')).filter(img => {
    return !img.closest('.carousel-track') && !img.closest('.case-study-block') && !img.closest('#beforeAfterSlider');
  });
  standaloneImages.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', (e) => {
      e.preventDefault();
      openLightbox([img], 0);
    });
  });

  // Eventos de controles del Lightbox
  if (closeBtn) closeBtn.addEventListener('click', closeLightbox);
  if (overlay) overlay.addEventListener('click', closeLightbox);

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showPrev();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showNext();
    });
  }

  // Controles por teclado: Escape para cerrar, Flechas para navegar cíclicamente
  document.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'Escape') {
      closeLightbox();
    } else if (e.key === 'ArrowLeft') {
      showPrev();
    } else if (e.key === 'ArrowRight') {
      showNext();
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
