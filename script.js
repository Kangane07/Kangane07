const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const cursorGlow = document.querySelector('.cursor-glow');
const revealEls = document.querySelectorAll('.reveal, .slide-in');
const tiltCards = document.querySelectorAll('.tilt-card');
const motivationLine = document.querySelector('.motivation-line');

const supportsFinePointer = window.matchMedia('(pointer: fine)').matches;
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (year) {
  year.textContent = String(new Date().getFullYear());
}

toggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

if ('IntersectionObserver' in window && !reducedMotion) {
  document.body.classList.add('has-animations');

  const revealOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          revealOnScroll.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.18 },
  );

  revealEls.forEach((el) => revealOnScroll.observe(el));

  if (motivationLine) {
    const motivationObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            motivationLine.classList.add('in-view');
          }
        });
      },
      { threshold: 0.5 },
    );

    motivationObserver.observe(motivationLine);
  }
} else {
  revealEls.forEach((el) => el.classList.add('show'));
  motivationLine?.classList.add('in-view');
}

if (supportsFinePointer && !reducedMotion) {
  let rafId = null;
  let lastX = 0;
  let lastY = 0;

  const renderPointerEffects = () => {
    document.body.style.setProperty('--mx', `${lastX}px`);
    document.body.style.setProperty('--my', `${lastY}px`);

    if (cursorGlow) {
      cursorGlow.style.transform = `translate(${lastX - 120}px, ${lastY - 120}px)`;
    }

    tiltCards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const inside = lastX >= rect.left && lastX <= rect.right && lastY >= rect.top && lastY <= rect.bottom;

      if (!inside) {
        card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
        return;
      }

      const rotateY = ((lastX - rect.left) / rect.width - 0.5) * 8;
      const rotateX = -((lastY - rect.top) / rect.height - 0.5) * 6;
      card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    rafId = null;
  };

  window.addEventListener('pointermove', (event) => {
    lastX = event.clientX;
    lastY = event.clientY;

    if (!rafId) {
      rafId = window.requestAnimationFrame(renderPointerEffects);
    }
  }, { passive: true });
}
