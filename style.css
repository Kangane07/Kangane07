:root {
  --bg: #070b18;
  --text: #edf1ff;
  --muted: #b6bfd9;
  --accent: #8e97ff;
  --accent-2: #b38bff;
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, system-ui, -apple-system, sans-serif;
  color: var(--text);
  background:
    radial-gradient(circle at var(--mx, 10%) var(--my, 20%), rgba(91, 110, 255, 0.28), transparent 32%),
    radial-gradient(circle at 75% 10%, #1b2857 0%, var(--bg) 45%);
  line-height: 1.6;
  overflow-x: hidden;
}

.cursor-glow {
  width: 240px;
  height: 240px;
  border-radius: 50%;
  position: fixed;
  left: 0;
  top: 0;
  pointer-events: none;
  z-index: 1;
  background: radial-gradient(circle, rgba(168, 141, 255, 0.25), transparent 65%);
  transform: translate(-50%, -50%);
  transition: transform 0.08s linear;
}

.container {
  width: min(1120px, 92%);
  margin: 0 auto;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 30;
  background: rgba(8, 12, 25, 0.7);
  border-bottom: 1px solid rgba(255, 255, 255, 0.09);
  backdrop-filter: blur(8px);
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 70px;
}

.brand {
  text-decoration: none;
  color: var(--text);
  font-weight: 800;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 1rem;
  margin: 0;
  padding: 0;
}

.nav-links a {
  text-decoration: none;
  color: var(--muted);
  transition: color 0.25s ease;
}

.nav-links a:hover {
  color: #fff;
}

.menu-toggle {
  display: none;
  background: transparent;
  color: var(--text);
  border: 1px solid rgba(255, 255, 255, 0.35);
  border-radius: 10px;
  padding: 0.3rem 0.6rem;
}

main,
.footer,
.site-header {
  position: relative;
  z-index: 2;
}

.hero {
  padding: 5rem 0 3rem;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.35fr 1fr;
  gap: 1.1rem;
  align-items: center;
}

.kicker {
  margin: 0 0 0.5rem;
  color: var(--accent-2);
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

h1 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 3.3rem);
  line-height: 1.15;
}

.hero-copy,
.section p,
.card p,
.card li {
  color: var(--muted);
}

.hero-actions {
  display: flex;
  gap: 0.7rem;
  margin-top: 1.2rem;
}

.btn {
  text-decoration: none;
  border-radius: 999px;
  padding: 0.65rem 1.2rem;
  font-weight: 600;
  transition: transform 0.25s ease;
}

.btn:hover {
  transform: translateY(-2px);
}

.btn.primary {
  background: linear-gradient(135deg, var(--accent), var(--accent-2));
  color: #fff;
}

.btn.ghost {
  border: 1px solid rgba(255, 255, 255, 0.35);
  color: var(--text);
}

.hero-card,
.card,
.contact-box,
.motivation {
  background: linear-gradient(160deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.03));
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 20px;
  padding: 1.2rem;
}

.section {
  padding: 3.1rem 0;
}

h2 {
  margin-top: 0;
  font-size: 1.9rem;
}

.cards-slider {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 1rem;
}

.card-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.6rem;
}

.tag {
  font-size: 0.82rem;
  border-radius: 999px;
  padding: 0.2rem 0.65rem;
  font-weight: 700;
}

.tag.done {
  background: rgba(52, 211, 153, 0.2);
  color: #7cf3c8;
}

.tag.progress {
  background: rgba(250, 204, 21, 0.2);
  color: #ffe384;
}

.card ul {
  padding-left: 1.1rem;
  margin-bottom: 0.5rem;
}

.inline-link {
  color: #dce2ff;
  font-weight: 700;
}

.motivation {
  overflow: hidden;
}

.motivation-line {
  font-size: clamp(1.1rem, 2.2vw, 1.7rem);
  line-height: 1.4;
  transform: translateX(6%);
  opacity: 0.45;
  transition: transform 0.9s ease, opacity 0.9s ease;
}

.motivation-line.in-view {
  transform: translateX(0);
  opacity: 1;
}

.chips {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.chips span {
  border: 1px solid rgba(255, 255, 255, 0.25);
  border-radius: 999px;
  padding: 0.35rem 0.75rem;
  color: #d4ddff;
  transition: transform 0.2s ease;
}

.chips span:hover {
  transform: translateY(-2px);
}

.contact-icons {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.8rem;
}

.contact-icons a {
  display: flex;
  align-items: center;
  gap: 0.55rem;
  text-decoration: none;
  color: #deE4ff;
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: 12px;
  padding: 0.8rem;
  transition: transform 0.25s ease, background 0.25s ease;
}

.contact-icons a:hover {
  transform: translateY(-3px);
  background: rgba(148, 163, 255, 0.12);
}

.contact-icons svg {
  width: 18px;
  height: 18px;
  fill: currentColor;
}

.footer {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  color: var(--muted);
  text-align: center;
  padding: 1.2rem 0;
}

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

.reveal.show {
  opacity: 1;
  transform: translateY(0);
}

.slide-in {
  opacity: 0;
  transform: translateX(26px);
  transition: opacity 0.9s ease, transform 0.9s ease;
}

.slide-in.show {
  opacity: 1;
  transform: translateX(0);
}

.tilt-card {
  transform-style: preserve-3d;
  transition: transform 0.28s ease;
}

@media (max-width: 900px) {
  .hero-grid,
  .cards-slider,
  .contact-icons {
    grid-template-columns: 1fr;
  }

  .cards-slider {
    display: flex;
    overflow-x: auto;
    scroll-snap-type: x mandatory;
    gap: 0.8rem;
    padding-bottom: 0.5rem;
  }

  .cards-slider .card {
    min-width: min(87vw, 420px);
    scroll-snap-align: start;
  }

  .menu-toggle {
    display: block;
  }

  .nav-links {
    display: none;
    position: absolute;
    top: 65px;
    right: 4%;
    flex-direction: column;
    background: rgba(8, 12, 25, 0.98);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 12px;
    padding: 0.8rem;
  }

  .nav-links.open {
    display: flex;
  }

  .cursor-glow {
    display: none;
  }
}
