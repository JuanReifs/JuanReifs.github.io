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
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevPulse - El centro del desarrollo</title>
    <link rel="stylesheet" href="style.css">
</head>

<body>
    <div class="contenedor-app">
        <!-- Sidebar: Reddit Style Navigation -->
        <aside class="barra-lateral panel-cristal">
            <h1>DevPulse</h1>
            <nav>
                <a href="#" class="item-nav activo">
                    <i>🏠</i> Inicio
                </a>
                <a href="OpenSource/OpenSource.html" class="item-nav">
                    <i>🔥</i> Open source code
                </a>
                <a href="ads.html" class="item-nav">
                    <i>📢</i> Anuncios (Monetización)
                </a>
                <a href="dam-impostor-detector/detector.html" class="item-nav">
                    <i>🎮</i> Desafío DevPulse (Quiz)
                </a>
            </nav>

       
        </aside>
<!--Inicio de comentarios-->

         <main class="main-layout">

    <section class="composer-section">
      <div class="composer-card">
        
        <div class="composer-header">
          <div class="composer-prompt">¿Qué tienes en mente?</div>
          <select id="languageSelect" class="language-select" title="Elige el lenguaje de tu código">
            <option value="markup">Texto / HTML</option>
            <option value="javascript">JavaScript</option>
            <option value="css">CSS</option>
            <option value="python">Python</option>
            <option value="java">Java</option>
            <option value="cpp">C++</option>
            <option value="sql">SQL</option>
          </select>
        </div>

      <textarea
  id="new-comment-text"
  class="composer-textarea"
  placeholder="Escribe tu mensaje o pega tu código aquí..."
  rows="4"
></textarea>

        <div class="preview-wrapper">
          <span class="preview-label">Vista Previa</span>
          <pre id="preview" class="code-preview"><code></code></pre>
        </div>

        <div class="composer-footer">
          <span class="char-counter" id="char-counter">0 / 500</span>
          <button class="btn-publish" id="publish-btn">Publicar</button>
        </div>
      </div>
    </section>

    <section class="feed-section">
      <div class="feed-header">
        <h2 class="feed-title">Conversaciones</h2>
        <div class="sort-controls">
          <button class="sort-btn active" data-sort="newest">Recientes</button>
          <button class="sort-btn" data-sort="oldest">Antiguos</button>
          <button class="sort-btn" data-sort="popular">Populares</button>
        </div>
      </div>

      <div id="comments-feed" class="comments-feed">
        </div>

      <div id="empty-state" class="empty-state hidden">
        <div class="empty-icon">◌</div>
        <p>La plaza está en silencio.<br>Sé el primero en hablar.</p>
      </div>
    </section>

  </main>

  <div id="toast" class="toast" aria-live="polite"></div>

  <template id="tpl-comment">
    <article class="comment-card" data-id="">
      <div class="comment-meta">
        <div class="avatar"></div>
        <div class="meta-info">
          <span class="meta-author"></span>
          <span class="meta-time"></span>
        </div>
        <button class="btn-delete" title="Eliminar">✕</button>
      </div>
      <div class="comment-body"></div>
      <div class="comment-actions">
        <button class="btn-like" title="Me gusta">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
          </svg>
          <span class="like-count">0</span>
        </button>
        <button class="btn-reply">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="9 14 4 9 9 4"/>
            <path d="M20 20v-7a4 4 0 0 0-4-4H4"/>
          </svg>
          Responder
        </button>
        <span class="reply-count"></span>
      </div>

      <div class="reply-composer hidden">
        <textarea class="reply-textarea" placeholder="Escribe tu respuesta..." rows="2"></textarea>
        <div class="reply-composer-footer">
          <button class="btn-cancel-reply">Cancelar</button>
          <button class="btn-submit-reply">Responder</button>
        </div>
      </div>

      <div class="replies-container"></div>
    </article>
  </template>

  <template id="tpl-reply">
    <div class="reply-card" data-id="">
      <div class="reply-thread-line"></div>
      <div class="reply-content">
        <div class="comment-meta">
          <div class="avatar avatar--sm"></div>
          <div class="meta-info">
            <span class="meta-author"></span>
            <span class="meta-time"></span>
          </div>
          <button class="btn-delete" title="Eliminar">✕</button>
        </div>
        <div class="comment-body"></div>
        <div class="comment-actions">
          <button class="btn-like" title="Me gusta">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
            </svg>
            <span class="like-count">0</span>
          </button>
        </div>
      </div>
    </div>
  </template>
        <!--Final COmentarios-->

        <!-- Widgets/Stats: StackOverflow Style -->
        <aside class="panel-widgets panel-cristal">
            <div class="tarjeta">
                <p class="titulo-seccion">Top Solucionadores</p>
                <div style="display: flex; flex-direction: column; gap: 1rem; margin-top: 1rem;">
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span>Ivan Rodriguez</span>
                        <span style="color: var(--color-accent); font-weight: 700;">2.4k points</span>
                    </div>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                        <span>Juan Reis</span>
                        <span style="color: var(--color-accent); font-weight: 700;">1.8k points</span>
                    </div>
                </div>
            </div>

            <div class="tarjeta">
                <p class="titulo-seccion">Tendencias para ti</p>
                <div style="margin-top: 1rem;">
                    <p style="font-weight: 700;">#VanillaJS</p>
                    <p style="color: var(--color-text-dim); font-size: 0.8rem;">5.2k posts</p>
                </div>
                <div style="margin-top: 1rem;">
                    <p style="font-weight: 700;">#CyberpunkDesign</p>
                    <p style="color: var(--color-text-dim); font-size: 0.8rem;">1.1k posts</p>
                </div>
            </div>
        </aside>
    </div>

    <script src="app.js"></script>
    <script src="syntaxis.js"></script>

</body>

</html>`
    },
    {
        nombre: "ads.html",
        lang: "html",
        descripcion: "Componente tarjeta reutilizable",
        detalle: "Tarjeta con imagen, título, descripción y CTA.",
        tamano: "0.9 KB",
        codigo: `<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DevPulse - Marketplace de Innovación</title>
    <link rel="stylesheet" href="ads-style.css">
</head>

