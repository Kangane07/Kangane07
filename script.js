const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const revealEls = document.querySelectorAll('.reveal, .slide-in');
const dot = document.querySelector('.cursor-dot');
const ring = document.querySelector('.cursor-ring');
const trailContainer = document.querySelector('.cursor-trail');
const magneticEls = document.querySelectorAll('.magnetic');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(pointer: fine)').matches;

if (year) year.textContent = String(new Date().getFullYear());

toggle?.addEventListener('click', () => navLinks?.classList.toggle('open'));
navLinks?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => navLinks.classList.remove('open')));

if ('IntersectionObserver' in window && !reducedMotion) {
  document.body.classList.add('has-animations');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('show'));
}

if (finePointer && !reducedMotion && dot && ring && trailContainer) {
  const trailCount = 16;
  const trail = [];

  for (let i = 0; i < trailCount; i += 1) {
    const particle = document.createElement('span');
    particle.className = 'trail-particle';
    particle.style.opacity = String(0.95 - i / (trailCount + 2));
    trailContainer.appendChild(particle);
    trail.push({ el: particle, x: 0, y: 0 });
  }

  let x = 0;
  let y = 0;
  let rx = 0;
  let ry = 0;

  const loop = () => {
    rx += (x - rx) * 0.16;
    ry += (y - ry) * 0.16;

    dot.style.transform = `translate(${x}px, ${y}px)`;
    ring.style.transform = `translate(${rx}px, ${ry}px)`;

    let tx = x;
    let ty = y;
    trail.forEach((p, i) => {
      const ease = Math.max(0.11, 0.34 - i * 0.015);
      p.x += (tx - p.x) * ease;
      p.y += (ty - p.y) * ease;
      const scale = Math.max(0.28, 1 - i * 0.05);
      p.el.style.transform = `translate(${p.x}px, ${p.y}px) scale(${scale})`;
      tx = p.x;
      ty = p.y;
    });

    requestAnimationFrame(loop);
  };

  window.addEventListener('pointermove', (e) => {
    x = e.clientX;
    y = e.clientY;
    document.body.classList.add('cursor-visible');
  }, { passive: true });

  window.addEventListener('pointerdown', () => document.body.classList.add('cursor-hover'));
  window.addEventListener('pointerup', () => document.body.classList.remove('cursor-hover'));

  document.querySelectorAll('a, button, .work-card').forEach((el) => {
    el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
    el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
  });

  magneticEls.forEach((el) => {
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const mx = (e.clientX - (r.left + r.width / 2)) * 0.08;
      const my = (e.clientY - (r.top + r.height / 2)) * 0.08;
      el.style.transform = `translate(${mx}px, ${my}px)`;
    });
    el.addEventListener('mouseleave', () => {
      el.style.transform = 'translate(0, 0)';
    });
  });

  loop();
}
