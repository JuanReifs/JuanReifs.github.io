/**
 * Microinteracciones:
 * - [data-count-to]: el número sube de 0 a su valor al entrar en pantalla.
 *   El HTML ya trae el valor final, así que sin JS o con movimiento reducido se ve tal cual.
 * - .card--interactive: guarda la posición del puntero en --mx/--my para el foco de luz.
 */
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ───────── Contadores ─────────
function countUp(el: HTMLElement, duration = Math.min(1800, 700 + Number(el.dataset.countTo) * 6)): void {
  const target = Number(el.dataset.countTo);
  if (!Number.isFinite(target) || target <= 0) return;
  const start = performance.now();
  // Misma curva que la barra de prácticas: cubic-bezier(0.25, 1, 0.5, 1) ≈ ease-out quart
  const ease = (t: number) => 1 - Math.pow(1 - t, 4);

  function frame(now: number): void {
    const progress = Math.min(1, (now - start) / duration);
    el.textContent = String(Math.round(ease(progress) * target));
    if (progress < 1) requestAnimationFrame(frame);
  }

  el.textContent = '0';
  requestAnimationFrame(frame);
}

// ───────── Barra de prácticas: se rellena y cuenta a la vez, al verse entera ─────────
const bars = document.querySelectorAll<HTMLElement>('[data-progress]');
if (reduceMotion) {
  bars.forEach((bar) => bar.classList.add('is-filled'));
} else {
  const barObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const bar = entry.target as HTMLElement;
        barObserver.unobserve(bar);
        window.setTimeout(() => {
          bar.classList.add('is-filled');
          const counter = bar.querySelector<HTMLElement>('[data-count-to]');
          if (counter) countUp(counter, 1600);
        }, 250);
      }
    },
    { threshold: 1, rootMargin: '0px 0px -12% 0px' },
  );
  bars.forEach((bar) => {
    const counter = bar.querySelector<HTMLElement>('[data-count-to]');
    if (counter) counter.textContent = '0';
    barObserver.observe(bar);
  });
}

if (!reduceMotion) {
  const counters = document.querySelectorAll<HTMLElement>('[data-count-to]:not([data-progress] *)');
  const counterObserver = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const el = entry.target as HTMLElement;
        counterObserver.unobserve(el);
        // Los de dentro del hero esperan a que termine su entrada.
        const delay = el.closest('.hero') ? 650 : 900;
        window.setTimeout(() => countUp(el), delay);
      }
    },
    { threshold: 0.6 },
  );
  counters.forEach((el) => counterObserver.observe(el));
}

// ───────── Foco de luz en tarjetas ─────────
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

if (finePointer) {
  document.querySelectorAll<HTMLElement>('.card--interactive').forEach((card) => {
    card.addEventListener('pointermove', (event) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${event.clientX - rect.left}px`);
      card.style.setProperty('--my', `${event.clientY - rect.top}px`);
    });
  });
}

export {};
