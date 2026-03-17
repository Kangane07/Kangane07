const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const year = document.querySelector('#year');
const revealEls = document.querySelectorAll('.reveal, .slide-in');
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

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealEls.forEach((el) => observer.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('show'));
}
