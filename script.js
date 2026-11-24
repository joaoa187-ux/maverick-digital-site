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

/* Marca as cenas visíveis na tela para que o movimento ambiente (CSS) só rode quando necessário */
(() => {
 const scenes=document.querySelectorAll('.hero-art,.about-visual');
 if(!scenes.length)return;
 if(!('IntersectionObserver' in window)){scenes.forEach(scene=>scene.classList.add('is-visible'));return;}
 const observer=new IntersectionObserver(entries=>entries.forEach(entry=>entry.target.classList.toggle('is-visible',entry.isIntersecting)),{threshold:.15});
 scenes.forEach(scene=>observer.observe(scene));
})();


/* Microinteração por toque nas duas logos oficiais — mantém a rolagem vertical */
(() => {
 const reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)');
 const coarsePointer=window.matchMedia('(pointer: coarse)');
 if(reduceMotion.matches||!coarsePointer.matches)return;
 const scenes=[
  {element:document.querySelector('.hero-art'),logo:'.hero-logo'},
  {element:document.querySelector('.about-visual'),logo:'.about-logo'}
 ].map(scene=>({...scene,target:scene.element?.querySelector(scene.logo)})).filter(scene=>scene.element&&scene.target);
 let active=null;
 const reset=()=>{
  if(!active)return;
  active.target.style.setProperty('--touch-x','0px');
  active.target.style.setProperty('--touch-y','0px');
  active.element.classList.remove('is-touch-active');
  active=null;
 };
 scenes.forEach(scene=>{
  scene.element.addEventListener('pointerdown',event=>{
   if(event.pointerType!=='touch'||reduceMotion.matches)return;
   reset();
   active=scene;
   scene.element.classList.add('is-touch-active');
   scene.target.style.setProperty('--touch-x','0px');
   scene.target.style.setProperty('--touch-y','0px');
  },{passive:true});
  scene.element.addEventListener('pointermove',event=>{
   if(event.pointerType!=='touch'||active!==scene||reduceMotion.matches)return;
   const bounds=scene.element.getBoundingClientRect();
   if(!bounds.width||!bounds.height)return;
   const x=Math.max(-.5,Math.min(.5,(event.clientX-bounds.left)/bounds.width-.5));
   const y=Math.max(-.5,Math.min(.5,(event.clientY-bounds.top)/bounds.height-.5));
   scene.target.style.setProperty('--touch-x',(-x*12).toFixed(2)+'px');
   scene.target.style.setProperty('--touch-y',(-y*10).toFixed(2)+'px');
  },{passive:true});
 });
 window.addEventListener('pointerup',event=>{if(event.pointerType==='touch')reset();},{passive:true});
 window.addEventListener('pointercancel',reset,{passive:true});
 window.addEventListener('blur',reset);
})();
