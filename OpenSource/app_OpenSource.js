/* ============================================================
   DATOS — 15 archivos con su código (HTML, CSS, JS)
   ► Para personalizar: edita el campo `codigo` de cada objeto
============================================================ */
const archivos = [
    // ── 5 HTML ──────────────────────────────────────────────
    {
        nombre: "index.html",
        lang: "html",
        descripcion: "Estructura base del documento",
        detalle: "Plantilla HTML5 semántica con meta viewport y favicon.",
        tamano: "1.2 KB",
        codigo: `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Mi aplicación web" />
  <title>Mi App</title>
  <link rel="stylesheet" href="styles.css" />
</head>
<body>

  <header class="header">
    <nav class="nav">
      <a href="/" class="logo">🚀 MiApp</a>
      <ul class="nav__links">
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#sobre">Sobre mí</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  </header>

  <main id="inicio">
    <section class="hero">
      <h1>Bienvenido a MiApp</h1>
      <p>La mejor plataforma para desarrolladores.</p>
      <button class="btn btn--primary">Empieza ya</button>
    </section>
  </main>

  <footer>
    <p>&copy; 2024 MiApp. Todos los derechos reservados.</p>
  </footer>

  <script src="app.js"><\/script>
</body>
</html>`
    },
    {
        nombre: "ads.html",
        lang: "html",
        descripcion: "Componente tarjeta reutilizable",
        detalle: "Tarjeta con imagen, título, descripción y CTA.",
        tamano: "0.9 KB",
        codigo: `<!-- Componente: Card -->
<article class="card" role="article">

  <figure class="card__imagen">
    <img
      src="https://picsum.photos/400/200"
      alt="Descripción de imagen"
      loading="lazy"
    />
    <span class="card__badge">Nuevo</span>
  </figure>

  <div class="card__cuerpo">
    <header class="card__cabecera">
      <span class="card__categoria">Tecnología</span>
      <time class="card__fecha" datetime="2024-12-01">01 Dic 2024</time>
    </header>

    <h2 class="card__titulo">
      <a href="/articulo/1">Título del artículo destacado</a>
    </h2>

    <p class="card__resumen">
      Breve descripción del contenido que engancha al lector
      y le invita a hacer clic para saber más.
    </p>

    <footer class="card__pie">
      <div class="card__autor">
        <img src="avatar.png" alt="Autor" class="card__avatar" />
        <span>Ana García</span>
      </div>
      <a href="/articulo/1" class="btn btn--sm">Leer más →</a>
    </footer>
  </div>

</article>`
    },
    {
        nombre: "cpp.html",
        lang: "html",
        descripcion: "Formulario de contacto accesible",
        detalle: "Form con validación HTML5, labels y ARIA.",
        tamano: "1.4 KB",
        codigo: `<section class="form-section" aria-labelledby="form-titulo">
  <h2 id="form-titulo">Contacta con nosotros</h2>

  <form
    class="formulario"
    action="/api/contacto"
    method="POST"
    novalidate
  >
    <div class="form__grupo">
      <label for="nombre" class="form__label">
        Nombre completo <span aria-hidden="true">*</span>
      </label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        class="form__input"
        placeholder="Ej: María López"
        required
        autocomplete="name"
        aria-required="true"
      />
      <span class="form__error" role="alert" hidden>
        Por favor, introduce tu nombre.
      </span>
    </div>

    <div class="form__grupo">
      <label for="email" class="form__label">
        Correo electrónico <span aria-hidden="true">*</span>
      </label>
      <input
        type="email"
        id="email"
        name="email"
        class="form__input"
        placeholder="tu@email.com"
        required
        autocomplete="email"
      />
    </div>

    <div class="form__grupo">
      <label for="mensaje" class="form__label">Mensaje</label>
      <textarea
        id="mensaje"
        name="mensaje"
        class="form__textarea"
        rows="5"
        placeholder="Escribe tu mensaje aquí..."
      ></textarea>
    </div>

    <button type="submit" class="btn btn--primary btn--full">
      Enviar mensaje ✉
    </button>
  </form>
</section>`
    },
    {
        nombre: "navbar.html",
        lang: "html",
        descripcion: "Barra de navegación responsiva",
        detalle: "Nav con hamburger menu para móvil y dropdown.",
        tamano: "1.1 KB",
        codigo: `<header class="header" role="banner">
  <nav class="navbar" aria-label="Navegación principal">

    <!-- Logo -->
    <a href="/" class="navbar__logo" aria-label="Ir al inicio">
      <svg width="32" height="32" aria-hidden="true"><!-- icono svg --></svg>
      <span>MiSitio</span>
    </a>

    <!-- Menú principal (desktop) -->
    <ul class="navbar__menu" role="list">
      <li><a href="/" class="navbar__link activo">Inicio</a></li>
      <li><a href="/blog" class="navbar__link">Blog</a></li>

      <!-- Dropdown -->
      <li class="navbar__item--dropdown">
        <button class="navbar__link navbar__dropdown-btn"
                aria-expanded="false"
                aria-haspopup="true">
          Servicios ▾
        </button>
        <ul class="navbar__dropdown" role="menu" hidden>
          <li><a href="/web" role="menuitem">Diseño Web</a></li>
          <li><a href="/app" role="menuitem">Apps Móvil</a></li>
          <li><a href="/seo" role="menuitem">SEO</a></li>
        </ul>
      </li>

      <li><a href="/contacto" class="btn btn--outline btn--sm">
        Contacto
      </a></li>
    </ul>

    <!-- Botón hamburger (móvil) -->
    <button class="navbar__hamburger"
            aria-label="Abrir menú"
            aria-expanded="false"
            aria-controls="mobile-menu">
      <span></span><span></span><span></span>
    </button>

  </nav>
</header>`
    },
    {
        nombre: "tabla.html",
        lang: "html",
        descripcion: "Tabla de datos semántica",
        detalle: "Tabla accesible con caption, scope y ordenación.",
        tamano: "1.3 KB",
        codigo: `<div class="tabla-wrapper" role="region" aria-label="Tabla de productos">
  <table class="tabla" aria-describedby="tabla-desc">

    <caption id="tabla-desc" class="tabla__caption">
      Listado de productos — actualizado hoy
    </caption>

    <thead>
      <tr>
        <th scope="col" class="tabla__th sortable" data-col="id">
          # <span aria-hidden="true">↕</span>
        </th>
        <th scope="col" class="tabla__th">Producto</th>
        <th scope="col" class="tabla__th">Categoría</th>
        <th scope="col" class="tabla__th sortable" data-col="precio">
          Precio <span aria-hidden="true">↕</span>
        </th>
        <th scope="col" class="tabla__th">Stock</th>
        <th scope="col" class="tabla__th">Acciones</th>
      </tr>
    </thead>

    <tbody>
      <tr class="tabla__fila">
        <td class="tabla__td">001</td>
        <td class="tabla__td tabla__td--nombre">
          <img src="prod1.png" alt="" class="tabla__img" />
          Laptop Pro X
        </td>
        <td class="tabla__td">Electrónica</td>
        <td class="tabla__td">1.299,00 €</td>
        <td class="tabla__td">
          <span class="badge badge--verde">En stock</span>
        </td>
        <td class="tabla__td">
          <button class="btn btn--xs">✏ Editar</button>
          <button class="btn btn--xs btn--danger">🗑 Borrar</button>
        </td>
      </tr>
    </tbody>

  </table>
</div>`
    },

    // ── 5 CSS ───────────────────────────────────────────────
    {
        nombre: "variables.css",
        lang: "css",
        descripcion: "Sistema de design tokens",
        detalle: "Custom Properties con modo oscuro automático.",
        tamano: "1.5 KB",
        codigo: `/* ============================================
   DESIGN TOKENS — Sistema de variables CSS
============================================ */
:root {
  /* Paleta de color */
  --clr-primary-50:  #eff6ff;
  --clr-primary-400: #60a5fa;
  --clr-primary-500: #3b82f6;
  --clr-primary-600: #2563eb;
  --clr-primary-900: #1e3a8a;

  --clr-neutral-50:  #f9fafb;
  --clr-neutral-100: #f3f4f6;
  --clr-neutral-800: #1f2937;
  --clr-neutral-900: #111827;
  --clr-neutral-950: #030712;

  --clr-success: #22c55e;
  --clr-warning: #f59e0b;
  --clr-danger:  #ef4444;

  /* Semánticos */
  --clr-bg:      var(--clr-neutral-50);
  --clr-surface: #ffffff;
  --clr-border:  var(--clr-neutral-100);
  --clr-text:    var(--clr-neutral-900);
  --clr-muted:   #6b7280;
  --clr-accent:  var(--clr-primary-500);

  /* Tipografía */
  --font-sans:  'Inter', system-ui, sans-serif;
  --font-mono:  'Fira Code', 'Cascadia Code', monospace;
  --fs-xs:   0.75rem;
  --fs-sm:   0.875rem;
  --fs-base: 1rem;
  --fs-lg:   1.125rem;
  --fs-xl:   1.25rem;
  --fs-2xl:  1.5rem;
  --fs-4xl:  2.25rem;

  /* Espaciado */
  --space-1: 0.25rem;  --space-2: 0.5rem;
  --space-4: 1rem;     --space-6: 1.5rem;
  --space-8: 2rem;     --space-16: 4rem;

  /* Bordes y sombras */
  --radius-sm: 0.25rem;
  --radius-md: 0.5rem;
  --radius-lg: 1rem;
  --radius-full: 9999px;

  --shadow-sm: 0 1px 2px rgba(0,0,0,.05);
  --shadow-md: 0 4px 6px -1px rgba(0,0,0,.1);
  --shadow-lg: 0 10px 15px -3px rgba(0,0,0,.1);

  /* Transiciones */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
}

/* Modo oscuro automático */
@media (prefers-color-scheme: dark) {
  :root {
    --clr-bg:      var(--clr-neutral-950);
    --clr-surface: var(--clr-neutral-900);
    --clr-border:  rgba(255,255,255,0.08);
    --clr-text:    var(--clr-neutral-50);
    --clr-muted:   #9ca3af;
  }
}`
    },
    {
        nombre: "grid-layout.css",
        lang: "css",
        descripcion: "Sistema de layout con CSS Grid",
        detalle: "Grid responsivo de 12 columnas con áreas nombradas.",
        tamano: "1.1 KB",
        codigo: `/* ============================================
   GRID SYSTEM — Layout de 12 columnas
============================================ */

/* Contenedor base */
.container {
  width: min(100% - 2rem, 1200px);
  margin-inline: auto;
}

/* Grid de 12 columnas */
.grid {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: var(--space-4, 1rem);
}

/* Columnas utilitarias */
.col-1  { grid-column: span 1; }
.col-2  { grid-column: span 2; }
.col-3  { grid-column: span 3; }
.col-4  { grid-column: span 4; }
.col-6  { grid-column: span 6; }
.col-8  { grid-column: span 8; }
.col-12 { grid-column: span 12; }

/* Layout de página completa */
.layout-app {
  display: grid;
  grid-template-areas:
    "header  header  header"
    "sidebar main    aside"
    "footer  footer  footer";
  grid-template-columns: 260px 1fr 320px;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

.layout-app > header { grid-area: header; }
.layout-app > nav    { grid-area: sidebar; }
.layout-app > main   { grid-area: main; }
.layout-app > aside  { grid-area: aside; }
.layout-app > footer { grid-area: footer; }

/* Responsive — tablet */
@media (max-width: 1024px) {
  .layout-app {
    grid-template-areas:
      "header"
      "main"
      "footer";
    grid-template-columns: 1fr;
  }
  .layout-app > nav,
  .layout-app > aside { display: none; }

  .col-3, .col-4 { grid-column: span 6; }
  .col-6         { grid-column: span 12; }
}

/* Responsive — móvil */
@media (max-width: 640px) {
  .grid { gap: var(--space-2, 0.5rem); }
  [class^="col-"] { grid-column: span 12; }
}`
    },
    {
        nombre: "animaciones.css",
        lang: "css",
        descripcion: "Librería de animaciones CSS",
        detalle: "Keyframes reutilizables con clases de utilidad.",
        tamano: "1.3 KB",
        codigo: `/* ============================================
   ANIMACIONES CSS — Librería de efectos
============================================ */

/* Variables de animación */
:root {
  --ease-bounce:    cubic-bezier(0.34, 1.56, 0.64, 1);
  --ease-smooth:    cubic-bezier(0.4, 0, 0.2, 1);
  --ease-spring:    cubic-bezier(0.16, 1, 0.3, 1);
  --dur-fast:   150ms;
  --dur-base:   300ms;
  --dur-slow:   500ms;
}

/* ── Keyframes base ── */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes slideDown {
  from { opacity: 0; transform: translateY(-20px); }
  to   { opacity: 1; transform: translateY(0); }
}

@keyframes scaleIn {
  from { opacity: 0; transform: scale(0.9); }
  to   { opacity: 1; transform: scale(1); }
}

@keyframes shake {
  0%, 100% { transform: translateX(0); }
  25%       { transform: translateX(-8px); }
  75%       { transform: translateX(8px); }
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50%       { transform: scale(1.05); }
}

@keyframes spin {
  to { transform: rotate(360deg); }
}

/* ── Clases utilitarias ── */
.animate-fade-in  { animation: fadeIn  var(--dur-base)  var(--ease-smooth) forwards; }
.animate-slide-up { animation: slideUp var(--dur-base)  var(--ease-spring) forwards; }
.animate-scale-in { animation: scaleIn var(--dur-fast)  var(--ease-bounce) forwards; }
.animate-shake    { animation: shake   var(--dur-base)  ease; }
.animate-pulse    { animation: pulse   1s               ease infinite; }
.animate-spin     { animation: spin    1s               linear infinite; }

/* Delays escalonados para listas */
.stagger > *:nth-child(1) { animation-delay: 0ms; }
.stagger > *:nth-child(2) { animation-delay: 60ms; }
.stagger > *:nth-child(3) { animation-delay: 120ms; }
.stagger > *:nth-child(4) { animation-delay: 180ms; }
.stagger > *:nth-child(5) { animation-delay: 240ms; }

/* Respeta preferencias de usuario */
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}`
    },
    {
        nombre: "botones.css",
        lang: "css",
        descripcion: "Sistema de botones con variantes",
        detalle: "Botones primary, secondary, outline y ghost.",
        tamano: "1.2 KB",
        codigo: `/* ============================================
   SISTEMA DE BOTONES
============================================ */

/* Base */
.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5em;
  padding: 0.6em 1.25em;
  border-radius: var(--radius-md, 0.5rem);
  border: 2px solid transparent;
  font-family: inherit;
  font-size: 0.9rem;
  font-weight: 600;
  line-height: 1;
  cursor: pointer;
  text-decoration: none;
  white-space: nowrap;
  transition: all 200ms ease;
  user-select: none;
  position: relative;
  overflow: hidden;
}

.btn:focus-visible {
  outline: 2px solid var(--clr-accent, #3b82f6);
  outline-offset: 3px;
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
  pointer-events: none;
}

/* ── Variantes de color ── */
.btn--primary {
  background: var(--clr-accent, #3b82f6);
  color: #fff;
  border-color: var(--clr-accent, #3b82f6);
}
.btn--primary:hover {
  background: #2563eb;
  border-color: #2563eb;
  transform: translateY(-1px);
  box-shadow: 0 4px 12px rgba(59,130,246,0.4);
}

.btn--outline {
  background: transparent;
  color: var(--clr-accent, #3b82f6);
  border-color: var(--clr-accent, #3b82f6);
}
.btn--outline:hover {
  background: var(--clr-accent, #3b82f6);
  color: #fff;
}

.btn--ghost {
  background: transparent;
  color: var(--clr-text, #111);
  border-color: transparent;
}
.btn--ghost:hover {
  background: rgba(0,0,0,0.05);
}

.btn--danger {
  background: #ef4444;
  color: #fff;
  border-color: #ef4444;
}

/* ── Tamaños ── */
.btn--xs  { font-size: 0.72rem; padding: 0.35em 0.75em; }
.btn--sm  { font-size: 0.82rem; padding: 0.45em 0.9em;  }
.btn--lg  { font-size: 1.1rem;  padding: 0.8em 1.8em;   }
.btn--full { width: 100%; }

/* ── Estado de carga ── */
.btn--loading::after {
  content: '';
  width: 1em; height: 1em;
  border: 2px solid rgba(255,255,255,0.4);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin 0.6s linear infinite;
}`
    },
    {
        nombre: "utilidades.css",
        lang: "css",
        descripcion: "Clases utilitarias tipo Tailwind",
        detalle: "Helpers de display, flexbox, spacing y tipografía.",
        tamano: "1.0 KB",
        codigo: `/* ============================================
   UTILIDADES — Clases helper
============================================ */

/* Display */
.block   { display: block; }
.inline  { display: inline; }
.flex    { display: flex; }
.grid    { display: grid; }
.hidden  { display: none; }

/* Flexbox */
.flex-col     { flex-direction: column; }
.flex-wrap    { flex-wrap: wrap; }
.items-center { align-items: center; }
.items-start  { align-items: flex-start; }
.items-end    { align-items: flex-end; }
.justify-center  { justify-content: center; }
.justify-between { justify-content: space-between; }
.justify-end     { justify-content: flex-end; }
.gap-1 { gap: 0.25rem; }
.gap-2 { gap: 0.5rem;  }
.gap-4 { gap: 1rem;    }
.gap-6 { gap: 1.5rem;  }

/* Tipografía */
.text-xs   { font-size: 0.75rem; }
.text-sm   { font-size: 0.875rem; }
.text-base { font-size: 1rem; }
.text-lg   { font-size: 1.125rem; }
.text-xl   { font-size: 1.25rem; }
.text-2xl  { font-size: 1.5rem; }
.font-bold { font-weight: 700; }
.font-medium { font-weight: 500; }
.uppercase { text-transform: uppercase; }
.truncate  { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }

/* Colores de texto */
.text-muted   { color: var(--clr-muted, #6b7280); }
.text-primary { color: var(--clr-accent, #3b82f6); }
.text-success { color: #22c55e; }
.text-danger  { color: #ef4444; }

/* Espaciado */
.m-0  { margin: 0; }
.mt-2 { margin-top: 0.5rem;  }
.mt-4 { margin-top: 1rem;    }
.mb-4 { margin-bottom: 1rem; }
.p-4  { padding: 1rem;       }
.px-4 { padding-inline: 1rem; }
.py-2 { padding-block: 0.5rem; }

/* Bordes y sombras */
.rounded    { border-radius: 0.5rem; }
.rounded-lg { border-radius: 1rem; }
.rounded-full { border-radius: 9999px; }
.shadow     { box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
.border     { border: 1px solid var(--clr-border, #e5e7eb); }`
    },

    // ── 5 JavaScript ────────────────────────────────────────
    {
        nombre: "app.js",
        lang: "javascript",
        descripcion: "Punto de entrada principal",
        detalle: "Inicialización de módulos y event listeners globales.",
        tamano: "1.4 KB",
        codigo: `// ============================================
// app.js — Punto de entrada principal
// ============================================

import { Router }      from './router.js';
import { AuthService } from './services/auth.js';
import { ThemeManager } from './utils/theme.js';

// ── Configuración global ──────────────────
const CONFIG = {
  API_URL:     'https://api.ejemplo.com/v1',
  APP_VERSION: '2.4.1',
  DEBUG:       import.meta.env.DEV,
};

// ── Estado global de la app ──────────────
const state = {
  usuario: null,
  tema: localStorage.getItem('tema') ?? 'dark',
  notificaciones: [],
};

// ── Inicialización ────────────────────────
async function init() {
  console.log(\`🚀 App v\${CONFIG.APP_VERSION} iniciada\`);

  // Aplicar tema guardado
  ThemeManager.apply(state.tema);

  // Comprobar sesión activa
  try {
    state.usuario = await AuthService.verificarSesion();
    if (state.usuario) {
      console.log(\`✅ Sesión activa: \${state.usuario.nombre}\`);
    }
  } catch (err) {
    console.warn('Sin sesión activa:', err.message);
  }

  // Montar el router
  const router = new Router({
    rutas: {
      '/':          () => import('./vistas/Inicio.js'),
      '/blog':      () => import('./vistas/Blog.js'),
      '/contacto':  () => import('./vistas/Contacto.js'),
      '/login':     () => import('./vistas/Login.js'),
      '*':          () => import('./vistas/NotFound.js'),
    },
    contenedor: document.getElementById('app'),
  });

  router.iniciar();

  // Listeners globales
  document.addEventListener('keydown', atajosTeclado);
  window.addEventListener('online',  () => mostrarToast('Conexión restaurada ✅'));
  window.addEventListener('offline', () => mostrarToast('Sin conexión 📡', 'error'));
}

function atajosTeclado(e) {
  if (e.ctrlKey && e.key === 'k') {
    e.preventDefault();
    document.getElementById('buscador')?.focus();
  }
}

function mostrarToast(msg, tipo = 'info') {
  // Implementación de notificaciones...
  console.log(\`[\${tipo.toUpperCase()}] \${msg}\`);
}

// ── Arranque ──────────────────────────────
document.addEventListener('DOMContentLoaded', init);`
    },
    {
        nombre: "api.service.js",
        lang: "javascript",
        descripcion: "Servicio de peticiones HTTP",
        detalle: "Wrapper sobre Fetch con manejo de errores y JWT.",
        tamano: "1.6 KB",
        codigo: `// ============================================
// api.service.js — Cliente HTTP centralizado
// ============================================

const BASE_URL = 'https://api.ejemplo.com/v1';

class ApiService {
  #token = null;
  #timeout = 8000; // ms

  constructor(baseUrl = BASE_URL) {
    this.baseUrl = baseUrl;
  }

  // ── Token de autenticación ──────────────
  setToken(token) { this.#token = token; }
  clearToken()    { this.#token = null;  }

  // ── Cabeceras por defecto ───────────────
  #getHeaders(extra = {}) {
    const headers = {
      'Content-Type': 'application/json',
      'Accept':       'application/json',
      ...extra,
    };
    if (this.#token) {
      headers['Authorization'] = \`Bearer \${this.#token}\`;
    }
    return headers;
  }

  // ── Petición base con timeout ───────────
  async #request(endpoint, options = {}) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), this.#timeout);

    try {
      const res = await fetch(\`\${this.baseUrl}\${endpoint}\`, {
        ...options,
        headers: this.#getHeaders(options.headers),
        signal: controller.signal,
      });

      clearTimeout(timer);

      if (!res.ok) {
        const error = await res.json().catch(() => ({}));
        throw new ApiError(res.status, error.message ?? res.statusText, error);
      }

      return res.status === 204 ? null : await res.json();

    } catch (err) {
      clearTimeout(timer);
      if (err.name === 'AbortError') throw new ApiError(408, 'Tiempo de espera agotado');
      throw err;
    }
  }

  // ── Métodos públicos ────────────────────
  get(endpoint, params = {})         { return this.#request(\`\${endpoint}\${toQuery(params)}\`);  }
  post(endpoint, body)               { return this.#request(endpoint, { method: 'POST',   body: JSON.stringify(body) }); }
  put(endpoint, body)                { return this.#request(endpoint, { method: 'PUT',    body: JSON.stringify(body) }); }
  patch(endpoint, body)              { return this.#request(endpoint, { method: 'PATCH',  body: JSON.stringify(body) }); }
  delete(endpoint)                   { return this.#request(endpoint, { method: 'DELETE' }); }
}

// ── Clase de error personalizada ──────────
class ApiError extends Error {
  constructor(status, message, data = {}) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

// ── Utilidad: objeto → query string ──────
function toQuery(params) {
  const q = new URLSearchParams(params).toString();
  return q ? \`?\${q}\` : '';
}

export const api = new ApiService();
export { ApiError };`
    },
    {
        nombre: "hooks.js",
        lang: "javascript",
        descripcion: "Custom hooks de React",
        detalle: "useDebounce, useLocalStorage y useFetch reutilizables.",
        tamano: "1.5 KB",
        codigo: `// ============================================
// hooks.js — Custom Hooks para React
// ============================================
import { useState, useEffect, useRef, useCallback } from 'react';

// ── useDebounce ───────────────────────────
// Retrasa la actualización de un valor
export function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const id = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(id);
  }, [value, delay]);

  return debounced;
}

// ── useLocalStorage ───────────────────────
// Estado sincronizado con localStorage
export function useLocalStorage(clave, inicial) {
  const [valor, setValor] = useState(() => {
    try {
      const item = localStorage.getItem(clave);
      return item ? JSON.parse(item) : inicial;
    } catch {
      return inicial;
    }
  });

  const guardar = useCallback((nuevoValor) => {
    try {
      const v = typeof nuevoValor === 'function' ? nuevoValor(valor) : nuevoValor;
      setValor(v);
      localStorage.setItem(clave, JSON.stringify(v));
    } catch (err) {
      console.error('useLocalStorage error:', err);
    }
  }, [clave, valor]);

  return [valor, guardar];
}

// ── useFetch ──────────────────────────────
// Petición GET con estados de carga y error
export function useFetch(url, opciones = {}) {
  const [datos,    setDatos]    = useState(null);
  const [cargando, setCargando] = useState(true);
  const [error,    setError]    = useState(null);
  const abortRef = useRef(null);

  useEffect(() => {
    if (!url) return;

    abortRef.current = new AbortController();
    setCargando(true);
    setError(null);

    fetch(url, { ...opciones, signal: abortRef.current.signal })
      .then(r => { if (!r.ok) throw new Error(\`HTTP \${r.status}\`); return r.json(); })
      .then(data => { setDatos(data); setCargando(false); })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setError(err.message);
          setCargando(false);
        }
      });

    return () => abortRef.current?.abort();
  }, [url]);

  return { datos, cargando, error };
}

// ── useClickOutside ───────────────────────
// Cierra modales al hacer clic fuera
export function useClickOutside(callback) {
  const ref = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (ref.current && !ref.current.contains(e.target)) callback();
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [callback]);

  return ref;
}`
    },
    {
        nombre: "validaciones.js",
        lang: "javascript",
        descripcion: "Librería de validaciones de formularios",
        detalle: "Funciones puras para validar campos comunes.",
        tamano: "1.3 KB",
        codigo: `// ============================================
// validaciones.js — Funciones de validación
// ============================================

const REGEX = {
  EMAIL:   /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  TELEFONO:/^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]{8,14}$/,
  URL:     /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/,
  CP_ES:   /^(0[1-9]|[1-4]\d|5[0-2])\d{3}$/,
  NIF_ES:  /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i,
};

// ── Validadores individuales ──────────────
export const v = {
  requerido: (v) =>
    v !== null && v !== undefined && String(v).trim() !== ''
      ? null : 'Este campo es obligatorio.',

  minLen: (min) => (val) =>
    String(val).length >= min ? null : \`Mínimo \${min} caracteres.\`,

  maxLen: (max) => (val) =>
    String(val).length <= max ? null : \`Máximo \${max} caracteres.\`,

  email: (val) =>
    REGEX.EMAIL.test(val) ? null : 'Introduce un email válido.',

  telefono: (val) =>
    REGEX.TELEFONO.test(val) ? null : 'Teléfono no válido.',

  url: (val) =>
    REGEX.URL.test(val) ? null : 'URL no válida (incluye https://).',

  cpEspana: (val) =>
    REGEX.CP_ES.test(val) ? null : 'Código postal español no válido.',

  nifEspana: (val) =>
    REGEX.NIF_ES.test(val) ? null : 'NIF español no válido.',

  numero: (val) =>
    !isNaN(Number(val)) && val !== '' ? null : 'Debe ser un número.',

  rango: (min, max) => (val) =>
    Number(val) >= min && Number(val) <= max
      ? null : \`Debe estar entre \${min} y \${max}.\`,

  iguales: (otro) => (val, todos) =>
    val === todos[otro] ? null : 'Los valores no coinciden.',
};

// ── Validar un formulario completo ────────
export function validarFormulario(campos, reglas) {
  const errores = {};

  for (const [campo, validadores] of Object.entries(reglas)) {
    for (const validador of validadores) {
      const error = validador(campos[campo], campos);
      if (error) { errores[campo] = error; break; }
    }
  }

  return { valido: Object.keys(errores).length === 0, errores };
}

// ── Ejemplo de uso ────────────────────────
/*
const { valido, errores } = validarFormulario(
  { nombre: '', email: 'mal@', edad: 15 },
  {
    nombre: [v.requerido, v.minLen(2)],
    email:  [v.requerido, v.email],
    edad:   [v.requerido, v.numero, v.rango(18, 99)],
  }
);
*/`
    },
    {
        nombre: "store.js",
        lang: "javascript",
        descripcion: "Gestor de estado global (mini Redux)",
        detalle: "Store reactivo con suscriptores y acciones tipadas.",
        tamano: "1.2 KB",
        codigo: `// ============================================
// store.js — Gestor de estado reactivo
// ============================================

class Store {
  #state;
  #reducer;
  #suscriptores = new Set();
  #historial    = [];
  #maxHistorial = 20;

  constructor(reducer, estadoInicial) {
    this.#reducer = reducer;
    this.#state   = Object.freeze(estadoInicial);
  }

  // ── Leer estado ──────────────────────────
  getState() { return this.#state; }

  // ── Despachar acción ─────────────────────
  dispatch(accion) {
    if (!accion?.type) throw new Error('La acción debe tener "type"');

    const estadoAnterior = this.#state;
    this.#state = Object.freeze(this.#reducer(estadoAnterior, accion));

    // Guardar en historial
    if (this.#historial.length >= this.#maxHistorial) this.#historial.shift();
    this.#historial.push({ accion, estado: this.#state });

    // Notificar suscriptores
    this.#suscriptores.forEach(fn => fn(this.#state, estadoAnterior));
  }

  // ── Suscribirse a cambios ─────────────────
  subscribe(fn) {
    this.#suscriptores.add(fn);
    return () => this.#suscriptores.delete(fn); // devuelve unsuscribe
  }

  // ── Historial para depuración ─────────────
  getHistorial() { return [...this.#historial]; }
}

// ── Ejemplo de uso ────────────────────────
const TIPOS = { INCREMENTAR: 'INCREMENTAR', RESET: 'RESET', SET_USUARIO: 'SET_USUARIO' };

function reducer(estado, accion) {
  switch (accion.type) {
    case TIPOS.INCREMENTAR:
      return { ...estado, contador: estado.contador + (accion.payload ?? 1) };
    case TIPOS.RESET:
      return { ...estado, contador: 0 };
    case TIPOS.SET_USUARIO:
      return { ...estado, usuario: accion.payload };
    default:
      return estado;
  }
}

const store = new Store(reducer, { contador: 0, usuario: null });

// Suscripción
const unsub = store.subscribe((nuevo, anterior) => {
  console.log('Estado actualizado:', nuevo);
});

// Despachar acciones
store.dispatch({ type: TIPOS.INCREMENTAR });
store.dispatch({ type: TIPOS.SET_USUARIO, payload: { nombre: 'Ana', rol: 'admin' } });

export { store, TIPOS };`
    },
];

