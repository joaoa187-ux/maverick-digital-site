const menuButton = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (menuButton && nav) {
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Abrir menu');
  }));
}
const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();

/* Micro-parallax da ilustração principal: somente ponteiro preciso (desktop) */
(() => {
  const stage = document.querySelector(".hero-art");
  if (!stage) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const finePointer = window.matchMedia("(pointer: fine)");
  const layers = [...stage.querySelectorAll("[data-parallax]")];
  if (!layers.length || reduceMotion.matches || !finePointer.matches) return;

  let bounds = null;
  let frame = 0;
  let targetX = 0, targetY = 0;
  let currentX = 0, currentY = 0;
  let active = true;

  const canRun = () => active && !reduceMotion.matches && finePointer.matches && window.innerWidth > 680;

  const animate = () => {
    if (!canRun()) { frame = 0; return; }
    currentX += (targetX - currentX) * 0.09;
    currentY += (targetY - currentY) * 0.09;

    layers.forEach((layer) => {
      const depth = Number(layer.dataset.parallax) || 8;
      const x = currentX * depth;
      const y = currentY * depth;
      layer.style.transform = `translate3d(${x.toFixed(2)}px,${y.toFixed(2)}px,0)`;
    });

    if (Math.abs(targetX-currentX) > 0.002 || Math.abs(targetY-currentY) > 0.002) {
      frame = requestAnimationFrame(animate);
    } else {
      frame = 0;
    }
  };

  const schedule = () => { if (!frame && canRun()) frame = requestAnimationFrame(animate); };

  stage.addEventListener("pointerenter", () => {
    bounds = stage.getBoundingClientRect();
    stage.classList.add("is-interactive");
  });

  stage.addEventListener("pointermove", (event) => {
    if (!canRun()) return;
    bounds ||= stage.getBoundingClientRect();
    targetX = ((event.clientX - bounds.left) / bounds.width - 0.5) * 2;
    targetY = ((event.clientY - bounds.top) / bounds.height - 0.5) * 2;
    stage.style.setProperty("--pointer-x", `${((event.clientX-bounds.left)/bounds.width*100).toFixed(1)}%`);
    stage.style.setProperty("--pointer-y", `${((event.clientY-bounds.top)/bounds.height*100).toFixed(1)}%`);
    schedule();
  });

  stage.addEventListener("pointerleave", () => {
    stage.classList.remove("is-interactive");
    targetX = 0; targetY = 0; bounds = null;
    schedule();
  });

  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(([entry]) => {
      active = Boolean(entry && entry.isIntersecting);
      if (!active && frame) { cancelAnimationFrame(frame); frame = 0; }
      if (active) schedule();
    }, { threshold: 0.05 });
    observer.observe(stage);
  }
})();
