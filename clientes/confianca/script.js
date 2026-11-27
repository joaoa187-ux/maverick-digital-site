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
