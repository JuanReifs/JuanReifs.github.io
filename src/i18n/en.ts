import type { Dictionary } from './es';

/** Diccionario en inglés. Mismas claves que `es.ts` (lo garantiza el tipo). */
export const en: Dictionary = {
  'nav.home': 'Home',
  'nav.about': 'About',
  'nav.journey': 'Journey',
  'nav.skills': 'Skills',
  'nav.certifications': 'Certificates',
  'nav.projects': 'Projects',
  'nav.contact': 'Contact',
  'nav.skip': 'Skip to content',
  'nav.label': 'Portfolio sections',

  'controls.theme': 'Switch between dark and light theme',
  'controls.lang': 'Change language',

  'hero.status': 'Available for internships',
  'hero.greeting': "Hi, I'm",
  'hero.role': 'Multiplatform Application Developer',
  'hero.intro':
    "I'm Juan Reifs García, a second-year software development (DAM) student in Madrid. I like understanding how things work under the hood, and the best way I know to learn that is to build them myself.",
  'hero.metric.hours': 'Internship (500 h when done)',
  'hero.metric.projects': 'Projects',
  'hero.metric.english': 'English (Cambridge)',
  'hero.cv': 'Download CV',
  'hero.cvFile': '/CV_Juan_Reifs_Garcia_EN.pdf',
  'hero.contact': 'Contact me',
  'hero.photoAlt': 'Illustrated portrait of Juan Reifs García',

  'about.eyebrow': 'Who I am',
  'about.title': 'About me',
  'about.p1':
    "I'm in the second year of a higher diploma in Multiplatform Application Development, and what interests me most is what sits behind an app: backend, servers, networking and cloud infrastructure.",
  'about.p2':
    "The arrival of AI is one of the reasons I decided to broaden my training. More and more code is written with these tools, so I've started teaching myself system administration, cloud, networking and cybersecurity.",
  'about.p3':
    'I have a solid foundation in Java, Kotlin and relational databases. I use Linux every day: I work on Arch, which is how I learned Bash.',
  'about.p4':
    "To put what I learn about system administration, networking and containers into practice, I'm building a home server on a 2006 Asus Eee PC with 2 GB of RAM. If it runs there, it runs anywhere. My plan is to turn it into a proxy that manages the devices on my Wi-Fi and their connections.",
  'about.p5':
    "I'm looking for a team where I can do my course internship, contribute what I already know and keep learning from people who work with these systems every day. I'm open to software, systems or cloud work, because my main goal is to keep expanding my knowledge. If the opportunity arises, I'd like to stay with the team after the internship.",
  'about.strengths': 'How I work',
  'about.strength.learn': 'I learn fast and on my own',
  'about.strength.team': 'I work well in a team',
  'about.strength.reliable': "I'm reliable and punctual",
  'about.strength.initiative': 'I take the initiative',
  'about.strength.pressure': 'I work well under pressure',
  'about.github': 'GitHub',
  'about.linkedin': 'LinkedIn',
  'about.photoAlt': 'Illustration of Juan standing and coding on a laptop',

  'journey.eyebrow': 'Where I come from',
  'journey.title': 'Journey',
  'journey.bach.tag': 'Before DAM',
  'journey.bach.title': 'Science and Technology Baccalaureate',
  'journey.bach.meta': 'Colegio Escolapias Carabanchel · Madrid',
  'journey.bach.text':
    'Exchanges during secondary school: a week in Germany, a week in London and 30 days living with a host family in Ireland.',
  'journey.dam.tag': '1st year passed · in 2nd year',
  'journey.dam.title': 'Higher Technician in Multiplatform Application Development (DAM)',
  'journey.dam.meta': 'CES Juan Pablo II · Alcorcón (Madrid)',
  'journey.dam.text':
    'Java, Kotlin, relational databases, Android apps and desktop interfaces with JavaFX and Hibernate.',
  'journey.lab.tag': 'On my own',
  'journey.lab.title': 'A homelab on a 2006 eeePC',
  'journey.lab.meta': 'Headless Debian 12 · 2 GB of RAM',
  'journey.lab.text':
    "I use it to practise what the course doesn't cover yet: Docker, PostgreSQL, Spring Boot and local networking.",
  'journey.fct.tag': 'Work placement (FCT)',
  'journey.fct.title': 'Course internship',
  'journey.fct.text':
    "I'm after a backend or infrastructure team where I can keep learning, in Spain or abroad.",
  'journey.fct.progress': 'Internship hours completed',

  'skills.eyebrow': 'What I work with',
  'skills.title': 'Skills',
  'skills.group.using': 'I use these',
  'skills.group.learning': 'Learning on my own',
  'skills.cat.languages': 'Languages',
  'skills.cat.development': 'Development',
  'skills.cat.tools': 'Tools and systems',
  'skills.cat.learning': 'In my homelab and on my own',
  'skills.note.basic': 'basic',
  'skills.name.oop': 'OOP',
  'skills.name.rest': 'REST APIs',

  'certs.eyebrow': 'Credentials',
  'certs.title': 'Certificates',
  'certs.verify': 'Verify',
  'certs.c1.title': 'English C1',
  'certs.c1.issuer': 'Cambridge English',
  'certs.c1.desc': 'C1 level of the Common European Framework of Reference for Languages.',

  'projects.eyebrow': 'What I build',
  'projects.title': 'Projects',
  'projects.status.wip': 'In progress',
  'projects.status.published': 'Published',
  'projects.repo': 'View on GitHub',
  'projects.repoSoon': 'Repository coming soon',
  'projects.homelab.title': 'Homelab',
  'projects.homelab.desc':
    'Personal lab running on a 2006 Asus eeePC (2 GB of RAM, 32-bit CPU) with headless Debian 12. I use it to practise Docker, PostgreSQL and local networking.',
  'projects.labinventory.title': 'LabInventory',
  'projects.labinventory.desc': 'Desktop app for the homelab, built with JavaFX and Hibernate.',
  'projects.labpulse.title': 'LabPulse',
  'projects.labpulse.desc': 'Spring Boot API that monitors the homelab services.',
  'projects.battleship.title': 'Battleship',
  'projects.battleship.desc':
    'Battleship game in Python with Pygame: probabilistic radar with hunt and target modes, games saved as JSON and unit tests. Team class project.',
  'projects.template.title': 'JavaFX template',
  'projects.template.desc':
    'Template for creating JavaFX projects in recent IntelliJ versions, where that option has been removed.',

  'contact.eyebrow': "Let's talk",
  'contact.title': 'Contact me',
  'contact.lead':
    "If you're looking for a backend or infrastructure intern, drop me a line. I reply quickly.",
  'contact.name': 'Name',
  'contact.email': 'Email',
  'contact.message': 'Message',
  'contact.send': 'Send',
  'contact.sending': 'Sending…',
  'contact.success': "Message sent! I'll get back to you as soon as I can.",
  'contact.error': "The message couldn't be sent. Try again or email me directly.",
  'contact.notConfigured': "The form isn't set up yet. In the meantime, email me directly.",
  'contact.err.name': 'Enter your name (at least 2 characters).',
  'contact.err.email': 'Enter a valid email address.',
  'contact.err.message': 'Enter a message of at least 10 characters.',
  'contact.direct': 'Or email me directly at',

  'meta.title': 'Juan Reifs García · Multiplatform Application Developer',
  'meta.description':
    'Portfolio of Juan Reifs García, a software development student in Madrid focused on backend, cloud and Linux. Available for internships.',
};
