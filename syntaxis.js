class SyntaxHighlighter {
  constructor(options = {}) {
    this.editorId = options.editorId || 'new-comment-text';
    this.previewId = options.previewId || 'preview';
    this.languageSelectId = options.languageSelectId || 'languageSelect';

    this.editor = document.getElementById(this.editorId);
    this.preview = document.getElementById(this.previewId);
    this.languageSelect = document.getElementById(this.languageSelectId);
    this.codeElement = this.preview?.querySelector('code') ?? null;
    this.prismReady = false;

    // ✅ Registrar listeners ANTES de cargar Prism
    // Así el botón de publicar nunca queda bloqueado esperando la CDN
    this._bindEvents();
    this._loadDependencies().then(() => {
      this.prismReady = true;
      this.highlight(); // resaltado inicial una vez Prism está listo
    });
  }

  _bindEvents() {
    if (!this.editor || !this.preview || !this.languageSelect || !this.codeElement) {
      console.warn('SyntaxHighlighter: elementos DOM no encontrados.');
      return;
    }
    this.editor.addEventListener('input', () => this.highlight());
    this.languageSelect.addEventListener('change', () => this.highlight());
  }

  highlight() {
    if (!this.editor || !this.codeElement) return;

    const language = this.languageSelect?.value ?? 'markup';
    const code = this.editor.value;

    this.preview.className = `code-preview language-${language}`;
    this.codeElement.className = `language-${language}`;
    this.codeElement.textContent = code;

    // Solo resalta si Prism ya está listo; si no, el texto plano es suficiente
    if (this.prismReady && window.Prism) {
      try {
        window.Prism.highlightElement(this.codeElement);
      } catch (e) {
        console.warn('Prism highlight error:', e);
      }
    }
  }

  _loadDependencies() {
    return new Promise((resolve) => {
      if (window.Prism) return resolve();

      const theme = document.createElement('link');
      theme.rel = 'stylesheet';
      theme.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
      document.head.appendChild(theme);

      const core = document.createElement('script');
      core.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
      core.onload = () => {
        const autoloader = document.createElement('script');
        autoloader.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/plugins/autoloader/prism-autoloader.min.js';
        autoloader.onload = () => {
          window.Prism.plugins.autoloader.languages_path =
            'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/';
          resolve();
        };
        autoloader.onerror = resolve; // si falla, continuar sin autoloader
        document.head.appendChild(autoloader);
      };
      core.onerror = resolve; // si falla la CDN, no bloquear nada
      document.head.appendChild(core);
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  window.appSyntaxHighlighter = new SyntaxHighlighter({
    editorId: 'new-comment-text',
    previewId: 'preview',
    languageSelectId: 'languageSelect'
  });
});