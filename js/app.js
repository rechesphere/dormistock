/**
 * DORMISTOCK - SCRIPT INTERACTIVO Y CRO
 * Basado en la arquitectura probada de Tomuza Opción 3
 * Modal multi-paso, congelación estricta de scroll, anti-spam y WhatsApp directo.
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // =========================================================================
  // 1. HEADER SCROLL EFFECT
  // =========================================================================
  const siteHeader = document.getElementById('siteHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      siteHeader?.classList.add('site-header--scrolled');
    } else {
      siteHeader?.classList.remove('site-header--scrolled');
    }
  }, { passive: true });

  // =========================================================================
  // 2. MODAL CUALIFICADOR MULTI-PASO (ESTRUCTURA EXACTA TOMUZA)
  // =========================================================================
  const leadModal = document.getElementById('leadModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const modalFinalCloseBtns = document.querySelectorAll('.modal-final-close-btn');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');
  const modalSteps = document.querySelectorAll('.modal-step');
  const progressFill = document.getElementById('modalProgressFill');
  const progressText = document.getElementById('modalProgressText');
  const nextStepBtns = document.querySelectorAll('.next-step-btn');
  const prevStepBtns = document.querySelectorAll('.prev-step-btn');
  const leadForm = document.getElementById('leadForm');

  let currentStep = 1;
  let lockedScrollY = 0;

  const leadData = {
    product: 'Pack Ahorro Total',
    size: '150 x 190 cm',
    store: 'San Sebastián de los Reyes',
    name: '',
    phone: ''
  };

  // Estimaciones dinámicas de ahorro según producto seleccionado
  const savingsData = {
    'Pack Ahorro Total': 'Ahorras hasta 180 € frente a intermediarios + Transporte y Montaje profesional en Madrid valorado en 45 € gratis.',
    'Colchón': 'Ahorro directo de fábrica de unos 95 € + Retirada oficial gratuita de tu colchón antiguo al punto limpio.',
    'Colchón Viscoelástico': 'Ahorro directo de fábrica de unos 95 € + Retirada oficial gratuita de tu colchón antiguo al punto limpio.',
    'Colchón Muelles Ensacados': 'Ahorro de hasta 130 € en gama hotelera Titan + Doble cara termorreguladora sin sobrecoste de marca.',
    'Canapé Gran Capacidad': 'Ahorras hasta 110 € con pistones de gas 1200N instalados y calibrados sin coste adicional.',
    'Sofá / Chaiselongue': 'Tapizado antimanchas y relax directo de nave: Ahorro medio de 210 € en comparación con grandes superficies.',
    'General': 'Ahorro medio directo de fábrica de hasta el 40% en toda la Comunidad de Madrid con servicio oficial de subida y montaje.'
  };

  function updateSavingsEstimator(productKey) {
    const estimator = document.getElementById('savingsEstimator');
    const desc = document.getElementById('savingsDesc');
    if (!estimator || !desc) return;

    let text = savingsData[productKey];
    if (!text) {
      for (const key of Object.keys(savingsData)) {
        if (productKey.toLowerCase().includes(key.toLowerCase()) || key.toLowerCase().includes(productKey.toLowerCase())) {
          text = savingsData[key];
          break;
        }
      }
    }
    if (!text) text = savingsData['Pack Ahorro Total'];

    desc.textContent = text;
    estimator.style.display = 'block';
  }

  function openModal(defaultProduct = 'Pack Ahorro Total') {
    if (!leadModal) return;

    // Congelar y anclar estrictamente la pantalla en la posición actual
    lockedScrollY = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    document.body.style.position = 'fixed';
    document.body.style.top = `-${lockedScrollY}px`;
    document.body.style.left = '0';
    document.body.style.right = '0';
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    leadModal.classList.add('modal-overlay--active');

    // Preseleccionar producto si viene por data-product
    if (defaultProduct && defaultProduct !== 'General') {
      leadData.product = defaultProduct;
      const step1 = document.querySelector('.modal-step[data-step="1"]');
      if (step1) {
        step1.querySelectorAll('.option-btn').forEach(btn => {
          const val = btn.getAttribute('data-value');
          if (val && defaultProduct.toLowerCase().includes(val.toLowerCase())) {
            btn.classList.add('option-btn--selected');
          } else if (val === defaultProduct) {
            btn.classList.add('option-btn--selected');
          } else {
            btn.classList.remove('option-btn--selected');
          }
        });
      }
    }

    updateSavingsEstimator(defaultProduct);
    goToStep(1);
  }

  function closeModal() {
    if (!leadModal) return;
    leadModal.classList.remove('modal-overlay--active');

    // Restaurar estado y scroll de la página sin saltos
    document.body.style.removeProperty('position');
    document.body.style.removeProperty('top');
    document.body.style.removeProperty('left');
    document.body.style.removeProperty('right');
    document.body.style.removeProperty('width');
    document.body.style.removeProperty('overflow');
    document.documentElement.style.removeProperty('overflow');

    window.scrollTo(0, lockedScrollY);
  }

  function goToStep(stepNumber) {
    currentStep = stepNumber;
    modalSteps.forEach(step => {
      const stepIndex = parseInt(step.getAttribute('data-step') || '0', 10);
      if (stepIndex === currentStep) {
        step.classList.add('modal-step--active');
      } else {
        step.classList.remove('modal-step--active');
      }
    });

    // Resetear scroll interno del modal al cambiar de paso
    const modalCard = leadModal?.querySelector('.modal-card');
    if (modalCard) modalCard.scrollTop = 0;

    // Actualizar barra de progreso
    if (progressFill && progressText) {
      const percentage = (currentStep / 4) * 100;
      progressFill.style.width = `${percentage}%`;
      progressText.textContent = `Paso ${currentStep} de 4`;
    }
  }

  // Event Listeners para abrir modal
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const product = btn.getAttribute('data-product') || 'Pack Ahorro Total';
      openModal(product);
    });
  });

  // Cerrar modal
  modalCloseBtn?.addEventListener('click', closeModal);
  modalFinalCloseBtns.forEach(btn => btn.addEventListener('click', closeModal));

  leadModal?.addEventListener('click', (e) => {
    if (e.target === leadModal) {
      closeModal();
    }
  });

  // Selección de opciones en pasos 1, 2 y 3
  document.querySelectorAll('.option-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const parentStep = btn.closest('.modal-step');
      if (!parentStep) return;

      parentStep.querySelectorAll('.option-btn').forEach(b => b.classList.remove('option-btn--selected'));
      btn.classList.add('option-btn--selected');

      const stepNum = parseInt(parentStep.getAttribute('data-step') || '1', 10);
      const value = btn.getAttribute('data-value') || '';

      if (stepNum === 1) {
        leadData.product = value;
        updateSavingsEstimator(value);
      } else if (stepNum === 2) {
        leadData.size = value;
      } else if (stepNum === 3) {
        leadData.store = value;
      }
    });
  });

  // Botones 'Continuar'
  nextStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep < 4) {
        goToStep(currentStep + 1);
      }
    });
  });

  // Botones 'Atrás'
  prevStepBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      if (currentStep > 1) {
        goToStep(currentStep - 1);
      }
    });
  });

  // Envío del formulario
  leadForm?.addEventListener('submit', (e) => {
    e.preventDefault();

    // 1. Doble trampa Honeypot anti-spam silenciosa
    const botWebsite = document.getElementById('bot_website');
    const contactConfirm = document.getElementById('contact_confirm');
    if ((botWebsite && botWebsite.value.trim() !== '') || (contactConfirm && contactConfirm.value.trim() !== '')) {
      showSuccessStep();
      return;
    }

    const nameInput = document.getElementById('userName');
    const phoneInput = document.getElementById('userPhone');

    const name = nameInput?.value.trim() || '';
    const phone = phoneInput?.value.replace(/\s+/g, '') || '';

    if (name.length < 2) {
      alert('Por favor, indica un nombre o persona de contacto.');
      nameInput?.focus();
      return;
    }

    const phoneRegex = /^[+]?[0-9]{9,13}$/;
    if (!phoneRegex.test(phone)) {
      alert('Por favor, introduce un número de teléfono válido (ej: 674 008 575).');
      phoneInput?.focus();
      return;
    }

    leadData.name = name;
    leadData.phone = phone;

    // Actualizar pantalla de éxito
    const successSummary = document.getElementById('successSummary');
    const successStore = document.getElementById('successStore');
    const successWhatsAppLink = document.getElementById('successWhatsAppLink');

    if (successSummary) {
      successSummary.textContent = `${leadData.product} · ${leadData.size}`;
    }
    if (successStore) {
      successStore.textContent = `Tienda preferida: ${leadData.store}`;
    }

    // Configurar enlace estructurado a WhatsApp
    const whatsappMsg = encodeURIComponent(
      `*DORMISTOCK MADRID — SOLICITUD DE PRESUPUESTO DE FÁBRICA*\n` +
      `---------------------------------------\n` +
      `• *Producto:* ${leadData.product}\n` +
      `• *Medida:* ${leadData.size}\n` +
      `• *Tienda/Entrega:* ${leadData.store}\n` +
      `• *Cliente:* ${leadData.name}\n` +
      `• *Teléfono:* ${leadData.phone}\n` +
      `---------------------------------------\n` +
      `Hola, he solicitado presupuesto en la web y quiero confirmar disponibilidad en tienda y la reserva del regalo de 2 almohadas viscoelásticas.`
    );

    if (successWhatsAppLink) {
      successWhatsAppLink.href = `https://wa.me/34674008575?text=${whatsappMsg}`;
    }

    showSuccessStep();
  });

  function showSuccessStep() {
    modalSteps.forEach(s => s.classList.remove('modal-step--active'));
    const successStep = document.getElementById('successStep');
    if (successStep) {
      successStep.classList.add('modal-step--active');
    }
    if (progressFill && progressText) {
      progressFill.style.width = '100%';
      progressText.textContent = '¡Completado!';
    }
  }

  // =========================================================================
  // 3. PREGUNTAS FRECUENTES (FAQ ACORDEÓN)
  // =========================================================================
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const questionBtn = item.querySelector('.faq-question');
    questionBtn?.addEventListener('click', () => {
      const isActive = item.classList.contains('active');
      faqItems.forEach(i => i.classList.remove('active'));
      if (!isActive) {
        item.classList.add('active');
      }
    });
  });

  // =========================================================================
  // 4. NAVEGACIÓN SUAVE CON COMPENSACIÓN DE CABECERA
  // =========================================================================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (!targetId || targetId === '#' || targetId.startsWith('#!')) return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerHeight = siteHeader?.offsetHeight || 72;
        const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: targetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // =========================================================================
  // 5. CURSOR FLOTANTE CON INERCIA SEDOSA (IDÉNTICO A TOMUZA OPCIÓN 3)
  //    - Dot central de precisión inmediata
  //    - Ring seguidor con física inercial de resorte elástico (spring/friction)
  //    - Solo activo en escritorio (hover: hover y pointer: fine)
  // =========================================================================
  (function initSmoothCursor() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;

    const dot = document.getElementById('cursorDot');
    const ring = document.getElementById('cursorRing');
    if (!dot || !ring) return;

    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;
    let vx = 0;
    let vy = 0;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      dot.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;

      if (!isVisible) {
        isVisible = true;
        currentX = targetX;
        currentY = targetY;
        dot.style.opacity = '1';
        ring.style.opacity = '1';
      }
    }, { passive: true });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
      ring.style.opacity = '0';
      isVisible = false;
    });

    document.addEventListener('mouseenter', () => {
      dot.style.opacity = '1';
      ring.style.opacity = '1';
      isVisible = true;
    });

    document.addEventListener('mouseover', (e) => {
      const target = e.target.closest('a, button, input, select, textarea, label, [role="button"], .btn, .dock-btn, .option-btn, .service-card, .faq-trigger, .tab-btn, .whatsapp-floating-btn, .panel-call-btn, .panel-maps-link');
      if (target) {
        ring.classList.add('cursor-ring--hover');
      }
    }, { passive: true });

    document.addEventListener('mouseout', (e) => {
      const target = e.target.closest('a, button, input, select, textarea, label, [role="button"], .btn, .dock-btn, .option-btn, .service-card, .faq-trigger, .tab-btn, .whatsapp-floating-btn, .panel-call-btn, .panel-maps-link');
      if (target) {
        ring.classList.remove('cursor-ring--hover');
      }
    }, { passive: true });

    window.addEventListener('mousedown', () => ring.classList.add('cursor-ring--click'), { passive: true });
    window.addEventListener('mouseup', () => ring.classList.remove('cursor-ring--click'), { passive: true });

    function renderCursor() {
      if (isVisible) {
        const dx = targetX - currentX;
        const dy = targetY - currentY;

        const spring = 0.075;
        const friction = 0.68;

        vx = (vx + dx * spring) * friction;
        vy = (vy + dy * spring) * friction;

        const maxSpeed = 26;
        const speed = Math.hypot(vx, vy);
        if (speed > maxSpeed) {
          const factor = maxSpeed / speed;
          vx *= factor;
          vy *= factor;
        }

        currentX += vx;
        currentY += vy;

        ring.style.transform = `translate3d(${currentX}px, ${currentY}px, 0) translate(-50%, -50%)`;
      }

      requestAnimationFrame(renderCursor);
    }

    requestAnimationFrame(renderCursor);
  })();

  // =========================================================================
  // 9. CARRIL LATERAL Y SEGUIMIENTO EN TIEMPO REAL (SCROLL CLIMBER)
  //    - Polea superior con giro dinámico
  //    - Especialista técnico con balanceo pendular e inercia lerp
  //    - Altímetro en tiempo real (de Fábrica Central a Tu Dormitorio)
  //    - Bocadillo de cómic reactivo con citas de fábrica
  // =========================================================================
  (function initScrollClimber() {
    const ropeClimber = document.getElementById('ropeClimber');
    const climberWindStream = document.getElementById('climberWindStream');
    const climberTag = document.getElementById('climberTag');
    const pulleyWheel = document.getElementById('pulleyWheel');
    const altMeters = document.getElementById('altMeters');
    const altFloor = document.getElementById('altFloor');
    const speechBubble = document.getElementById('climberSpeechBubble');

    if (!ropeClimber && !pulleyWheel) return;

    let lastScrollY = window.scrollY;
    let targetClimberY = 0;
    let currentClimberY = 0;
    let targetRotation = 0;
    let currentRotation = 0;
    let isTicking = false;
    let speechTimer = null;
    let lastWindTime = 0;

    const climberQuotes = [
      '¡Directo de fábrica sin intermediarios!',
      '¡Subida y montaje gratis en tu piso!',
      '¡Retirada gratuita de tu cama vieja!',
      '¡3 Tiendas físicas abiertas en Madrid!',
      '¡3 Años de garantía oficial española!',
      '¡Pruébalo 15 min sin compromiso!'
    ];

    let lastQuoteIndex = -1;
    let isInitialLoad = true;

    function getRandomQuote() {
      let newIndex;
      do {
        newIndex = Math.floor(Math.random() * climberQuotes.length);
      } while (newIndex === lastQuoteIndex && climberQuotes.length > 1);

      lastQuoteIndex = newIndex;
      return climberQuotes[newIndex];
    }

    function spawnWindWisp(container) {
      if (!container) return;
      const line = document.createElement('span');
      line.className = 'wind-line';

      const isRight = Math.random() > 0.5;
      const posX = isRight ? (33 + Math.random() * 4) : (6 + Math.random() * 4);
      const startY = 14 + Math.random() * 20;
      const height = 24 + Math.random() * 10;

      line.style.left = `${posX.toFixed(1)}px`;
      line.style.top = `${startY.toFixed(1)}px`;
      line.style.height = `${height.toFixed(1)}px`;

      container.appendChild(line);

      line.addEventListener('animationend', () => {
        if (line.parentNode) line.remove();
      }, { once: true });

      setTimeout(() => {
        if (line.parentNode) line.remove();
      }, 500);
    }

    function updateClimberPosition() {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      const maxScroll = Math.max(1, docHeight - winHeight);
      const scrollRatio = Math.min(1, Math.max(0, scrollY / maxScroll));

      // Margen superior e inferior contenido
      const topOffset = 130;
      const bottomPadding = 90;
      const availableHeight = winHeight - topOffset - bottomPadding;
      targetClimberY = scrollRatio * availableHeight;

      // Cálculo de velocidad de scroll para leve balanceo pendular
      const scrollDiff = scrollY - lastScrollY;
      lastScrollY = scrollY;
      targetRotation = Math.max(-6, Math.min(6, scrollDiff * 0.2));

      // Giro de polea mecánica superior
      if (pulleyWheel) {
        pulleyWheel.style.transform = `rotate(${scrollY * 0.8}deg)`;
      }

      // Altímetro y Etapas en tiempo real
      if (altMeters) {
        const currentMeters = (scrollRatio * 42).toFixed(1);
        altMeters.textContent = `-${currentMeters}m`;
      }
      if (altFloor) {
        if (scrollRatio < 0.08) {
          altFloor.textContent = 'Fábrica Central';
        } else if (scrollRatio > 0.92) {
          altFloor.textContent = 'Tu Dormitorio';
        } else if (scrollRatio < 0.35) {
          altFloor.textContent = 'Showrooms Madrid';
        } else if (scrollRatio < 0.65) {
          altFloor.textContent = 'Packs & Colchones';
        } else {
          altFloor.textContent = 'Subida & Montaje';
        }
      }

      // Bocadillo de cómic reactivo (solo en escritorio)
      if (speechBubble && window.innerWidth >= 768) {
        speechBubble.classList.remove('bubble--visible');
        clearTimeout(speechTimer);
        const delay = isInitialLoad ? 1500 : 2000;
        speechTimer = setTimeout(() => {
          speechBubble.textContent = getRandomQuote();
          speechBubble.classList.add('bubble--visible');
          isInitialLoad = false;
        }, delay);
      }

      if (!isTicking) {
        isTicking = true;
        requestAnimationFrame(renderClimberPhysics);
      }
    }

    function renderClimberPhysics() {
      currentClimberY += (targetClimberY - currentClimberY) * 0.12;
      currentRotation += (targetRotation - currentRotation) * 0.1;
      targetRotation *= 0.85;

      const isDescending = (targetClimberY - currentClimberY) > 0.2;
      if (isDescending && climberWindStream) {
        const now = performance.now();
        if (now - lastWindTime > 80) {
          lastWindTime = now;
          if (climberWindStream.childElementCount < 3) {
            spawnWindWisp(climberWindStream);
          }
        }
      }

      if (ropeClimber) {
        ropeClimber.style.transform = `translate3d(0, ${currentClimberY}px, 0) rotate(${currentRotation}deg)`;
      }

      if (Math.abs(targetClimberY - currentClimberY) > 0.1 || Math.abs(currentRotation) > 0.05) {
        requestAnimationFrame(renderClimberPhysics);
      } else {
        isTicking = false;
      }
    }

    window.addEventListener('scroll', updateClimberPosition, { passive: true });
    window.addEventListener('resize', updateClimberPosition, { passive: true });
    updateClimberPosition();
  })();

  // =========================================================================
  // 10. EFECTO HAZ DE LUZ / TALLER (HEADLAMP) EN TARJETAS DESTACADAS
  // =========================================================================
  (function initHeadlampEffect() {
    if (!window.matchMedia('(hover: hover) and (pointer: fine)').matches) return;
    const cards = document.querySelectorAll('.has-headlamp-effect');
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--lamp-x', `${x}px`);
        card.style.setProperty('--lamp-y', `${y}px`);
      }, { passive: true });
    });
  })();

  // =========================================================================
  // 11. MICRO-SELECTORES DE FIRMEZA INTERACTIVA Y ALINEACIÓN LUMBAR SVG
  // =========================================================================
  (function initFirmnessSelectors() {
    const firmnessBoxes = document.querySelectorAll('.firmness-meter-box');
    firmnessBoxes.forEach(box => {
      const activeValEl = box.querySelector('.firmness-active-val');
      const spineLine = box.querySelector('.spine-line');
      const spineDot = box.querySelector('.spine-dot');
      const spineCaption = box.querySelector('.spine-caption');
      const pillBtns = box.querySelectorAll('.firmness-pill-btn');

      pillBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
          e.preventDefault();
          pillBtns.forEach(b => b.classList.remove('firmness-pill-btn--active'));
          btn.classList.add('firmness-pill-btn--active');

          const label = btn.getAttribute('data-label') || 'Equilibrada (7.5/10)';
          const level = btn.getAttribute('data-level') || 'media';

          if (activeValEl) activeValEl.textContent = label;

          if (spineLine && spineDot && spineCaption) {
            if (level === 'suave' || level === 'media') {
              spineLine.setAttribute('d', 'M 8 10 Q 45 6, 80 10 T 152 10');
              spineLine.setAttribute('stroke', '#22C55E');
              spineDot.setAttribute('fill', '#22C55E');
              spineCaption.textContent = 'Alineación suave: Ideal durmientes de lado y hombros ligeros';
            } else if (level === 'equilibrada') {
              spineLine.setAttribute('d', 'M 8 10 Q 40 8, 80 10 T 152 10');
              spineLine.setAttribute('stroke', '#F59E0B');
              spineDot.setAttribute('fill', '#F59E0B');
              spineCaption.textContent = 'Alineación equilibrada: Óptimo para parejas y peso medio';
            } else {
              // Firme / Titan
              spineLine.setAttribute('d', 'M 8 10 L 152 10');
              spineLine.setAttribute('stroke', '#0284C7');
              spineDot.setAttribute('fill', '#0284C7');
              spineCaption.textContent = 'Alineación ortopédica: Soporte lumbar recto para durmientes boca arriba';
            }
          }
        });
      });
    });
  })();
});
