/**
 * Diccionario en español (idioma por defecto y fuente de las claves).
 * `en.ts` debe tener exactamente las mismas claves: TypeScript lo comprueba.
 */
export const es = {
  // Navegación
  'nav.home': 'Inicio',
  'nav.about': 'Sobre mí',
  'nav.skills': 'Habilidades',
  'nav.certifications': 'Certificaciones',
  'nav.projects': 'Proyectos',
  'nav.contact': 'Contacto',
  'nav.skip': 'Saltar al contenido',
  'nav.label': 'Secciones del portfolio',

  // Controles
  'controls.theme': 'Cambiar entre tema oscuro y claro',
  'controls.lang': 'Cambiar idioma',

  // Inicio
  'hero.status': 'Disponible para prácticas',
  'hero.greeting': 'Hola, soy',
  'hero.role': 'Desarrollador de Aplicaciones Multiplataforma',
  'hero.intro':
    'Soy Juan Reifs García, estudiante de 2º de DAM en Madrid. Me interesan el backend, los servidores y la infraestructura cloud, y uso Linux a diario.',
  'hero.metric.hours': 'Prácticas (500 h al acabar)',
  'hero.metric.projects': 'Proyectos',
  'hero.metric.english': 'Inglés (Cambridge)',
  'hero.cv': 'Descargar CV',
  'hero.contact': 'Contáctame',
  'hero.photoAlt': 'Retrato ilustrado de Juan Reifs García',

  // Sobre mí
  'about.eyebrow': 'Quién soy',
  'about.title': 'Sobre mí',
  'about.p1':
    'Estudio 2º de Desarrollo de Aplicaciones Multiplataforma y lo que más me interesa es lo que hay detrás de una aplicación: el backend, los servidores, las redes y la infraestructura cloud.',
  'about.p2':
    'Tengo una base sólida en Java, Kotlin y bases de datos relacionales, y uso Linux a diario: trabajo sobre Arch, automatizo tareas con Bash y mantengo mis propios dotfiles.',
  'about.p3':
    'Para aprender administración de sistemas, redes y contenedores estoy montando un servidor doméstico sobre un Asus eeePC de 2006 con 2 GB de RAM. Si funciona ahí, funciona en cualquier parte.',
  'about.p4':
    'Busco hacer las prácticas del ciclo en un equipo donde pueda seguir formándome y, si es posible, continuar trabajando allí después.',
  'about.education': 'Formación',
  'about.edu.dam.title': 'Técnico Superior en Desarrollo de Aplicaciones Multiplataforma (DAM)',
  'about.edu.dam.meta': 'CES Juan Pablo II · Alcorcón (Madrid) · Cursando 2º, 1º superado',
  'about.edu.bach.title': 'Bachillerato Científico-Tecnológico',
  'about.edu.bach.meta': 'Colegio Escolapias Carabanchel · Madrid',
  'about.international': 'Experiencia internacional',
  'about.international.text':
    'Intercambios durante el Bachillerato: una semana en Alemania, una semana en Londres y 30 días conviviendo con una familia en Irlanda.',
  'about.github': 'GitHub',
  'about.linkedin': 'LinkedIn',
  'about.photoAlt': 'Ilustración de Juan de pie programando con un portátil',

  // Habilidades
  'skills.eyebrow': 'Con qué trabajo',
  'skills.title': 'Habilidades',
  'skills.group.using': 'Las uso',
  'skills.group.learning': 'Aprendiendo por mi cuenta',
  'skills.cat.languages': 'Lenguajes',
  'skills.cat.development': 'Desarrollo',
  'skills.cat.tools': 'Herramientas y sistemas',
  'skills.cat.learning': 'En mi homelab y por mi cuenta',
  'skills.note.basic': 'básico',
  'skills.name.oop': 'POO',
  'skills.name.rest': 'APIs REST',

  // Certificaciones
  'certs.eyebrow': 'Títulos',
  'certs.title': 'Certificaciones',
  'certs.verify': 'Verificar',
  'certs.c1.title': 'Inglés C1',
  'certs.c1.issuer': 'Cambridge English',
  'certs.c1.desc': 'Nivel C1 del Marco Común Europeo de Referencia para las lenguas.',

  // Proyectos
  'projects.eyebrow': 'Lo que construyo',
  'projects.title': 'Proyectos',
  'projects.status.wip': 'En desarrollo',
  'projects.status.published': 'Publicado',
  'projects.repo': 'Ver en GitHub',
  'projects.repoSoon': 'Repositorio próximamente',
  'projects.homelab.title': 'Homelab',
  'projects.homelab.desc':
    'Laboratorio personal sobre un Asus eeePC de 2006 (2 GB de RAM, CPU de 32 bits) con Debian 12 sin entorno gráfico. Lo uso para practicar Docker, PostgreSQL y redes locales.',
  'projects.labinventory.title': 'LabInventory',
  'projects.labinventory.desc':
    'Aplicación de escritorio del homelab, construida con JavaFX e Hibernate.',
  'projects.labpulse.title': 'LabPulse',
  'projects.labpulse.desc': 'API en Spring Boot que vigila los servicios del homelab.',
  'projects.battleship.title': 'Hundir la flota',
  'projects.battleship.desc':
    'Juego de hundir la flota en Python con Pygame: radar probabilístico con modos caza y objetivo, partida guardada en JSON y tests unitarios. Proyecto de clase en equipo.',
  'projects.template.title': 'Plantilla JavaFX',
  'projects.template.desc':
    'Plantilla para crear proyectos JavaFX en las versiones nuevas de IntelliJ, donde esa opción se ha eliminado.',

  // Contacto
  'contact.eyebrow': '¿Hablamos?',
  'contact.title': 'Contáctame',
  'contact.lead':
    'Si buscas a alguien en prácticas para backend o infraestructura, escríbeme. Respondo rápido.',
  'contact.name': 'Nombre',
  'contact.email': 'Email',
  'contact.message': 'Mensaje',
  'contact.send': 'Enviar',
  'contact.sending': 'Enviando…',
  'contact.success': '¡Mensaje enviado! Te responderé lo antes posible.',
  'contact.error': 'No se ha podido enviar. Inténtalo de nuevo o escríbeme directamente por correo.',
  'contact.notConfigured':
    'El formulario aún no está configurado. Mientras tanto, escríbeme directamente por correo.',
  'contact.err.name': 'Escribe tu nombre (mínimo 2 caracteres).',
  'contact.err.email': 'Escribe un email válido.',
  'contact.err.message': 'Escribe un mensaje de al menos 10 caracteres.',
  'contact.direct': 'O escríbeme directamente a',

  // Meta
  'meta.title': 'Juan Reifs García · Desarrollador de Aplicaciones Multiplataforma',
  'meta.description':
    'Portfolio de Juan Reifs García, estudiante de DAM en Madrid orientado a backend, cloud y Linux. Disponible para prácticas.',
} as const;

export type I18nKey = keyof typeof es;
export type Dictionary = Record<I18nKey, string>;
