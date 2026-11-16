import type { I18nKey } from '../i18n';

export interface Skill {
  /** Nombre propio de la tecnología: no se traduce. */
  name: string;
  /** Si el nombre cambia según el idioma (p. ej. POO / OOP), clave que lo traduce. */
  nameKey?: I18nKey;
  /** Matiz opcional traducible, p. ej. "básico". */
  note?: I18nKey;
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
          { name: 'Java' },
          { name: 'Kotlin' },
          { name: 'SQL' },
          { name: 'Bash' },
          { name: 'Python', note: 'skills.note.basic' },
        ],
      },
      {
        title: 'skills.cat.development',
        skills: [
          { name: 'POO', nameKey: 'skills.name.oop' },
          { name: 'Android' },
          { name: 'JavaFX' },
          { name: 'JDBC' },
          { name: 'Hibernate' },
        ],
      },
      {
        title: 'skills.cat.tools',
        skills: [{ name: 'Git' }, { name: 'GitHub' }, { name: 'Linux (Arch)' }, { name: 'MySQL' }],
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
          { name: 'Spring Boot' },
          { name: 'APIs REST', nameKey: 'skills.name.rest' },
          { name: 'PostgreSQL' },
          { name: 'Docker' },
          { name: 'Debian Server' },
        ],
      },
    ],
  },
];
