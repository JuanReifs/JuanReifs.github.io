// Lógica de la App DevPulse
document.addEventListener('DOMContentLoaded', () => {
  console.log('DevPulse inicializado 🚀');

  const contenedorPublicaciones = document.getElementById('contenedor-publicaciones');
  const itemsNav = document.querySelectorAll('.item-nav');

  // Datos de Muestra
  const publicaciones = [
    {
      id: 1,
      autor: 'Juan Reis',
      arroba: '@jreis',
      tiempo: '2h',
      contenido: 'Acabo de terminar la lógica de los hilos de respuesta para DevPulse. ¡La interacción va a ser súper fluida! 🚀 #DevPulse #WebDev',
      tipo: 'social',
      estadisticas: { comentarios: 12, compartidos: 5, me_gusta: 42 }
    },
    {
      id: 2,
      autor: 'Christopher',
      arroba: '@chris_master',
      tiempo: '4h',
      contenido: '¿Cómo optimizar el renderizado de listas en Vanilla JS? He encontrado que usando un fragmento de documento (DocumentFragment) antes de añadir al DOM mejora el rendimiento un 40%.',
      tipo: 'qa',
      titulo: '¿Cómo optimizar el renderizado de listas en Vanilla JS?',
      estado: 'Pregunta Resuelta',
      estadisticas: { comentarios: 28, me_gusta: 156, guardados: 4 }
    },
    {
      id: 3,
      autor: 'Iván Rodriguez',
      arroba: '@ivan_ui',
      tiempo: '6h',
      contenido: 'Integrando el sistema de diseño glassmorphism en el feed principal. El desenfoque de fondo dinámico le da un toque premium brutal. ✨',
      tipo: 'social',
      estadisticas: { comentarios: 8, compartidos: 2, me_gusta: 31 }
    }
  ];

  // Mostrar Publicaciones
  function mostrarPublicaciones() {
    if (!contenedorPublicaciones) return;
    contenedorPublicaciones.innerHTML = '';

    // Ordenar por ID descendente (más nuevos primero)
    [...publicaciones].sort((a, b) => b.id - a.id).forEach(publicacion => {
      const articulo = document.createElement('article');
      articulo.className = 'publicacion';

      let cuerpoPublicacion = '';
      if (publicacion.tipo === 'qa') {
        cuerpoPublicacion = `
                    <div class="insignia-resuelto">✓ ${publicacion.estado}</div>
                    <h3 style="margin: 0.5rem 0; font-size: 1.1rem;">${publicacion.titulo}</h3>
                    <p>${publicacion.contenido}</p>
                `;
      } else {
        cuerpoPublicacion = `<div class="contenido-publicacion">${publicacion.contenido}</div>`;
      }

      articulo.innerHTML = `
                <div class="cabecera-publicacion">
                    <div class="avatar"></div>
                    <div>
                        <span class="autor-publicacion">${publicacion.autor}</span>
                        <span class="arroba-publicacion">${publicacion.arroba} · ${publicacion.tiempo}</span>
                    </div>
                </div>
                ${cuerpoPublicacion}
                <div class="acciones-publicacion">
                    <span class="boton-accion" onclick="this.style.color='var(--color-primary)'">💬 ${publicacion.estadisticas.comentarios}</span>
                    <span class="boton-accion" onclick="this.style.color='var(--color-secondary)'">
                        ${publicacion.tipo === 'qa' ? (publicacion.estadisticas.me_gusta) : ('🔁 ' + (publicacion.estadisticas.compartidos || 0))}
                    </span>
                    <span class="boton-accion" onclick="this.classList.toggle('gustado')">
                        ${publicacion.tipo === 'qa' ? ('📚 ' + publicacion.estadisticas.guardados) : ('❤️ ' + publicacion.estadisticas.me_gusta)}
                    </span>
                </div>
            `;
      contenedorPublicaciones.appendChild(articulo);
    });
  }



  // Lógica de navegación
  itemsNav.forEach(item => {
    item.addEventListener('click', (e) => {
      const destino = item.getAttribute('href');
      if (destino && destino !== '#') return;

      e.preventDefault();
      itemsNav.forEach(i => i.classList.remove('activo'));
      item.classList.add('activo', 'brillo-activo');

      // Simulación de filtrado
      const comunidad = item.innerText.toLowerCase().trim();
      console.log(`Filtrando por: ${comunidad}`);
    });
  });

  // Renderizado inicial
  mostrarPublicaciones();

  // Efecto de pulso en elementos activos
  const estilo = document.createElement('style');
  estilo.innerHTML = `
        .brillo-activo {
            box-shadow: 0 0 15px var(--color-primary-glow);
            transition: box-shadow 0.3s ease;
        }
        .boton-accion { cursor: pointer; transition: 0.2s; padding: 4px 8px; border-radius: 4px; }
        .boton-accion:hover { background: rgba(255,255,255,0.05); }
        .gustado { color: #f91880 !important; font-weight: bold; text-shadow: 0 0 10px rgba(249, 24, 128, 0.3); }
    `;
  document.head.appendChild(estilo);
});
// segundo js

