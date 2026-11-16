/**
 * Dock: marca la sección activa.
 * - Al hacer scroll: un IntersectionObserver vigila qué sección cruza el centro
 *   de la pantalla.
 * - Al hacer clic: se marca al instante y se ignora al observer mientras dura
 *   el scroll suave, para que el indicador no parpadee por las secciones intermedias.
 */
const links = Array.from(document.querySelectorAll<HTMLAnchorElement>('[data-dock-link]'));
const sections = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));

let locked = false;
let unlockTimer: number | undefined;

function setActive(id: string): void {
  for (const link of links) {
    if (link.dataset.dockLink === id) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  }
}

function unlock(): void {
  locked = false;
  window.clearTimeout(unlockTimer);
}

let observer: IntersectionObserver | undefined;

function observeSections(): void {
  observer?.disconnect();
  // Los porcentajes de rootMargin dependen del ancho: usamos la altura real.
  const inset = Math.max(0, window.innerHeight / 2 - 1);
  observer = new IntersectionObserver(
    (entries) => {
      if (locked) return;
      for (const entry of entries) {
        if (entry.isIntersecting) setActive(entry.target.id);
      }
    },
    { rootMargin: `-${inset}px 0px -${inset}px 0px`, threshold: 0 },
  );
  sections.forEach((section) => observer!.observe(section));
}

observeSections();
window.addEventListener('resize', observeSections);

for (const link of links) {
  link.addEventListener('click', () => {
    const id = link.dataset.dockLink;
    if (!id) return;
    setActive(id);
    locked = true;
    window.clearTimeout(unlockTimer);
    // Respaldo por si el navegador no emite `scrollend`.
    unlockTimer = window.setTimeout(unlock, 1200);
  });
}

window.addEventListener('scrollend', unlock);

// Estado inicial (p. ej. al cargar con #projects en la URL).
const initial = window.location.hash.slice(1);
setActive(sections.some((s) => s.id === initial) ? initial : (sections[0]?.id ?? 'home'));

export {};