/* ============================================================
   EXTENSIONES Y EMOJIS POR TIPO
============================================================ */
const INFO_LANG = {
    html:       { emoji: '🟠', ext: '.html', chipClass: 'chip-html' },
    css:        { emoji: '🔵', ext: '.css',  chipClass: 'chip-css' },
    javascript: { emoji: '🟡', ext: '.js',   chipClass: 'chip-js' },
};

let archivoActual = null;

/* ============================================================
   GENERAR LISTA DE ARCHIVOS EN EL PANEL
============================================================ */
function generarListaArchivos() {
    const lista = document.getElementById('lista-archivos');
    lista.innerHTML = '';

    archivos.forEach((archivo, idx) => {
        const info  = INFO_LANG[archivo.lang] ?? { emoji: '📄', ext: '', chipClass: '' };
        const lineas = archivo.codigo.split('\n').length;

        const item = document.createElement('div');
        item.className = 'item-archivo';
        item.dataset.idx = idx;
        item.innerHTML = `
            <span class="icono-archivo">${info.emoji}</span>
            <div class="datos-archivo">
                <span class="nombre-archivo">${archivo.nombre}</span>
                <span class="ext-archivo">${archivo.lang.toUpperCase()} · ${lineas} líneas</span>
            </div>
            <span class="tamano-archivo">${archivo.tamano}</span>
        `;
        item.addEventListener('click', () => abrirArchivo(idx));
        lista.appendChild(item);
    });
}