<body>
    <a href="index.html" class="boton-volver">← Volver a DevPulse</a>
    <header>
        <h1 style="font-family: 'Outfit', sans-serif;"><span
                style="background: linear-gradient(to right, #60a5fa, #a855f7); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;">Anuncios</span>
        </h1>
        <p style="font-size: 1.2rem; opacity: 0.9;">Proyectos destacados de la clase</p>
    </header>

    <div class="grid-promociones">
        <!-- Ad 1: Escape Luismi -->
        <div class="tarjeta-anuncio anuncio-horror">
            <img src="imagenes/escapedeluismi.jpeg" class="imagen-anuncio" alt="Escape Luismi">
            <div class="pulso"
                style="position: absolute; top: 50%; left: 50%; width: 150px; height: 150px; background: rgba(153, 27, 27, 0.2); border-radius: 50%; transform: translate(-50%, -50%); pointer-events: none;">
            </div>
            <div class="contenido-anuncio">
                <p style="color: var(--color-horror); font-weight: 800; margin-bottom: 0.5rem;">HORROR PSICOLÓGICO</p>
                <h2 style="font-size: 2rem; margin-bottom: 1rem;">ESCAPE LUISMI: Despertar</h2>
                <p style="color: #94a3b8; margin-bottom: 1.5rem;">6 niveles de pura pesadilla. ¿Sobrevivirás al Altar
                    Final? Diseñado por Bilal, Adrian, Youssef y Victor.</p>
                <a href="#" class="boton-accion" style="background: var(--color-horror); color: white;">Entrar bajo tu
                    riesgo</a>
            </div>
        </div>

        <!-- Ad 2: Cyber Olympics -->
        <div class="tarjeta-anuncio anuncio-cyber">
            <img src="imagenes/cyberolimpics.jpeg" class="imagen-anuncio" alt="Cyber Olympics">
            <div class="borde-neon"></div>
            <div class="contenido-anuncio">
                <p style="color: var(--color-cyber); font-weight: 800; margin-bottom: 0.5rem;">DEPORTE DIGITAL</p>
                <h2 style="font-size: 2rem; margin-bottom: 1rem;">Cyber-Olympics 2.0</h2>
                <p style="color: #94a3b8; margin-bottom: 1.5rem;">Domina el código, domina el juego. Atletismo, Ciclismo
                    y Esgrima Neón. Por Iván M, Pablo y Izan.</p>
                <a href="#" class="boton-accion" style="background: var(--color-cyber); color: white;">Mejorar Sistema</a>
            </div>
        </div>

        <!-- Ad 3: Casino Royale -->
        <div class="tarjeta-anuncio anuncio-lujo">
            <img src="imagenes/casinoroyale.jpeg" class="imagen-anuncio" alt="Casino Royale">
            <div class="contenido-anuncio" style="text-align: center;">
                <p style="color: var(--color-gold); font-weight: 800; margin-bottom: 0.5rem;">EXCLUSIVIDAD TOTAL</p>
                <h2 style="font-size: 2rem; margin-bottom: 1rem;">CASINO ROYALE</h2>
                <p style="color: #94a3b8; margin-bottom: 1.5rem;">La ruleta más sofisticada jamás creada. Elegancia pura
                    por Vitalii, Ruben, Stefan y Ricardo.</p>
                <a href="#" class="boton-accion"
                    style="background: var(--color-gold); color: black; width: 100%;">Solicitar Invitación</a>
            </div>
        </div>

        <!-- Ad 4: Error 404 -->
        <div class="tarjeta-anuncio anuncio-glitch">
            <img src="imagenes/error404.jpeg" class="imagen-anuncio" alt="Error 404">
            <div class="contenido-anuncio">
                <p style="color: var(--color-glitch); font-weight: 800; margin-bottom: 0.5rem;">REBELIÓN IA</p>
                <h2 class="texto-glitch" style="font-size: 2rem; margin-bottom: 1rem;">ERROR 404: HUMANITY</h2>
                <p style="color: #94a3b8; margin-bottom: 1.5rem;">¿Serás el último error del sistema? Acompaña a Zack en
                    la misión hacia XTER. Salva a la raza humana.</p>
                <a href="#" class="boton-accion" style="background: var(--color-glitch); color: white;">Reiniciar
                    Mundo</a>
            </div>
        </div>
    </div>

    <footer style="text-align: center; padding: 1rem; opacity: 0.5; font-size: 0.8rem;">
        <p>&copy; 2026 DevPulse Advertising Network.</p>
    </footer>

    <script>
        // Nuclear option to prevent any scroll with mouse wheel or touch
        const preventScroll = (e) => {
            if (e.ctrlKey) return; // Allow zooming
            e.preventDefault();
        };
        
        window.addEventListener('wheel', preventScroll, { passive: false });
        window.addEventListener('touchmove', preventScroll, { passive: false });
        
        // Ensure the layout remains static even if the user finds a way
        document.documentElement.style.overflow = 'hidden';
        document.body.style.overflow = 'hidden';
    </script>
</body>

