import { es, type Dictionary, type I18nKey } from './es';
import { en } from './en';

export type { Dictionary, I18nKey };

export const LANGS = ['es', 'en'] as const;
export type Lang = (typeof LANGS)[number];
export const DEFAULT_LANG: Lang = 'es';

export const dictionaries: Record<Lang, Dictionary> = { es, en };

/** Texto en el idioma por defecto: es lo que se escribe en el HTML estático. */
export function t(key: I18nKey): string {
  return es[key];
}

/**
 * Atributos + texto para un elemento traducible:
 *   <p {...tr('hero.intro').attrs}>{tr('hero.intro').text}</p>
 * Para el caso habitual basta con: <p data-i18n="hero.intro">{t('hero.intro')}</p>
 *
 * Atributos traducibles (aria-label, alt, placeholder…):
 *   <img alt={t('hero.photoAlt')} data-i18n-attr={attr({ alt: 'hero.photoAlt' })} />
 */
export function attr(map: Record<string, I18nKey>): string {
  return Object.entries(map)
    .map(([name, key]) => `${name}:${key}`)
    .join(';');
}

export function isLang(value: unknown): value is Lang {
  return typeof value === 'string' && (LANGS as readonly string[]).includes(value);
}