/**
 * Ágora — Social Network Simulation
 * Pure frontend: HTML + CSS + Vanilla JS
 * Persistence: localStorage
 */

// ── CONSTANTS ─────────────────────────────────────────────
const STORAGE_KEY = 'agora_comments';
const MAX_LENGTH = 500;
const ANON_NAMES = [
  'Sofía M.', 'Alejandro R.', 'Valentina G.', 'Carlos L.',
  'Lucía P.', 'Mateo F.', 'Isabella T.', 'Nicolás H.',
  'Camila V.', 'Sebastián Q.'
];

// ── STATE ──────────────────────────────────────────────────
let state = {
  comments: [],   // { id, author, avatar, text, language, timestamp, likes, likedBy, replies: [] }
  sortMode: 'newest'
};

// ── STORAGE ────────────────────────────────────────────────
const Storage = {
  load() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },
  save(comments) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(comments));
    } catch (e) {
      showToast('No se pudo guardar. Almacenamiento lleno.', 'error');
    }
  }
};

// ── HELPERS ────────────────────────────────────────────────
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function randomAuthor() {
  return ANON_NAMES[Math.floor(Math.random() * ANON_NAMES.length)];
}

function avatarLetter(name) {
  return name.charAt(0);
}

function timeAgo(ts) {
  const diff = Date.now() - ts;
  const s = Math.floor(diff / 1000);
  const m = Math.floor(s / 60);
  const h = Math.floor(m / 60);
  const d = Math.floor(h / 24);
  if (s < 5) return 'ahora mismo';
  if (s < 60) return `hace ${s}s`;
  if (m < 60) return `hace ${m}m`;
  if (h < 24) return `hace ${h}h`;
  return `hace ${d}d`;
}

function clientId() {
  // Stable per-browser identifier (not a user — just for like toggle)
  let cid = sessionStorage.getItem('agora_cid');
  if (!cid) {
    cid = uid();
    sessionStorage.setItem('agora_cid', cid);
  }
  return cid;
}

// Live-updating relative times
function startTimestampUpdater() {
  setInterval(() => {
    document.querySelectorAll('[data-timestamp]').forEach(el => {
      el.textContent = timeAgo(Number(el.dataset.timestamp));
    });
  }, 30_000);
}

// ── SORT ───────────────────────────────────────────────────
function sortedComments() {
  const copy = [...state.comments];
  if (state.sortMode === 'newest') return copy.sort((a, b) => b.timestamp - a.timestamp);
  if (state.sortMode === 'oldest') return copy.sort((a, b) => a.timestamp - b.timestamp);
  if (state.sortMode === 'popular') return copy.sort((a, b) => b.likes - a.likes);
  return copy;
}

// ── TOAST ──────────────────────────────────────────────────
let toastTimer;
function showToast(msg, type = 'success') {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.className = `toast show ${type}`;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => { el.className = 'toast'; }, 2500);
}

// ── RENDER ─────────────────────────────────────────────────
function renderFeed() {
  const feed = document.getElementById('comments-feed');
  const empty = document.getElementById('empty-state');
  const countEl = document.getElementById('comment-count');

  feed.innerHTML = '';

  const sorted = sortedComments();
  const total = sorted.reduce((n, c) => n + 1 + c.replies.length, 0);
  if (countEl) countEl.textContent = `${total} ${total === 1 ? 'voz' : 'voces'}`;

  if (sorted.length === 0) {
    empty.classList.remove('hidden');
    return;
  }
  empty.classList.add('hidden');

  sorted.forEach(comment => {
    feed.appendChild(buildCommentNode(comment));
  });
}

