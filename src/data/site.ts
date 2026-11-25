import type { I18nKey } from '../i18n';

/** Datos personales y enlaces. Todo sale de contexto.md y del CV. */
export const site = {
  name: 'Juan',
  fullName: 'Juan Reifs García',
  url: 'https://juanreifs.github.io',
  email: 'reifsgarcia.juan@gmail.com',
  github: 'https://github.com/JuanReifs',
  linkedin: 'https://es.linkedin.com/in/juan-reifs-garc%C3%ADa-5b7a90393',
  /** Archivo dentro de /public (versión por defecto, español; la inglesa sale de 'hero.cvFile') */
  cv: '/CV_Juan_Reifs_Garcia_ES.pdf',
  /** Horas de prácticas hechas hasta ahora. Actualízalo según avances (objetivo: 500). */
  internshipHours: 180,
  /** Horas totales de las prácticas del ciclo. */
  internshipTotal: 500,
} as const;

/**
 * Clave pública de Web3Forms (https://web3forms.com → "Create Access Key" con tu correo).
 * TODO(Juan): pégala en el archivo `.env` como PUBLIC_WEB3FORMS_KEY=xxxxxxxx
 * Mientras esté vacía, el formulario avisa de que no está configurado.
 */
export const WEB3FORMS_KEY: string = import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '';
export const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export type SectionId = 'home' | 'about' | 'journey' | 'skills' | 'certifications' | 'projects' | 'contact';

export interface NavItem {
  id: SectionId;
  label: I18nKey;
  icon: 'home' | 'user' | 'route' | 'code' | 'award' | 'folder' | 'mail';
}

export const navItems: readonly NavItem[] = [
  { id: 'home', label: 'nav.home', icon: 'home' },
  { id: 'about', label: 'nav.about', icon: 'user' },
  { id: 'journey', label: 'nav.journey', icon: 'route' },
  { id: 'skills', label: 'nav.skills', icon: 'code' },
  { id: 'certifications', label: 'nav.certifications', icon: 'award' },
  { id: 'projects', label: 'nav.projects', icon: 'folder' },
  { id: 'contact', label: 'nav.contact', icon: 'mail' },
];
