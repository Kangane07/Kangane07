const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const cursorGlow = document.querySelector('.cursor-glow');
const revealEls = document.querySelectorAll('.reveal, .slide-in');
const tiltCards = document.querySelectorAll('.tilt-card');
const motivationLine = document.querySelector('.motivation-line');

if (year) {
  year.textContent = String(new Date().getFullYear());
}

toggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

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

window.addEventListener('pointermove', (event) => {
  const { clientX, clientY } = event;

  document.body.style.setProperty('--mx', `${clientX}px`);
  document.body.style.setProperty('--my', `${clientY}px`);

  if (cursorGlow) {
    cursorGlow.style.transform = `translate(${clientX - 120}px, ${clientY - 120}px)`;
  }

  tiltCards.forEach((card) => {
    const rect = card.getBoundingClientRect();
    const inside =
      clientX >= rect.left && clientX <= rect.right && clientY >= rect.top && clientY <= rect.bottom;

    if (!inside) {
      card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
      return;
    }

    const rotateY = ((clientX - rect.left) / rect.width - 0.5) * 10;
    const rotateX = -((clientY - rect.top) / rect.height - 0.5) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  });
});
