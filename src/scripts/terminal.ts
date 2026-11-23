/**
 * Terminal del proyecto destacado: escribe cada comando letra a letra y muestra
 * su salida, una sola vez, cuando la terminal entra en pantalla.
 * El HTML ya trae todo el texto: sin JS o con movimiento reducido no se anima.
 */
const TYPE_MS = 32;
const OUTPUT_PAUSE_MS = 260;
const NEXT_PAUSE_MS = 520;

const wait = (ms: number) => new Promise<void>((resolve) => window.setTimeout(resolve, ms));

/** Vacía la terminal antes de que se vea, para que no aparezca escrita y luego se borre. */
function prepare(term: HTMLElement): () => Promise<void> {
  const lines = Array.from(term.querySelectorAll<HTMLElement>('[data-term-cmd], [data-term-out]'));
  const texts = new Map<HTMLElement, string>();

  for (const line of lines) {
    line.setAttribute('data-term-pending', '');
    const target = line.querySelector<HTMLElement>('[data-term-text]');
    if (target) {
      texts.set(target, target.textContent ?? '');
      target.textContent = '';
    }
  }
  term.dataset.state = 'typing';
  return () => play(term, lines, texts);
}

async function play(term: HTMLElement, lines: HTMLElement[], texts: Map<HTMLElement, string>): Promise<void> {
  for (const line of lines) {
    line.removeAttribute('data-term-pending');
    const target = line.querySelector<HTMLElement>('[data-term-text]');
    if (target) {
      const full = texts.get(target) ?? '';
      for (let i = 1; i <= full.length; i++) {
        target.textContent = full.slice(0, i);
        await wait(TYPE_MS);
      }
      await wait(OUTPUT_PAUSE_MS);
    } else {
      // Línea de salida: aparece de golpe, como en una terminal real.
      await wait(60);
      const next = lines[lines.indexOf(line) + 1];
      if (next?.hasAttribute('data-term-cmd')) await wait(NEXT_PAUSE_MS);
    }
  }
  term.dataset.state = 'done';
}

if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const terms = document.querySelectorAll<HTMLElement>('[data-terminal]');
  const players = new Map<Element, () => Promise<void>>();
  terms.forEach((term) => players.set(term, prepare(term)));
  const observer = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        void players.get(entry.target)?.();
      }
    },
    { threshold: 0.45 },
  );
  terms.forEach((term) => observer.observe(term));
}

export {};
