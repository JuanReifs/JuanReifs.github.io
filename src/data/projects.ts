import type { I18nKey } from '../i18n';

export interface Project {
  id: string;
  title: I18nKey;
  description: I18nKey;
  /** Nombres propios de tecnologías: no se traducen. */
  tech: readonly string[];
  status: 'wip' | 'published';
  /**
   * URL del repositorio en GitHub. Si está vacía (''), la tarjeta muestra
   * "Repositorio próximamente" en lugar del botón.
   */
  repoUrl: string;
}

export const projects: readonly Project[] = [
  {
    id: 'homelab',
    title: 'projects.homelab.title',
    description: 'projects.homelab.desc',
    tech: ['Debian 12', 'Docker', 'PostgreSQL', 'Bash'],
    status: 'wip',
    repoUrl: '', // TODO(Juan): pega aquí el repo cuando lo subas a GitHub
  },
  {
    id: 'labinventory',
    title: 'projects.labinventory.title',
    description: 'projects.labinventory.desc',
    tech: ['Java', 'JavaFX', 'Hibernate'],
    status: 'wip',
    repoUrl: '', // TODO(Juan): pega aquí el repo cuando lo subas a GitHub
  },
  {
    id: 'labpulse',
    title: 'projects.labpulse.title',
    description: 'projects.labpulse.desc',
    tech: ['Java', 'Spring Boot', 'API REST'],
    status: 'wip',
    repoUrl: '', // TODO(Juan): pega aquí el repo cuando lo subas a GitHub
  },
  {
    id: 'battleship',
    title: 'projects.battleship.title',
    description: 'projects.battleship.desc',
    tech: ['Python', 'Pygame'],
    status: 'published',
    repoUrl: 'https://github.com/JuanReifs/Hundir-la-flota-',
  },
  {
    id: 'template',
    title: 'projects.template.title',
    description: 'projects.template.desc',
    tech: ['Java', 'JavaFX'],
    status: 'published',
    repoUrl: 'https://github.com/JuanReifs/Plantilla',
  },
];