function buildCommentNode(comment) {
  const tpl = document.getElementById('tpl-comment');
  const node = tpl.content.cloneNode(true);
  const card = node.querySelector('.comment-card');

  card.dataset.id = comment.id;
  card.querySelector('.avatar').textContent = avatarLetter(comment.author);
  card.querySelector('.meta-author').textContent = comment.author;

  const timeEl = card.querySelector('.meta-time');
  timeEl.textContent = timeAgo(comment.timestamp);
  timeEl.dataset.timestamp = comment.timestamp;

  // --- NUEVA LÓGICA DE SINTAXIS ---
  const commentBody = card.querySelector('.comment-body');
  const lang = comment.language || 'markup'; // Por si hay comentarios viejos guardados sin lenguaje

  // Recreamos la estructura HTML para PrismJS
  commentBody.innerHTML = `
    <div class="preview-wrapper" style="margin-top: 0;">
      <pre class="code-preview language-${lang}"><code class="language-${lang}"></code></pre>
    </div>
  `;

  // Insertamos el texto de forma segura
  const codeElement = commentBody.querySelector('code');
  codeElement.textContent = comment.text;

  // Pintamos el código con PrismJS
  if (window.Prism) {
    window.Prism.highlightElement(codeElement);
  }
  // ---------------------------------

  // Likes
  const likeBtn = card.querySelector('.btn-like');
  const likeCount = likeBtn.querySelector('.like-count');
  likeCount.textContent = comment.likes;
  const hasLiked = comment.likedBy?.includes(clientId());
  if (hasLiked) likeBtn.classList.add('liked');

  likeBtn.addEventListener('click', () => toggleLike(comment.id));

  // Reply button
  const replyBtn = card.querySelector('.btn-reply');
  const replyComposer = card.querySelector('.reply-composer');
  const cancelBtn = card.querySelector('.btn-cancel-reply');
  const submitBtn = card.querySelector('.btn-submit-reply');
  const replyTextarea = card.querySelector('.reply-textarea');

  replyBtn.addEventListener('click', () => {
    const isOpen = !replyComposer.classList.contains('hidden');
    replyComposer.classList.toggle('hidden', isOpen);
    if (!isOpen) replyTextarea.focus();
  });
  cancelBtn.addEventListener('click', () => {
    replyComposer.classList.add('hidden');
    replyTextarea.value = '';
  });
  submitBtn.addEventListener('click', () => {
    submitReply(comment.id, replyTextarea, replyComposer);
  });
  replyTextarea.addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      submitReply(comment.id, replyTextarea, replyComposer);
    }
  });

  // Delete comment
  card.querySelector('.btn-delete').addEventListener('click', () => {
    deleteComment(comment.id);
  });

  // Reply count label
  const replyCountEl = card.querySelector('.reply-count');
  if (comment.replies.length > 0) {
    replyCountEl.textContent =
      `· ${comment.replies.length} ${comment.replies.length === 1 ? 'respuesta' : 'respuestas'}`;
  }

  // Render replies
  const repliesContainer = card.querySelector('.replies-container');
  comment.replies.forEach(reply => {
    repliesContainer.appendChild(buildReplyNode(reply, comment.id));
  });

  return card;
}

function buildReplyNode(reply, parentId) {
  const tpl = document.getElementById('tpl-reply');
  const node = tpl.content.cloneNode(true);
  const card = node.querySelector('.reply-card');

  card.dataset.id = reply.id;
  card.querySelector('.avatar').textContent = avatarLetter(reply.author);
  card.querySelector('.meta-author').textContent = reply.author;

  const timeEl = card.querySelector('.meta-time');
  timeEl.textContent = timeAgo(reply.timestamp);
  timeEl.dataset.timestamp = reply.timestamp;

  card.querySelector('.comment-body').textContent = reply.text;

  // Likes
  const likeBtn = card.querySelector('.btn-like');
  const likeCount = likeBtn.querySelector('.like-count');
  likeCount.textContent = reply.likes;
  const hasLiked = reply.likedBy?.includes(clientId());
  if (hasLiked) likeBtn.classList.add('liked');

  likeBtn.addEventListener('click', () => toggleLike(parentId, reply.id));

  // Delete reply
  card.querySelector('.btn-delete').addEventListener('click', () => {
    deleteComment(parentId, reply.id);
  });

  return card;
}

