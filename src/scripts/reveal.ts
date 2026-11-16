/** Añade .is-visible a los elementos .reveal cuando entran en pantalla (una sola vez). */
const items = document.querySelectorAll<HTMLElement>('.reveal');

const observer = new IntersectionObserver(
  (entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) continue;
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  },
  { rootMargin: '0px 0px -10% 0px', threshold: 0.1 },
);

items.forEach((item) => observer.observe(item));

export {};
