/**
 * Añade .is-visible a los elementos .reveal cuando entran en pantalla (una sola vez).
 * Los que entran a la vez se escalonan con --reveal-delay; al acabar la animación
 * reciben .is-done para que su hover vuelva a ser inmediato.
 */
const STEP_MS = 90;
const MAX_STEPS = 5;
const DURATION_MS = 700;

const items = document.querySelectorAll<HTMLElement>('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    const entering = entries.filter((entry) => entry.isIntersecting);
    entering.forEach((entry, index) => {
      const el = entry.target as HTMLElement;
      const delay = Math.min(index, MAX_STEPS) * STEP_MS;
      el.style.setProperty('--reveal-delay', `${delay}ms`);
      el.classList.add('is-visible');
      window.setTimeout(() => el.classList.add('is-done'), delay + DURATION_MS + 50);
      observer.unobserve(el);
    });
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.1 },
);

items.forEach((item) => observer.observe(item));

export {};