</html>`
    },
    {
        nombre: "OpenSource.html",
        lang: "html",
        descripcion: "Formulario de contacto accesible",
        detalle: "Form con validación HTML5, labels y ARIA.",
        tamano: "1.4 KB",
        codigo: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>CodeVault · Explorador Open Source</title>

    <!-- Highlight.js — tema de colores -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/atom-one-dark.min.css">

    <!-- Estilos propios -->
    <link rel="stylesheet" href="style_OpenSource.css">
</head>
<body>

<div class="contenedor-app">

    <!-- ══════════════════════════════════════
         BARRA LATERAL IZQUIERDA
    ══════════════════════════════════════ -->
    <aside class="barra-lateral">
        <div class="logo-area">
            <h1>CodeVault</h1>
            <p>Open Source Explorer</p>
        </div>

        <span class="titulo-seccion">Navegación</span>

        <button class="item-nav activo">
            <span class="icono-nav">📂</span> Explorador
        </button>
        

       <span class="titulo-seccion" style="margin-top:auto;">Repositorio</span>
<a href="https://github.com/christophercolmenaresp-hub/tarea_luismi" target="_blank" rel="noopener noreferrer" style="text-decoration: none;">
    <button class="item-nav">
        <span class="icono-nav">🌐</span> GitHub
    </button>
</a>
        
    </aside>

    <!-- ══════════════════════════════════════
         FEED PRINCIPAL — Visor de código
    ══════════════════════════════════════ -->
    <main class="feed-principal">

        <!-- Topbar fija -->
        <div class="topbar-feed">
            <div class="breadcrumb" id="breadcrumb">
                <span>📁 codevault</span>
                <span class="sep">/</span>
                <span>src</span>
                <span class="sep">/</span>
                <span class="activo-bc" id="bc-archivo">selecciona un archivo</span>
                <span class="cursor-terminal"></span>
            </div>
          
        </div>

        <!-- Pantalla de bienvenida -->
        <div class="pantalla-bienvenida" id="pantalla-bienvenida">
            <div class="icono-bienvenida">💾</div>
            <h3>Selecciona un archivo</h3>
            <p>Despliega la carpeta del panel derecho y haz clic en cualquier archivo para ver su código con resaltado de sintaxis automático.</p>
        </div>

        <!-- Visor de código (oculto hasta selección) -->
        <div class="visor-codigo" id="visor-codigo">

            <div class="meta-archivo">
                <span class="chip-lang" id="chip-lang">HTML</span>
                <span style="font-family:var(--font-main); font-size:0.85rem; color:var(--color-text-dim);" id="meta-nombre-archivo">—</span>
                <div class="meta-info">
                    <span>📄 <span id="meta-lineas">—</span> líneas</span>
                    <span>⚖️ <span id="meta-peso">—</span></span>
                    <span>🕓 hace 2 días</span>
                </div>
            </div>

            <div class="descripcion-archivo">
                <strong id="desc-titulo">—</strong>
                <span id="desc-texto">—</span>
            </div>

            <div class="contenedor-codigo">
                <pre><code id="bloque-codigo" class="language-html"></code></pre>
            </div>

        </div>
    </main>

    <!-- ══════════════════════════════════════
         PANEL DERECHO — Explorador de carpetas
    ══════════════════════════════════════ -->
    <aside class="panel-explorador">

        <span class="explorador-titulo">Explorador de archivos</span>

        <!-- ── Carpeta desplegable ── -->
        <div class="carpeta abierta" id="carpeta-principal">
            <div class="cabecera-carpeta" onclick="toggleCarpeta()">
                <span class="icono-carpeta">📁</span>
                <span class="nombre-carpeta">src / componentes</span>
                <span class="flecha-carpeta">▶</span>
            </div>
            <div class="contenido-carpeta" id="lista-archivos">
                <!-- Los items se generan dinámicamente desde app.js -->
            </div>
        </div>

        <!-- Estadísticas -->
        <div class="tarjeta-stats">
            <h4>Distribución de archivos</h4>
            <div class="fila-stat">
                <span class="etiq-stat">🟠 HTML</span>
                <span class="val-stat val-html">5 archivos</span>
            </div>
            <div class="fila-stat">
                <span class="etiq-stat">🔵 CSS</span>
                <span class="val-stat val-css">5 archivos</span>
            </div>
            <div class="fila-stat">
                <span class="etiq-stat">🟡 JavaScript</span>
                <span class="val-stat val-js">5 archivos</span>
            </div>
        </div>

        <!-- Mini info del archivo activo -->
        <div class="tarjeta-stats" id="info-activo" style="display:none;">
            <h4>Archivo activo</h4>
            <div class="fila-stat">
                <span class="etiq-stat">Nombre</span>
                <span class="val-stat" id="info-nombre" style="color:var(--color-text-main);font-size:0.75rem;"></span>
            </div>
            <div class="fila-stat">
                <span class="etiq-stat">Lenguaje</span>
                <span class="val-stat" id="info-lang"></span>
            </div>
            <div class="fila-stat">
                <span class="etiq-stat">Líneas</span>
                <span class="val-stat" id="info-lineas" style="color:var(--color-text-main);"></span>
            </div>
        </div>

    </aside>
</div>

<!-- Highlight.js — motor de resaltado (antes de app.js) -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js"></script>

<!-- Lógica de la aplicación -->
<script src="app_OpenSource.js"></script>

</body>
</html>
`
    },
    {
        nombre: "detector.html",
        lang: "html",
        descripcion: "Barra de navegación responsiva",
        detalle: "Nav con hamburger menu para móvil y dropdown.",
        tamano: "1.1 KB",
        codigo: `<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>DAM IMPOSTOR DETECTOR - REPARTO FINAL</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&family=Rajdhani:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
</head>
<body class="min-h-screen flex items-center justify-center p-4">
    <div id="capa-interferencia" class="capa-glitch"></div>
    <div id="contenedor-principal" class="w-full max-w-4xl relative z-10">
        <!-- SELECCIÓN -->
        <div id="pantalla-seleccion" class="entrada-suave space-y-12">
            <div class="text-center space-y-4">
                <h1 class="letra-espacial text-6xl font-bold tracking-tighter brillo-cian italic">DAM IMPOSTOR DETECTOR</h1>
                <p class="text-xl uppercase tracking-[0.3em] text-cyan-500 opacity-80">PROTOCOLO SKYNET: PURGA DE IMPOSTORES SINTÉTICOS</p>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                <!-- CASINO ROYALE -->
                <div onclick="empezarMambo('CASINO ROYALE', 'oro')" class="panel-cristal rounded-2xl cursor-pointer borde-neon hover:text-[#ffd700] hover:border-[#ffd700] group overflow-hidden">
                    <img src="img/casinoroyale.jpeg" alt="Casino" class="w-full h-48 object-cover opacity-50 group-hover:opacity-100 transition-opacity">
                    <div class="p-6">
                        <h2 class="letra-espacial text-3xl font-bold mb-2 group-hover:brillo-oro">CASINO ROYALE</h2>
                        <p class="opacity-60 text-lg">Vitalii, Ruben, Stefan, Ricardo</p>
                    </div>
                </div>
                <!-- CYBER-OLYMPICS -->
                <div onclick="empezarMambo('CYBER-OLYMPICS', 'cian')" class="panel-cristal rounded-2xl cursor-pointer borde-neon hover:text-[#00f2ff] hover:border-[#00f2ff] group overflow-hidden">
                    <img src="img/cyberolimpics.jpeg" alt="Olympics" class="w-full h-48 object-cover opacity-50 group-hover:opacity-100 transition-opacity">
                    <div class="p-6">
                        <h2 class="letra-espacial text-3xl font-bold mb-2 group-hover:brillo-cian">CYBER-OLYMPICS</h2>
                        <p class="opacity-60 text-lg">Ivan Martinez, Pablo Rodriguez, Izan Garcia</p>
                    </div>
                </div>
                <!-- ESCAPE LUISMI -->
                <div onclick="empezarMambo('ESCAPE LUISMI', 'sangre')" class="panel-cristal rounded-2xl cursor-pointer borde-neon hover:text-[#ff0033] hover:border-[#ff0033] group overflow-hidden">
                    <img src="img/escapedeluismi.jpeg" alt="Escape" class="w-full h-48 object-cover opacity-50 group-hover:opacity-100 transition-opacity">
                    <div class="p-6">
                        <h2 class="letra-espacial text-3xl font-bold mb-2 group-hover:brillo-sangre">ESCAPE LUISMI</h2>
                        <p class="opacity-60 text-lg">Bilal, Adrian, Youssef, Victor</p>
                    </div>
                </div>
                <!-- ERROR 404: HUMANITY -->
                <div onclick="empezarMambo('ERROR 404: HUMANITY', 'purpura')" class="panel-cristal rounded-2xl cursor-pointer borde-neon hover:text-[#bc13fe] hover:border-[#bc13fe] group overflow-hidden">
                    <img src="img/error404.jpeg" alt="Humanity" class="w-full h-48 object-cover opacity-50 group-hover:opacity-100 transition-opacity">
                    <div class="p-6">
                        <h2 class="letra-espacial text-3xl font-bold mb-2 group-hover:brillo-purpura">ERROR 404: HUMANITY</h2>
                        <p class="opacity-60 text-lg">Francisco, Cristian, Pablo</p>
                    </div>
                </div>
            </div>
        </div>
        <!-- QUIZ -->
        <div id="pantalla-quiz" class="hidden entrada-suave space-y-8">
            <div class="flex justify-between items-center">
                <button onclick="volverAlInicio()" class="text-xs letra-espacial border border-red-500/50 px-3 py-1 rounded hover:bg-red-500 hover:text-white transition-all">✕ ABORTAR MISIÓN</button>
                <div id="etiqueta-grupo" class="px-4 py-1 rounded-full border border-current text-sm letra-espacial uppercase tracking-widest"></div>
                <div class="text-right">
                    <p id="texto-progreso" class="text-2xl font-bold letra-espacial">1 / 10</p>
                </div>
            </div>
            <div class="space-y-3">
                <div class="flex justify-between letra-espacial text-sm">
                    <span class="text-red-500 brillo-sangre">SANGRE EN EL NÚCLEO (IA)</span>
                    <span id="valor-sospecha" class="text-red-500">0%</span>
                </div>
                <div class="h-6 w-full bg-black/50 border border-red-900/50 rounded-full p-1 overflow-hidden">
                    <div id="barra-sospecha" class="barra-sospecha rounded-full" style="width: 0%"></div>
                </div>
            </div>
            <div class="panel-cristal rounded-3xl p-10 relative overflow-hidden">
                <div id="visor-tiempo" class="absolute top-0 right-0 p-6 letra-espacial text-4xl font-bold text-cyan-400">15s</div>
                <h3 id="texto-pregunta" class="text-3xl font-semibold mb-12 max-w-2xl leading-tight"></h3>
                <div id="rejilla-opciones" class="grid grid-cols-1 md:grid-cols-2 gap-4"></div>
            </div>
        </div>
        <!-- RESULTADOS -->
        <div id="pantalla-resultados" class="hidden text-center entrada-suave space-y-8 py-12">
            <div id="contenedor-matrix" class="hidden mb-8">
                <img src="img/sospecha_matrix.png" alt="Matrix" class="mx-auto rounded-3xl border-4 border-green-600 shadow-[0_0_30px_#39ff14] max-w-sm">
            </div>
            <div id="contenedor-robot" class="hidden mb-8">
                <img src="img/sospecha_robot.png" alt="Yo Robot" class="mx-auto rounded-3xl border-4 border-cyan-600 shadow-[0_0_30px_#00f2ff] max-w-sm">
            </div>
            <div id="contenedor-derrota" class="hidden mb-8">
                <img src="img/derrota_skynet.png" alt="Skynet" class="mx-auto rounded-3xl border-4 border-red-600 shadow-[0_0_30px_#ff0033] max-w-sm animate-pulse">
            </div>
            <div id="icono-final" class="text-9xl mb-4"></div>
            <h1 id="titulo-final" class="letra-espacial text-5xl font-bold"></h1>
            <div id="resumen-macarra" class="space-y-6">
                <p id="mensaje-ia" class="text-3xl font-bold text-red-500"></p>
                <p id="mensaje-merito" class="text-2xl opacity-70 italic"></p>
            </div>
            <div class="panel-cristal p-8 rounded-2xl inline-block mt-8">
                <p id="sospecha-final" class="text-7xl font-bold text-red-500"></p>
            </div>
            <br>
            <button onclick="volverAlInicio()" class="letra-espacial border-2 border-cyan-500 px-12 py-4 rounded-full text-cyan-400 hover:bg-cyan-500 hover:text-black transition-all text-xl uppercase tracking-widest mt-8">REINICIAR MISION</button>
    </div>
    <script src="script.js" defer></script>
</body>
</html>
`
    },
    {
        nombre: "style.css",
        lang: "css",
        descripcion: "Tabla de datos semántica",
        detalle: "Tabla accesible con caption, scope y ordenación.",
        tamano: "1.3 KB",
        codigo: `:root {
    /* Color Palette - Premium Dark Mode */
    --color-bg: #030712;
    --color-surface: #111827;
    --color-surface-soft: #1f2937;
    --color-primary: #3b82f6; /* Twitter Blue */
    --color-primary-glow: rgba(59, 130, 246, 0.5);
    --color-secondary: #ff4500; /* Reddit Orange */
    --color-accent: #f48024; /* StackOverflow Orange */
    --color-text-main: #f9fafb;
    --color-text-dim: #9ca3af;
    --color-glass: rgba(255, 255, 255, 0.03);
    --color-border: rgba(255, 255, 255, 0.1);
    
    /* Typography */
    --font-main: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background-color: var(--color-bg);
    color: var(--color-text-main);
    font-family: var(--font-main);
    line-height: 1.6;
    overflow-x: hidden;
}

/* Layout Grid */
.contenedor-app {
    display: grid;
    grid-template-columns: 280px 1fr 350px;
    height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
}

/* Glassmorphism Components */
.panel-cristal {
    background: var(--color-glass);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-right: 1px solid var(--color-border);
    padding: 1.5rem;
}

.barra-lateral {
    height: 100vh;
    position: sticky;
    top: 0;
}

.feed-principal {
    border-right: 1px solid var(--color-border);
    overflow-y: auto;
    padding: 0;
}

.panel-widgets {
    height: 100vh;
    position: sticky;
    top: 0;
    border-right: none;
}

/* Header & Typography */
h1 {
    font-size: 1.5rem;
    font-weight: 800;
    background: linear-gradient(135deg, #fff, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
}

.titulo-seccion {
    color: var(--color-text-dim);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    font-weight: 700;
    margin-bottom: 1rem;
}

/* Post Styling - Feed */
.publicacion {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--color-border);
    transition: background 0.2s;
    cursor: pointer;
}

.publicacion:hover {
    background: rgba(255, 255, 255, 0.02);
}

.cabecera-publicacion {
    display: flex;
    gap: 0.75rem;
    margin-bottom: 0.5rem;
}

.avatar {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: var(--color-surface-soft);
}

.autor-publicacion {
    font-weight: 700;
}

.arroba-publicacion {
    color: var(--color-text-dim);
    font-size: 0.9rem;
}

.contenido-publicacion {
    font-size: 1rem;
}

.acciones-publicacion {
    display: flex;
    justify-content: space-between;
    margin-top: 1rem;
    color: var(--color-text-dim);
    max-width: 300px;
}

/* Community Tags */
.item-nav {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 0.75rem 1rem;
    border-radius: 0.75rem;
    text-decoration: none;
    color: var(--color-text-main);
    transition: all 0.2s;
    margin-bottom: 0.25rem;
}

.item-nav:hover {
    background: rgba(59, 130, 246, 0.1);
    color: var(--color-primary);
}

.item-nav.activo {
    background: rgba(59, 130, 246, 0.1);
    color: var(--color-primary);
    font-weight: 600;
}

/* Utils/Widgets */
.tarjeta {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 1rem;
    padding: 1.25rem;
    margin-bottom: 1.5rem;
}

.insignia-resuelto {
    color: var(--color-accent);
    font-size: 0.8rem;
    font-weight: 600;
    display: flex;
    align-items: center;
    gap: 0.25rem;
}

html {
    scroll-behavior: smooth;
}

/* Animations */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(15px); }
    to { opacity: 1; transform: translateY(0); }
}

.publicacion {
    animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

::-webkit-scrollbar {
    width: 6px;
}

::-webkit-scrollbar-track {
    background: transparent;
}

::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgba(255,255,255,0.2);
}
/* ── RESET ──────────────────────────────────────────────── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ── TOKENS (paleta del primer CSS) ────────────────────── */
:root {
  /* Colores */
  --bg:           #030712;
  --surface:      #111827;
  --surface-2:    #1f2937;
  --border:       rgba(255, 255, 255, 0.08);
  --border-light: rgba(255, 255, 255, 0.14);
  --text:         #f9fafb;
  --text-muted:   #9ca3af;
  --accent:       #3b82f6;          /* Azul primario */
  --accent-dim:   rgba(59,130,246,0.35);
  --accent-glow:  rgba(59,130,246,0.5);
  --danger:       #ef4444;
  --like-active:  #f43f5e;
  --glass:        rgba(255, 255, 255, 0.03);

  /* Tipografía – sistema nativo del primer CSS */
  --font-main: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
               Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans',
               'Helvetica Neue', sans-serif;

  --radius:    0.75rem;
  --radius-sm: 0.5rem;
  --shadow:    0 4px 32px rgba(0, 0, 0, 0.6);
}

/* ── BASE ───────────────────────────────────────────────── */
html { scroll-behavior: smooth; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--font-main);
  font-size: 15px;
  line-height: 1.6;
  min-height: 100vh;
  overflow-x: hidden;
}

/* ── SCROLLBAR ──────────────────────────────────────────── */
::-webkit-scrollbar { width: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover { background: rgba(255, 255, 255, 0.2); }

/* ── HEADER – glassmorphism del primer CSS ──────────────── */
.site-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: var(--glass);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}
.header-inner {
  max-width: 700px;
  margin: 0 auto;
  padding: 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo con degradado del primer CSS */
.logo { display: flex; align-items: center; gap: 10px; }
.logo-symbol { font-size: 20px; color: var(--accent); line-height: 1; }
.logo-name {
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.02em;
  background: linear-gradient(135deg, #fff, var(--accent));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.header-meta {
  font-size: 12px;
  color: var(--text-muted);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* ── LAYOUT ─────────────────────────────────────────────── */
.main-layout {
  max-width: 700px;
  margin: 0 auto;
  padding: 32px 24px 80px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

/* ── COMPOSER ───────────────────────────────────────────── */
.composer-section { width: 100%; }

.composer-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 20px 22px;
  box-shadow: var(--shadow);
  transition: border-color 0.2s, box-shadow 0.2s;
}
.composer-card:focus-within {
  border-color: var(--accent-dim);
  box-shadow: 0 0 0 3px var(--accent-glow), var(--shadow);
}

.composer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
}

.composer-prompt {
  font-style: italic;
  font-size: 14px;
  color: var(--text-muted);
  margin-bottom: 12px;
}

.composer-textarea {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text);
  font-family: var(--font-main);
  font-size: 15px;
  line-height: 1.65;
  resize: vertical;
  min-height: 72px;
}
.composer-textarea::placeholder { color: var(--text-muted); }

.composer-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding-top: 14px;
  border-top: 1px solid var(--border);
}

.char-counter {
  font-size: 12px;
  color: var(--text-muted);
  font-variant-numeric: tabular-nums;
}
.char-counter.warning { color: var(--accent); }
.char-counter.danger  { color: var(--danger); }

/* ── LANGUAGE SELECT ────────────────────────────────────── */
.language-select {
  background: var(--surface-2);
  color: var(--text-muted);
  border: 1px solid var(--border);
  border-radius: var(--radius-sm);
  padding: 4px 10px;
  font-family: var(--font-main);
  font-size: 12px;
  outline: none;
  cursor: pointer;
  transition: border-color 0.2s, color 0.2s;
}
.language-select:focus,
.language-select:hover {
  border-color: var(--accent-dim);
  color: var(--text);
}

/* ── BOTONES ────────────────────────────────────────────── */
.btn-publish {
  background: var(--accent);
  color: #fff;
  border: none;
  border-radius: var(--radius-sm);
  padding: 8px 22px;
  font-family: var(--font-main);
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: background 0.15s, transform 0.1s, box-shadow 0.2s;
}
.btn-publish:hover {
  background: #60a5fa;
  box-shadow: 0 0 14px var(--accent-glow);
}
.btn-publish:active { transform: scale(0.97); }
.btn-publish:disabled {
  background: var(--surface-2);
  color: var(--text-muted);
  cursor: not-allowed;
  box-shadow: none;
}

/* ── FEED HEADER ────────────────────────────────────────── */
.feed-section { width: 100%; }

.feed-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  flex-wrap: wrap;
  gap: 12px;
}

/* Título de sección – estilo del primer CSS */
.feed-title {
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  font-weight: 700;
  color: var(--text-muted);
}

/* ── SORT CONTROLS ──────────────────────────────────────── */
.sort-controls { display: flex; gap: 4px; }
.sort-btn {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  padding: 4px 12px;
  font-family: var(--font-main);
  font-size: 12px;
  letter-spacing: 0.04em;
  cursor: pointer;
  transition: all 0.15s;
}
.sort-btn:hover { border-color: var(--border-light); color: var(--text); }
.sort-btn.active {
  background: rgba(59, 130, 246, 0.1);
  border-color: var(--accent-dim);
  color: var(--accent);
  font-weight: 600;
}

/* ── COMMENTS FEED ──────────────────────────────────────── */
.comments-feed {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

/* ── COMMENT CARD – glassmorphism suave del primer CSS ───── */
.comment-card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  padding: 18px 20px;
  box-shadow: var(--shadow);
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s;
  animation: fadeIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.comment-card:hover {
  background: rgba(255, 255, 255, 0.02);
  border-color: var(--border-light);
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(15px); }
  to   { opacity: 1; transform: translateY(0); }
}

/* ── META ROW ───────────────────────────────────────────── */
.comment-meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 10px;
}

/* Avatar – estilo del primer CSS */
.avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: var(--surface-2);
  border: 1px solid var(--border);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  color: var(--accent);
  font-weight: 700;
}
.avatar--sm {
  width: 28px;
  height: 28px;
  font-size: 11px;
}

.meta-info {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 1px;
}
.meta-author {
  font-size: 13px;
  font-weight: 700;          /* autor-publicacion del primer CSS */
  color: var(--text);
  letter-spacing: 0.01em;
}
.meta-time {
  font-size: 11px;
  color: var(--text-muted);  /* arroba-publicacion del primer CSS */
}

.btn-delete {
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-size: 11px;
  cursor: pointer;
  padding: 4px 6px;
  border-radius: var(--radius-sm);
  opacity: 0;
  transition: opacity 0.15s, color 0.15s, background 0.15s;
}
.comment-card:hover .btn-delete,
.reply-card:hover .btn-delete { opacity: 1; }
.btn-delete:hover {
  color: var(--danger);
  background: rgba(239, 68, 68, 0.1);
}

/* ── COMMENT BODY ───────────────────────────────────────── */
.comment-body {
  color: var(--text);
  font-size: 15px;
  line-height: 1.7;
  white-space: pre-wrap;
  word-break: break-word;
  margin-bottom: 12px;
}

/* ── ACCIONES ───────────────────────────────────────────── */
.comment-actions {
  display: flex;
  align-items: center;
  gap: 14px;
  color: var(--text-muted);
  /* Igual que acciones-publicacion del primer CSS */
}

.btn-like,
.btn-reply {
  display: flex;
  align-items: center;
  gap: 5px;
  background: transparent;
  border: none;
  color: var(--text-muted);
  font-family: var(--font-main);
  font-size: 12px;
  cursor: pointer;
  padding: 4px 8px;
  border-radius: var(--radius-sm);
  transition: color 0.15s, background 0.15s;
}
.btn-like svg, .btn-reply svg { width: 14px; height: 14px; }
.btn-like:hover  { color: var(--like-active); background: rgba(244, 63, 94, 0.08); }
.btn-reply:hover { color: var(--accent); background: rgba(59, 130, 246, 0.08); }

.btn-like.liked { color: var(--like-active); }
.btn-like.liked svg { fill: var(--like-active); stroke: var(--like-active); }

.reply-count { font-size: 11px; color: var(--text-muted); margin-left: 2px; }

/* ── REPLY COMPOSER ─────────────────────────────────────── */
.reply-composer {
  margin-top: 14px;
  padding: 14px;
  background: var(--surface-2);
  border-radius: var(--radius-sm);
  border: 1px solid var(--border);
  animation: fadeIn 0.2s ease both;
}
.reply-textarea {
  width: 100%;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text);
  font-family: var(--font-main);
  font-size: 14px;
  line-height: 1.6;
  resize: vertical;
  min-height: 56px;
}
.reply-textarea::placeholder { color: var(--text-muted); }
.reply-composer-footer {
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  margin-top: 10px;
}

.btn-cancel-reply {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  border-radius: var(--radius-sm);
  padding: 5px 14px;
  font-family: var(--font-main);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-cancel-reply:hover { border-color: var(--border-light); color: var(--text); }

.btn-submit-reply {
  background: rgba(59, 130, 246, 0.1);
  border: 1px solid var(--accent-dim);
  color: var(--accent);
  border-radius: var(--radius-sm);
  padding: 5px 14px;
  font-family: var(--font-main);
  font-size: 12px;
  cursor: pointer;
  transition: all 0.15s;
}
.btn-submit-reply:hover {
  background: var(--accent);
  color: #fff;
  box-shadow: 0 0 10px var(--accent-glow);
}

/* ── REPLIES ────────────────────────────────────────────── */
.replies-container {
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.reply-card {
  display: flex;
  gap: 0;
  padding: 10px 0;
  position: relative;
  animation: fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) both;
}
.reply-thread-line {
  width: 2px;
  background: var(--border);
  border-radius: 1px;
  flex-shrink: 0;
  margin: 4px 14px 4px 8px;
  transition: background 0.15s;
}
.reply-card:hover .reply-thread-line { background: var(--accent-dim); }

.reply-content { flex: 1; }
.reply-content .comment-meta  { margin-bottom: 6px; }
.reply-content .comment-body  { font-size: 14px; margin-bottom: 8px; }

/* ── EMPTY STATE ────────────────────────────────────────── */
.empty-state {
  text-align: center;
  padding: 60px 20px;
  color: var(--text-muted);
}
.empty-icon { font-size: 36px; margin-bottom: 16px; opacity: 0.4; }
.empty-state p { font-size: 14px; line-height: 1.8; }

/* ── CODE PREVIEW ───────────────────────────────────────── */
.preview-wrapper {
  margin-top: 16px;
  border: 1px solid var(--border-light);
  border-radius: var(--radius-sm);
  background: #0d1117;
  overflow: hidden;
}
.preview-label {
  display: block;
  font-size: 10px;
  color: var(--text-muted);
  background: var(--surface-2);
  padding: 6px 12px;
  border-bottom: 1px solid var(--border-light);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-weight: 600;
}
.code-preview {
  margin: 0 !important;
  padding: 14px 16px !important;
  max-height: 250px;
  overflow-y: auto;
  font-size: 13px;
  background: transparent !important;
}
#preview code:empty::before {
  content: "El código resaltado aparecerá aquí...";
  color: var(--text-muted);
  font-style: italic;
  opacity: 0.5;
}

/* ── TOAST ──────────────────────────────────────────────── */
.toast {
  position: fixed;
  bottom: 28px;
  left: 50%;
  transform: translateX(-50%) translateY(12px);
  background: var(--surface-2);
  border: 1px solid var(--border-light);
  color: var(--text);
  padding: 10px 22px;
  border-radius: 100px;
  font-size: 13px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.6);
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s, transform 0.2s;
  white-space: nowrap;
  z-index: 999;
}
.toast.show {
  opacity: 1;
  transform: translateX(-50%) translateY(0);
}
.toast.success { border-color: var(--accent-dim); color: var(--accent); }
.toast.error   { border-color: rgba(239, 68, 68, 0.4); color: var(--danger); }

/* ── UTILITY ────────────────────────────────────────────── */
.hidden { display: none !important; }

/* ── RESPONSIVE ─────────────────────────────────────────── */
@media (max-width: 600px) {
  .main-layout  { padding: 20px 14px 60px; gap: 24px; }
  .header-inner { padding: 14px 16px; }
  .feed-header  { flex-direction: column; align-items: flex-start; }
  .sort-controls { width: 100%; }
  .sort-btn     { flex: 1; text-align: center; }
}`
    },

    // ── 5 CSS ───────────────────────────────────────────────
    {
        nombre: "ads-style.css",
        lang: "css",
        descripcion: "Sistema de design tokens",
        detalle: "Custom Properties con modo oscuro automático.",
        tamano: "1.5 KB",
        codigo: `:root {
    --color-bg-ads: #020617;
    --color-gold: #fbbf24;
    --color-horror: #991b1b;
    --color-cyber: #0ea5e9;
    --color-glitch: #a855f7;
    --color-surface-ads: rgba(15, 23, 42, 0.8);
    --font-heading: system-ui, -apple-system, sans-serif;
}

* {
    box-sizing: border-box;
}

html, body {
    height: 100% !important;
    width: 100% !important;
    overflow: hidden !important;
    margin: 0;
    padding: 0;
}

.boton-volver {
    position: absolute;
    top: 2rem;
    left: 2rem;
    color: var(--color-text-dim);
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid var(--color-border);
    transition: all 0.2s;
    z-index: 100;
}

.boton-volver:hover {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    transform: translateX(-5px);
}

body {
    background-color: var(--color-bg-ads);
    color: white;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    display: flex;
    flex-direction: column;
}

header {
    text-align: center;
    padding: 1rem 0;
    flex-shrink: 0;
}

header h1 {
    font-size: 2.5rem;
    font-weight: 900;
    margin: 0;
}

header p {
    color: #94a3b8;
    font-size: 1rem;
    margin: 0.2rem 0 0;
}

.grid-promociones {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 1.5rem;
    padding: 1rem 2rem;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;
    flex: 1;
    min-height: 0;
}

.tarjeta-anuncio {
    position: relative;
    border-radius: 1.5rem;
    overflow: hidden;
    height: 100%;
    background: var(--color-surface-ads);
    border: 1px solid rgba(255, 255, 255, 0.1);
    transition: transform 0.4s ease, box-shadow 0.4s;
    cursor: pointer;
}

.tarjeta-anuncio:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0,0,0,0.5);
}

.imagen-anuncio {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.5;
    transition: opacity 0.4s;
}

.tarjeta-anuncio:hover .imagen-anuncio {
    opacity: 0.7;
    transform: scale(1.1);
}

.contenido-anuncio {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 1.5rem;
    background: linear-gradient(transparent, rgba(0, 0, 0, 0.9) 50%);
    z-index: 2;
}

.contenido-anuncio h2 {
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
}

.contenido-anuncio p {
    font-size: 0.85rem;
    color: #cbd5e1;
}

.insignia-anuncio {
    position: absolute;
    top: 1.5rem;
    right: 1.5rem;
    padding: 0.4rem 1rem;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 800;
    text-transform: uppercase;
    letter-spacing: 0.05rem;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(5px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    z-index: 10;
}

/* Specific Ad Styles */
.anuncio-horror { background: radial-gradient(circle at center, #2b0000, #000); }
.anuncio-cyber { background: radial-gradient(circle at center, #001f3f, #020617); }
.anuncio-lujo { background: radial-gradient(circle at center, #1e1b1e, #000); }
.anuncio-glitch { background: #000; }

.anuncio-horror:hover { border-color: var(--color-horror); box-shadow: 0 0 30px rgba(153, 27, 27, 0.3); }
.anuncio-cyber:hover { border-color: var(--color-cyber); box-shadow: 0 0 30px rgba(14, 165, 233, 0.3); }
.anuncio-lujo:hover { border-color: var(--color-gold); box-shadow: 0 0 30px rgba(251, 191, 36, 0.2); }
.anuncio-glitch:hover { border-color: var(--color-glitch); box-shadow: 0 0 30px rgba(168, 85, 247, 0.3); }

.anuncio-horror .pulso { animation: pulso-sangre 2s infinite; }
@keyframes pulso-sangre {
    0% { transform: scale(1); opacity: 0.6; }
    50% { transform: scale(1.2); opacity: 0.2; }
    100% { transform: scale(1); opacity: 0.6; }
}

.borde-neon {
    position: absolute;
    inset: 0;
    border: 2px solid transparent;
    transition: border-color 0.3s;
}
.anuncio-cyber:hover .borde-neon { border-color: var(--color-cyber); box-shadow: inset 0 0 20px var(--color-cyber); }

.texto-glitch { position: relative; }
.anuncio-glitch:hover .texto-glitch::before {
    content: 'ERROR 404';
    position: absolute;
    left: 2px;
    text-shadow: -2px 0 #ff00c1;
    animation: efecto-glitch 0.3s infinite linear alternate-reverse;
}
@keyframes efecto-glitch {
    0% { clip-path: inset(10% 0 50% 0); }
    100% { clip-path: inset(40% 0 10% 0); }
}

.boton-accion {
    display: inline-block;
    padding: 0.6rem 1.2rem;
    border-radius: 0.6rem;
    font-weight: 700;
    text-decoration: none;
    font-size: 0.85rem;
    transition: all 0.2s;
    background: white;
    color: black;
}

.boton-accion:hover {
    transform: scale(1.05);
    background: #f1f5f9;
}

footer {
    text-align: center;
    padding: 0.75rem 0;
    opacity: 0.5;
    font-size: 0.75rem;
    flex-shrink: 0;
}

/* Forced Responsive No-Scroll */
@media (max-width: 1200px) {
    .grid-promociones { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
    .contenido-anuncio h2 { font-size: 1.2rem; }
}

@media (max-width: 600px) {
    header h1 { font-size: 1.8rem; }
    .grid-promociones { gap: 0.75rem; padding: 0.5rem; }
    .contenido-anuncio { padding: 1rem; }
    .contenido-anuncio p { display: none; }
}
`
    },
    {
        nombre: "style_OpenSource.css",
        lang: "css",
        descripcion: "Sistema de layout con CSS Grid",
        detalle: "Grid responsivo de 12 columnas con áreas nombradas.",
        tamano: "1.1 KB",
        codigo: `/* ============================================
   VARIABLES & RESET — mismos tokens del CSS base
============================================ */
:root {
    --color-bg:           #030712;
    --color-surface:      #111827;
    --color-surface-soft: #1f2937;
    --color-primary:      #3b82f6;
    --color-primary-glow: rgba(59, 130, 246, 0.5);
    --color-secondary:    #ff4500;
    --color-accent:       #f48024;
    --color-text-main:    #f9fafb;
    --color-text-dim:     #9ca3af;
    --color-glass:        rgba(255, 255, 255, 0.03);
    --color-border:       rgba(255, 255, 255, 0.1);
    --color-success:      #22c55e;
    --color-warning:      #eab308;

    --font-main: 'Courier New', 'Cascadia Code', monospace;
    --font-ui:   system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

*, *::before, *::after {
    margin: 0; padding: 0;
    box-sizing: border-box;
}

html { scroll-behavior: smooth; }

body {
    background-color: var(--color-bg);
    color: var(--color-text-main);
    font-family: var(--font-ui);
    line-height: 1.6;
    overflow-x: hidden;
    height: 100vh;
}

/* ============================================
   SCROLLBAR
============================================ */
::-webkit-scrollbar { width: 6px; height: 6px; }
::-webkit-scrollbar-track { background: transparent; }
::-webkit-scrollbar-thumb {
    background: rgba(255,255,255,0.1);
    border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover { background: rgba(255,255,255,0.2); }

/* ============================================
   LAYOUT GRID — 3 columnas
============================================ */
.contenedor-app {
    display: grid;
    grid-template-columns: 260px 1fr 320px;
    height: 100vh;
    max-width: 1440px;
    margin: 0 auto;
}

/* ============================================
   BARRA LATERAL IZQUIERDA
============================================ */
.barra-lateral {
    background: var(--color-glass);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border-right: 1px solid var(--color-border);
    padding: 1.5rem;
    height: 100vh;
    position: sticky;
    top: 0;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
}

.logo-area {
    margin-bottom: 2rem;
}

.logo-area h1 {
    font-size: 1.4rem;
    font-weight: 800;
    background: linear-gradient(135deg, #fff 30%, #3b82f6);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: var(--font-main);
    letter-spacing: -0.02em;
}

.logo-area p {
    font-size: 0.72rem;
    color: var(--color-text-dim);
    text-transform: uppercase;
    letter-spacing: 0.12rem;
    margin-top: 0.25rem;
}

.titulo-seccion {
    color: var(--color-text-dim);
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12rem;
    font-weight: 700;
    margin: 1rem 0 0.5rem 0.25rem;
}

.item-nav {
    display: flex;
    align-items: center;
    gap: 0.85rem;
    padding: 0.65rem 1rem;
    border-radius: 0.75rem;
    text-decoration: none;
    color: var(--color-text-main);
    font-size: 0.9rem;
    transition: all 0.2s ease;
    cursor: pointer;
    border: none;
    background: none;
    width: 100%;
    text-align: left;
}

.item-nav:hover {
    background: rgba(59, 130, 246, 0.1);
    color: var(--color-primary);
}

.item-nav.activo {
    background: rgba(59, 130, 246, 0.15);
    color: var(--color-primary);
    font-weight: 600;
}

.item-nav .icono-nav {
    font-size: 1.1rem;
    width: 22px;
    text-align: center;
}

.badge-nav {
    margin-left: auto;
    background: var(--color-primary);
    color: #fff;
    font-size: 0.65rem;
    font-weight: 700;
    padding: 0.1rem 0.45rem;
    border-radius: 999px;
}

/* ============================================
   FEED PRINCIPAL — área de código
============================================ */
.feed-principal {
    border-right: 1px solid var(--color-border);
    overflow-y: auto;
    display: flex;
    flex-direction: column;
}

/* Topbar del feed */
.topbar-feed {
    position: sticky;
    top: 0;
    z-index: 10;
    background: rgba(3, 7, 18, 0.85);
    backdrop-filter: blur(16px);
    -webkit-backdrop-filter: blur(16px);
    border-bottom: 1px solid var(--color-border);
    padding: 1rem 1.5rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.topbar-feed h2 {
    font-size: 1rem;
    font-weight: 700;
}

.breadcrumb {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    font-size: 0.8rem;
    color: var(--color-text-dim);
    font-family: var(--font-main);
}

.breadcrumb span.sep { color: var(--color-border); }
.breadcrumb span.activo-bc { color: var(--color-primary); }

/* Acciones del archivo */
.acciones-archivo {
    display: flex;
    gap: 0.5rem;
}

.btn-accion {
    display: flex;
    align-items: center;
    gap: 0.4rem;
    padding: 0.4rem 0.9rem;
    border-radius: 0.5rem;
    border: 1px solid var(--color-border);
    background: var(--color-surface);
    color: var(--color-text-dim);
    font-size: 0.78rem;
    cursor: pointer;
    transition: all 0.2s;
    font-family: var(--font-ui);
}

.btn-accion:hover {
    background: var(--color-surface-soft);
    color: var(--color-text-main);
    border-color: rgba(255,255,255,0.2);
}

.btn-accion.copiado {
    border-color: var(--color-success);
    color: var(--color-success);
}

/* Pantalla de bienvenida */
.pantalla-bienvenida {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    color: var(--color-text-dim);
    padding: 3rem;
    text-align: center;
}

.icono-bienvenida {
    font-size: 4rem;
    opacity: 0.3;
    animation: flotacion 3s ease-in-out infinite;
}

@keyframes flotacion {
    0%, 100% { transform: translateY(0); }
    50%       { transform: translateY(-10px); }
}

.pantalla-bienvenida h3 {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-text-main);
    opacity: 0.6;
}

.pantalla-bienvenida p {
    font-size: 0.88rem;
    max-width: 340px;
    line-height: 1.7;
}

/* Visor de código */
.visor-codigo {
    display: none;
    flex-direction: column;
    flex: 1;
}

.visor-codigo.visible {
    display: flex;
    animation: fadeIn 0.35s cubic-bezier(0.16, 1, 0.3, 1) forwards;
}

/* Meta del archivo */
.meta-archivo {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    align-items: center;
    gap: 1.5rem;
    background: var(--color-surface);
}

.chip-lang {
    font-size: 0.72rem;
    font-weight: 700;
    padding: 0.2rem 0.6rem;
    border-radius: 999px;
    text-transform: uppercase;
    letter-spacing: 0.06rem;
    font-family: var(--font-main);
}

.chip-html  { background: rgba(240, 101, 41, 0.2); color: #f06529; border: 1px solid rgba(240, 101, 41, 0.3); }
.chip-css   { background: rgba(38, 77, 228, 0.2);  color: #264de4; border: 1px solid rgba(38, 77, 228, 0.3); }
.chip-js    { background: rgba(240, 219, 79, 0.2); color: #f0db4f; border: 1px solid rgba(240, 219, 79, 0.3); }

.meta-info {
    display: flex;
    gap: 1.5rem;
    font-size: 0.78rem;
    color: var(--color-text-dim);
    margin-left: auto;
}

.meta-info span { display: flex; align-items: center; gap: 0.35rem; }

/* Descripción */
.descripcion-archivo {
    padding: 1rem 1.5rem 0;
    font-size: 0.88rem;
    color: var(--color-text-dim);
    border-bottom: 1px solid var(--color-border);
    padding-bottom: 1rem;
}

.descripcion-archivo strong {
    color: var(--color-text-main);
    display: block;
    margin-bottom: 0.25rem;
    font-size: 0.95rem;
}

/* Bloque de código con highlight.js */
.contenedor-codigo {
    flex: 1;
    overflow: auto;
    background: #1a1d23;
}

.contenedor-codigo pre {
    margin: 0;
    padding: 0;
    height: 100%;
}

.contenedor-codigo pre code {
    display: block;
    padding: 1.5rem !important;
    font-family: 'Courier New', 'Cascadia Code', 'Fira Code', monospace !important;
    font-size: 0.88rem !important;
    line-height: 1.7 !important;
    background: transparent !important;
    counter-reset: linea;
}

/* Líneas numeradas */
.contenedor-codigo pre code .linea {
    display: block;
    position: relative;
    padding-left: 3.5rem;
    min-height: 1.4em;
}

.contenedor-codigo pre code .linea::before {
    counter-increment: linea;
    content: counter(linea);
    position: absolute;
    left: 0;
    width: 2.8rem;
    text-align: right;
    padding-right: 1rem;
    color: rgba(255,255,255,0.2);
    user-select: none;
    font-size: 0.8em;
}

/* ============================================
   PANEL DERECHO — Explorador de carpetas
============================================ */
.panel-explorador {
    background: var(--color-glass);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    height: 100vh;
    position: sticky;
    top: 0;
    overflow-y: auto;
    padding: 1.5rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.explorador-titulo {
    font-size: 0.7rem;
    text-transform: uppercase;
    letter-spacing: 0.12rem;
    color: var(--color-text-dim);
    font-weight: 700;
    padding: 0 0.5rem;
}

/* Carpeta desplegable */
.carpeta {
    border: 1px solid var(--color-border);
    border-radius: 0.85rem;
    overflow: hidden;
    background: var(--color-surface);
    transition: border-color 0.2s;
}

.carpeta.abierta {
    border-color: rgba(59, 130, 246, 0.3);
}

.cabecera-carpeta {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.85rem 1rem;
    cursor: pointer;
    user-select: none;
    transition: background 0.2s;
}

.cabecera-carpeta:hover {
    background: rgba(255,255,255,0.04);
}

.icono-carpeta {
    font-size: 1.1rem;
    transition: transform 0.25s ease;
}

.carpeta.abierta .icono-carpeta {
    transform: rotate(0deg);
}

.nombre-carpeta {
    font-size: 0.88rem;
    font-weight: 600;
    color: var(--color-text-main);
    flex: 1;
    font-family: var(--font-main);
}

.flecha-carpeta {
    font-size: 0.65rem;
    color: var(--color-text-dim);
    transition: transform 0.25s ease;
}

.carpeta.abierta .flecha-carpeta {
    transform: rotate(90deg);
}

/* Contenido de la carpeta (lista de archivos) */
.contenido-carpeta {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1);
    background: rgba(0,0,0,0.2);
    border-top: 0px solid transparent;
}

.carpeta.abierta .contenido-carpeta {
    max-height: 600px;
    overflow-y: auto;
    border-top: 1px solid var(--color-border);
}

/* Item de archivo individual */
.item-archivo {
    display: flex;
    align-items: center;
    gap: 0.65rem;
    padding: 0.6rem 0.75rem 0.6rem 1.25rem;
    cursor: pointer;
    transition: all 0.15s;
    border-bottom: 1px solid rgba(255,255,255,0.04);
    text-decoration: none;
}

.item-archivo:last-child { border-bottom: none; }

.item-archivo:hover {
    background: rgba(59, 130, 246, 0.08);
}

.item-archivo.activo {
    background: rgba(59, 130, 246, 0.15);
    border-left: 2px solid var(--color-primary);
    padding-left: 1.1rem;
}

.icono-archivo {
    font-size: 0.9rem;
    flex-shrink: 0;
}

.datos-archivo {
    flex: 1;
    min-width: 0;
}

.nombre-archivo {
    font-size: 0.82rem;
    font-family: var(--font-main);
    color: var(--color-text-main);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    display: block;
}

.item-archivo.activo .nombre-archivo { color: var(--color-primary); }

.ext-archivo {
    font-size: 0.68rem;
    color: var(--color-text-dim);
    margin-top: 0.05rem;
}

.tamano-archivo {
    font-size: 0.68rem;
    color: var(--color-text-dim);
    font-family: var(--font-main);
    flex-shrink: 0;
}

/* Tarjeta de estadísticas en el panel */
.tarjeta-stats {
    background: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: 0.85rem;
    padding: 1rem;
}

.tarjeta-stats h4 {
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 0.1rem;
    color: var(--color-text-dim);
    margin-bottom: 0.85rem;
    font-weight: 700;
}

.fila-stat {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0.65rem;
}

.fila-stat:last-child { margin-bottom: 0; }

.etiq-stat { font-size: 0.8rem; color: var(--color-text-dim); }

.val-stat {
    font-size: 0.82rem;
    font-weight: 700;
    font-family: var(--font-main);
}

.val-html { color: #f06529; }
.val-css  { color: #264de4; }
.val-js   { color: #f0db4f; }

/* ============================================
   ANIMACIONES
============================================ */
@keyframes fadeIn {
    from { opacity: 0; transform: translateY(12px); }
    to   { opacity: 1; transform: translateY(0); }
}

@keyframes parpadeo {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
}

.cursor-terminal {
    display: inline-block;
    width: 8px;
    height: 1em;
    background: var(--color-primary);
    vertical-align: middle;
    margin-left: 2px;
    animation: parpadeo 1s step-end infinite;
}
`
    },
    {
        nombre: "style_detector.css",
        lang: "css",
        descripcion: "Librería de animaciones CSS",
        detalle: "Keyframes reutilizables con clases de utilidad.",
        tamano: "1.3 KB",
        codigo: `:root {
    --neon-cian: #00f2ff;
    --neon-oro: #ffd700;
    --neon-sangre: #ff0033;
    --neon-veneno: #39ff14;
    --neon-purpura: #bc13fe;
}

body {
    background-color: #050505;
    color: #e0e0e0;
    font-family: 'Rajdhani', sans-serif;
    min-height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    background-image: radial-gradient(circle at 50% 50%, rgba(20, 20, 20, 1) 0%, rgba(5, 5, 5, 1) 100%), url("https://www.transparenttextures.com/patterns/carbon-fibre.png");
}

.letra-espacial {
    font-family: 'Orbitron', sans-serif;
}

.brillo-cian {
    text-shadow: 0 0 10px var(--neon-cian), 0 0 20px var(--neon-cian);
}

.brillo-oro {
    text-shadow: 0 0 10px var(--neon-oro), 0 0 20px var(--neon-oro);
}

.brillo-sangre {
    text-shadow: 0 0 10px var(--neon-sangre), 0 0 20px var(--neon-sangre);
}

.brillo-purpura {
    text-shadow: 0 0 10px var(--neon-purpura), 0 0 20px var(--neon-purpura);
}

.borde-neon {
    border: 2px solid;
    transition: all 0.3s ease;
}

.borde-neon:hover {
    box-shadow: 0 0 15px currentColor;
}

@keyframes interferencia {
    0% { clip-path: inset(40% 0 61% 0); transform: translate(-2px, 2px); }
    20% { clip-path: inset(92% 0 1% 0); transform: translate(1px, -3px); }
    40% { clip-path: inset(43% 0 1% 0); transform: translate(-1px, 2px); }
    60% { clip-path: inset(25% 0 58% 0); transform: translate(3px, 1px); }
    100% { clip-path: inset(58% 0 43% 0); transform: translate(1px, 2px); }
}

.capa-glitch {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 0, 51, 0.1);
    pointer-events: none;
    z-index: 100;
    display: none;
    animation: interferencia 0.2s infinite;
}

.barra-sospecha {
    height: 100%;
    background: linear-gradient(90deg, #660000 0%, #ff0033 100%);
    box-shadow: 0 0 20px var(--neon-sangre);
    transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}

.peligro-total {
    animation: latido-rojo 0.8s infinite;
}

@keyframes latido-rojo {
    0%, 100% { box-shadow: 0 0 10px var(--neon-sangre); }
    50% { box-shadow: 0 0 30px var(--neon-sangre); }
}

.panel-cristal {
    background: rgba(255, 255, 255, 0.03);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.1);
}

.entrada-suave {
    animation: fundido 0.5s ease-out forwards;
}

@keyframes fundido {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
}

.boton-opcion {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: all 0.2s;
    position: relative;
    overflow: hidden;
}

.boton-opcion:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: var(--neon-cian);
    transform: scale(1.02);
}
`
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
