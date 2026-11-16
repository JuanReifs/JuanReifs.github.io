# Portfolio de Juan Reifs García

Portfolio estático de una sola página con Astro 7 y TypeScript estricto, español/inglés,
temas claro/oscuro y formulario de contacto Web3Forms.

## Requisitos y comandos

Node ≥ 22 (mínimo exacto: 22.23.4 según `package.json`) y npm. CI usa Node 26.
Los tests usan el runner nativo de Node con TypeScript, sin Jest ni Vitest.

```sh
npm install
npm run dev     # Servidor local
npm run build   # Genera dist/
npm run check   # Comprobación Astro y TypeScript
npm test        # Construye y ejecuta tests de i18n, HTML y SEO
```

## Estructura

- `src/assets/`: imágenes fuente optimizadas por Astro.
- `src/data/`: datos personales, proyectos, certificaciones y habilidades.
- `src/i18n/`: diccionarios ES/EN y helpers tipados.
- `src/components/`, `src/layouts/` y `src/pages/`: secciones, layout y página principal.
- `src/styles/`: tokens y estilos globales; `src/scripts/`: tema, idioma, dock y formulario.
- `public/`: CV, favicon, imagen social, robots, sitemap estático de una URL y verificaciones de Google y Bing.
- `tests/` (solo en local, no versionado): coherencia de traducciones y smoke tests de `dist/index.html`.
- `.github/workflows/deploy.yml`: comprobaciones y despliegue.

## Qué tengo que rellenar yo

- **Web3Forms:** copia `.env.example` a `.env` y rellena `PUBLIC_WEB3FORMS_KEY` con tu
  Access Key. Para producción, crea la variable `PUBLIC_WEB3FORMS_KEY` en GitHub →
  Settings → Secrets and variables → Actions → Variables. Se incorpora durante el build;
  vuelve a desplegar si la cambias. No subas `.env`.
- **Repositorios:** rellena las `repoUrl` vacías de `src/data/projects.ts` cuando publiques los proyectos.
- **Certificados:** revisa o rellena `verifyUrl` en `src/data/certifications.ts`.
- **Prácticas:** actualiza `internshipHours` en `src/data/site.ts`.
- **Nuevo proyecto, certificación o skill:** añade el dato en el archivo correspondiente de
  `src/data/` y sus claves/textos en **ambos** diccionarios `src/i18n/es.ts` y `en.ts`.
  Los nombres propios de tecnologías pueden ir en `name`; usa `nameKey` si se traducen.
  Ejecuta `npm run check` y `npm test`.

Para cambiar el color de acento, modifica `--accent-h` en `src/styles/tokens.css`.

## Despliegue

Usa el repositorio `JuanReifs.github.io` y configura Settings → Pages → Source:
**GitHub Actions**. El workflow se ejecuta con cada push a `main` o manualmente desde
Actions. Ejecuta `npm run check` antes del build que publica; los tests (`npm test`) son locales y no se suben al repo.
Está basado en la [acción oficial de Astro para Pages](https://docs.astro.build/en/guides/deploy/github/).

La web se publicará en https://juanreifs.github.io, con `base: '/'`.
El sitemap estático vive en `public/sitemap.xml` y está referenciado desde `robots.txt`.
Se usa porque el entorno de implementación no pudo descargar `@astrojs/sitemap` (error DNS).
Si añades páginas o cambias de dominio, actualiza el sitemap, robots y `site` en `astro.config.mjs`.
