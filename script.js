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

/* Micro-parallax leve nas duas marcas oficiais; somente ponteiro preciso em desktop */
(() => {
 const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const finePointer=window.matchMedia('(pointer: fine)');
 if(reduceMotion.matches||!finePointer.matches)return;
 const scenes=[{element:document.querySelector('.hero-art'),layers:[['.hero-logo',5],['.orbit-a',2],['.orbit-b',-2],['.card-google',8],['.card-site',-7],['.growth-bars',4],['.growth-arrow',-9]]},{element:document.querySelector('.about-visual'),layers:[['.about-logo',4]]}].filter(scene=>scene.element);
 scenes.forEach(({element,layers})=>{
  const targets=layers.map(([selector,depth])=>({node:element.querySelector(selector),depth})).filter(item=>item.node);
  if(!targets.length)return;
  let bounds;
  const reset=()=>{element.classList.remove('is-interactive');element.style.setProperty('--light-x','50%');element.style.setProperty('--light-y','50%');targets.forEach(({node})=>node.style.setProperty('translate','0px 0px'));};
  element.addEventListener('pointerenter',()=>{if(window.innerWidth<=680||reduceMotion.matches)return;bounds=element.getBoundingClientRect();element.classList.add('is-interactive');});
  element.addEventListener('pointermove',event=>{if(window.innerWidth<=680||reduceMotion.matches)return;bounds||=element.getBoundingClientRect();const x=(event.clientX-bounds.left)/bounds.width-.5;const y=(event.clientY-bounds.top)/bounds.height-.5;element.style.setProperty('--light-x',((x+.5)*100).toFixed(1)+'%');element.style.setProperty('--light-y',((y+.5)*100).toFixed(1)+'%');targets.forEach(({node,depth})=>node.style.setProperty('translate',(-x*depth).toFixed(2)+'px '+(-y*depth).toFixed(2)+'px'));});
  element.addEventListener('pointerleave',()=>{bounds=null;reset();});
 });
})();
