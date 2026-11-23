import type { I18nKey } from '../i18n';

export interface Skill {
  /** Nombre propio de la tecnología: no se traduce. */
  name: string;
  /** Si el nombre cambia según el idioma (p. ej. POO / OOP), clave que lo traduce. */
  nameKey?: I18nKey;
  /** Matiz opcional traducible, p. ej. "básico". */
  note?: I18nKey;
  /** Logo a color en /public/logos (CC0, ver icons-credits.json). */
  logo?: string;
  /** Si no hay logo oficial (SQL, POO, JavaFX…), icono de interfaz. */
  glyph?: 'database' | 'boxes' | 'window' | 'cable' | 'braces';
}

export interface SkillCategory {
  title: I18nKey;
  skills: readonly Skill[];
}

export interface SkillGroup {
  id: 'using' | 'learning';
  title: I18nKey;
  categories: readonly SkillCategory[];
}

/** Fuente: CV y contexto.md. No añadir nada que Juan no use o estudie de verdad. */
export const skillGroups: readonly SkillGroup[] = [
  {
    id: 'using',
    title: 'skills.group.using',
    categories: [
      {
        title: 'skills.cat.languages',
        skills: [
          { name: 'Java', logo: 'java.svg' },
          { name: 'Kotlin', logo: 'kotlin.svg' },
          { name: 'SQL', glyph: 'database' },
          { name: 'Bash', logo: 'bash.svg' },
          { name: 'Python', note: 'skills.note.basic', logo: 'python.svg' },
        ],
      },
      {
        title: 'skills.cat.development',
        skills: [
          { name: 'POO', nameKey: 'skills.name.oop', glyph: 'boxes' },
          { name: 'Android', logo: 'android.svg' },
          { name: 'JavaFX', glyph: 'window' },
          { name: 'JDBC', glyph: 'cable' },
          { name: 'Hibernate', logo: 'hibernate.svg' },
        ],
      },
      {
        title: 'skills.cat.tools',
        skills: [
          { name: 'Git', logo: 'git-icon.svg' },
          { name: 'GitHub', logo: 'github.svg' },
          { name: 'Arch Linux', logo: 'archlinux.svg' },
          { name: 'MySQL', logo: 'mysql.svg' },
        ],
      },
    ],
  },
  {
    id: 'learning',
    title: 'skills.group.learning',
    categories: [
      {
        title: 'skills.cat.learning',
        skills: [
          { name: 'Spring Boot', logo: 'spring.svg' },
          { name: 'APIs REST', nameKey: 'skills.name.rest', glyph: 'braces' },
          { name: 'PostgreSQL', logo: 'postgres.svg' },
          { name: 'Docker', logo: 'docker.svg' },
          { name: 'Debian Server', logo: 'debian.svg' },
        ],
      },
    ],
  },
];
