(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav-links');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
      toggle.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menu');
    }));
  }
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();

  // Mobile press feedback: short, tactile versions of the desktop hover effects.
  if (window.matchMedia('(hover: none) and (pointer: coarse)').matches) {
    const touchTargets = [
      '.brand', '.footer-brand-block', '.hero-photo-frame', '.location-photo-wrap',
      '.button', '.location-map-button', '.nav-links a', '.service-link', '.text-link'
    ].join(',');
    const pressedByPointer = new Map();
    const releaseTimers = new WeakMap();

    const releaseTarget = (target) => {
      if (!target) return;
      const previousTimer = releaseTimers.get(target);
      if (previousTimer) window.clearTimeout(previousTimer);
      const timer = window.setTimeout(() => {
        target.classList.remove('is-touch-active');
        releaseTimers.delete(target);
      }, 130);
      releaseTimers.set(target, timer);
    };

    document.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'touch') return;
      const target = event.target.closest(touchTargets);
      if (!target) return;
      const previousTimer = releaseTimers.get(target);
      if (previousTimer) window.clearTimeout(previousTimer);
      target.classList.add('is-touch-active');
      pressedByPointer.set(event.pointerId, target);
    }, { passive: true });

    const endTouch = (event) => {
      const target = pressedByPointer.get(event.pointerId);
      if (!target) return;
      pressedByPointer.delete(event.pointerId);
      releaseTarget(target);
    };
    document.addEventListener('pointerup', endTouch, { passive: true });
    document.addEventListener('pointercancel', endTouch, { passive: true });

    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        pressedByPointer.forEach(target => target.classList.remove('is-touch-active'));
        pressedByPointer.clear();
      }
    });
  }

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (!reduceMotion && 'IntersectionObserver' in window) {
    const revealSelectors = [
      '.hero-copy', '.hero-visual', '.section-heading', '.service-card',
      '.approach-image', '.approach-copy', '.about-copy', '.about-visual',
      '.location-copy', '.location-photo-wrap', '.faq-heading', '.faq-list',
      '.closing-inner', '.footer-main'
    ].join(',');
    const targets = document.querySelectorAll(revealSelectors);
    if (targets.length) {
      targets.forEach(el => el.setAttribute('data-reveal', ''));
      document.documentElement.classList.add('has-reveal');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.12, rootMargin: '0px 0px -36px 0px' });
      targets.forEach(el => observer.observe(el));
    }
  }
})();
