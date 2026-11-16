/**
 * Preferencias globales: tema (oscuro/claro) e idioma (ES/EN).
 * - El tema se aplica con `data-theme` en <html>; los colores salen de tokens.css.
 * - El idioma sustituye el texto de todo elemento con `data-i18n="clave"` y los
 *   atributos declarados en `data-i18n-attr="atributo:clave;atributo:clave"`.
 * Ambas elecciones se guardan en localStorage.
 */
import { DEFAULT_LANG, dictionaries, isLang, type I18nKey, type Lang } from '../i18n';

type Theme = 'dark' | 'light';

const root = document.documentElement;

function store(key: string, value: string): void {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* almacenamiento bloqueado: la preferencia dura solo esta visita */
  }
}

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

// ───────── Idioma ─────────

let currentLang: Lang = DEFAULT_LANG;

export function getLang(): Lang {
  return currentLang;
}

/** Traduce una clave al idioma activo. Para textos que se generan desde JS. */
export function translate(key: I18nKey): string {
  return dictionaries[currentLang][key];
}

function isKey(key: string, dict: Record<string, string>): key is I18nKey {
  return key in dict;
}

export function applyLang(lang: Lang): void {
  currentLang = lang;
  const dict = dictionaries[lang];
  root.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.dataset.i18n ?? '';
    if (isKey(key, dict)) el.textContent = dict[key];
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-attr]').forEach((el) => {
    for (const pair of (el.dataset.i18nAttr ?? '').split(';')) {
      const [name, key] = pair.split(':');
      if (name && key && isKey(key, dict)) el.setAttribute(name, dict[key]);
    }
  });

  document.title = dict['meta.title'];
  document
    .querySelector('meta[name="description"]')
    ?.setAttribute('content', dict['meta.description']);

  document.querySelectorAll<HTMLElement>('[data-lang-option]').forEach((el) => {
    el.toggleAttribute('data-active', el.dataset.langOption === lang);
  });

  document.dispatchEvent(new CustomEvent<Lang>('langchange', { detail: lang }));
}

// ───────── Tema ─────────

function currentTheme(): Theme {
  return root.dataset.theme === 'light' ? 'light' : 'dark';
}

function applyTheme(theme: Theme): void {
  root.dataset.theme = theme;
  document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((btn) => {
    btn.setAttribute('aria-pressed', String(theme === 'light'));
  });
}

// ───────── Arranque ─────────

const savedLang = read('lang');
if (isLang(savedLang) && savedLang !== DEFAULT_LANG) applyLang(savedLang);
else applyLang(DEFAULT_LANG);
applyTheme(currentTheme());

document.querySelectorAll<HTMLElement>('[data-theme-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next: Theme = currentTheme() === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    store('theme', next);
  });
});

document.querySelectorAll<HTMLElement>('[data-lang-toggle]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const next: Lang = currentLang === 'es' ? 'en' : 'es';
    applyLang(next);
    store('lang', next);
  });
});
