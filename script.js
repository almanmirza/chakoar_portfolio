(() => {
  const progress = document.querySelector('.progress');
  const glow = document.querySelector('.cursor-glow');
  window.addEventListener('pointermove', e => { if (glow) { glow.style.left=e.clientX+'px'; glow.style.top=e.clientY+'px'; }});
  window.addEventListener('scroll', () => {
    const h = document.documentElement.scrollHeight - innerHeight;
    progress.style.width = (h ? scrollY / h * 100 : 0) + '%';
  }, {passive:true});
  if (window.gsap) {
    gsap.registerPlugin(ScrollTrigger);
    gsap.from('.hero-copy > *', {y:35, opacity:0, duration:1, stagger:.12, ease:'power3.out', delay:.2});
    gsap.from('.hero-visual', {scale:1.12, opacity:0, duration:1.5, ease:'power3.out'});
    gsap.utils.toArray('.reveal').forEach(el => {
      gsap.fromTo(el, {y:35, opacity:0}, {y:0, opacity:1, duration:.9, ease:'power3.out', scrollTrigger:{trigger:el,start:'top 86%',once:true}});
    });
    gsap.to('.route', {strokeDashoffset:-240, duration:8, repeat:-1, ease:'none'});
    gsap.to('.route-dot', {scale:1.35, opacity:.55, duration:1.3, repeat:-1, yoyo:true, ease:'sine.inOut'});
    gsap.to('.hero-orb', {y:-60, x:-25, ease:'none', scrollTrigger:{trigger:'.hero',start:'top top',end:'bottom top',scrub:1}});
  }
})();