// ── ACTIONS ────────────────────────────────────────────────
// Modificamos la función para que acepte el lenguaje
function publishComment(text, language) {
  const comment = {
    id: uid(),
    author: randomAuthor(),
    text: text.trim(),
    language: language, // Guardamos el lenguaje en el estado
    timestamp: Date.now(),
    likes: 0,
    likedBy: [],
    replies: []
  };
  state.comments.unshift(comment);
  Storage.save(state.comments);
  renderFeed();
  showToast('Publicado ✓');
}

function submitReply(parentId, textarea, composer) {
  const text = textarea.value.trim();
  if (!text) { showToast('Escribe algo primero.', 'error'); return; }
  if (text.length > MAX_LENGTH) {
    showToast(`Máximo ${MAX_LENGTH} caracteres.`, 'error');
    return;
  }

  const parent = state.comments.find(c => c.id === parentId);
  if (!parent) return;

  const reply = {
    id: uid(),
    author: randomAuthor(),
    text,
    timestamp: Date.now(),
    likes: 0,
    likedBy: []
  };
  parent.replies.push(reply);
  Storage.save(state.comments);
  textarea.value = '';
  composer.classList.add('hidden');
  renderFeed();
  showToast('Respuesta publicada ✓');
}

function toggleLike(commentId, replyId = null) {
  const cid = clientId();
  const comment = state.comments.find(c => c.id === commentId);
  if (!comment) return;

  const target = replyId
    ? comment.replies.find(r => r.id === replyId)
    : comment;
  if (!target) return;

  if (!Array.isArray(target.likedBy)) target.likedBy = [];

  const idx = target.likedBy.indexOf(cid);
  if (idx === -1) {
    target.likedBy.push(cid);
    target.likes++;
  } else {
    target.likedBy.splice(idx, 1);
    target.likes = Math.max(0, target.likes - 1);
  }

  Storage.save(state.comments);
  renderFeed();
}

function deleteComment(commentId, replyId = null) {
  if (replyId) {
    const parent = state.comments.find(c => c.id === commentId);
    if (parent) {
      parent.replies = parent.replies.filter(r => r.id !== replyId);
    }
  } else {
    state.comments = state.comments.filter(c => c.id !== commentId);
  }
  Storage.save(state.comments);
  renderFeed();
  showToast('Eliminado');
}

// ── COMPOSER SETUP ─────────────────────────────────────────
function setupComposer() {
  const textarea = document.getElementById('new-comment-text');
  const publishBtn = document.getElementById('publish-btn');
  const counter = document.getElementById('char-counter');
  const langSelect = document.getElementById('languageSelect'); // Obtenemos el selector

  textarea.addEventListener('input', () => {
    const len = textarea.value.length;
    counter.textContent = `${len} / ${MAX_LENGTH}`;
    counter.className = 'char-counter' +
      (len > MAX_LENGTH * .9 ? ' warning' : '') +
      (len > MAX_LENGTH ? ' danger' : '');
    publishBtn.disabled = len === 0 || len > MAX_LENGTH;
  });

  publishBtn.disabled = true;

  publishBtn.addEventListener('click', () => {
    const text = textarea.value.trim();
    const language = langSelect ? langSelect.value : 'markup'; // Leemos el lenguaje

    if (!text || text.length > MAX_LENGTH) return;

    publishComment(text, language); // Enviamos el lenguaje a la función

    // Reseteamos el formulario
    textarea.value = '';
    counter.textContent = `0 / ${MAX_LENGTH}`;
    counter.className = 'char-counter';
    publishBtn.disabled = true;

    // Disparamos un evento 'input' falso para que el archivo syntaxis.js se entere 
    // de que borramos el texto y limpie la vista previa automáticamente.
    textarea.dispatchEvent(new Event('input'));
  });

  // Ctrl/Cmd + Enter to publish
  textarea.addEventListener('keydown', e => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      publishBtn.click();
    }
  });
}

// ── SORT CONTROLS ──────────────────────────────────────────
function setupSortControls() {
  document.querySelectorAll('.sort-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.sort-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      state.sortMode = btn.dataset.sort;
      renderFeed();
    });
  });
}

// ── INIT ───────────────────────────────────────────────────
function init() {
  state.comments = Storage.load();
  setupComposer();
  setupSortControls();
  renderFeed();
  startTimestampUpdater();
}

document.addEventListener('DOMContentLoaded', init);