/* ============================================================
   ABRIR ARCHIVO — renderizar en el visor
============================================================ */
function abrirArchivo(idx) {
    const archivo = archivos[idx];
    if (!archivo) return;

    archivoActual = archivo;

    // Marcar activo en la lista
    document.querySelectorAll('.item-archivo').forEach(el => el.classList.remove('activo'));
    document.querySelector(`.item-archivo[data-idx="${idx}"]`).classList.add('activo');

    // Breadcrumb
    document.getElementById('bc-archivo').textContent = archivo.nombre;

    // Meta
    const info   = INFO_LANG[archivo.lang] ?? { chipClass: '' };
    const lineas = archivo.codigo.split('\n').length;
    const peso   = new Blob([archivo.codigo]).size;

    document.getElementById('chip-lang').textContent  = archivo.lang.toUpperCase();
    document.getElementById('chip-lang').className    = `chip-lang ${info.chipClass}`;
    document.getElementById('meta-nombre-archivo').textContent = archivo.nombre;
    document.getElementById('meta-lineas').textContent = lineas;
    document.getElementById('meta-peso').textContent   = formatearBytes(peso);
    document.getElementById('desc-titulo').textContent = archivo.descripcion;
    document.getElementById('desc-texto').textContent  = archivo.detalle;

    // Bloque de código con highlight.js
    const bloque = document.getElementById('bloque-codigo');
    bloque.removeAttribute('data-highlighted');
    bloque.className = `language-${archivo.lang === 'javascript' ? 'javascript' : archivo.lang}`;
    bloque.textContent = archivo.codigo;
    hljs.highlightElement(bloque);

    // Mostrar/ocultar paneles
    document.getElementById('pantalla-bienvenida').style.display = 'none';
    const visor = document.getElementById('visor-codigo');
    visor.classList.remove('visible');
    void visor.offsetWidth; // reflow para re-trigger animación
    visor.classList.add('visible');

    // Info panel derecho
    document.getElementById('info-activo').style.display = 'block';
    document.getElementById('info-nombre').textContent   = archivo.nombre;
    document.getElementById('info-lang').className       = `val-stat ${info.chipClass.replace('chip-', 'val-')}`;
    document.getElementById('info-lang').textContent     = archivo.lang.toUpperCase();
    document.getElementById('info-lineas').textContent   = lineas;
}

/* ============================================================
   TOGGLE CARPETA
============================================================ */
function toggleCarpeta() {
    document.getElementById('carpeta-principal').classList.toggle('abierta');
}



/* ============================================================
   UTILIDADES
============================================================ */
function formatearBytes(bytes) {
    if (bytes < 1024) return `${bytes} B`;
    return `${(bytes / 1024).toFixed(1)} KB`;
}

/* ============================================================
   ARRANQUE
============================================================ */
generarListaArchivos();
