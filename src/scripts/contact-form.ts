/**
 * Formulario de contacto: validación, envío a Web3Forms y estados visuales.
 * Los mensajes se pintan con `data-i18n`, así que cambian solos al cambiar de idioma.
 */
import type { I18nKey } from '../i18n';
import { translate } from './preferences';

type FieldName = 'name' | 'email' | 'message';
type Field = HTMLInputElement | HTMLTextAreaElement;
type Status = 'idle' | 'sending' | 'success' | 'error' | 'warning';

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

/** Devuelve la clave del error o `null` si el valor es válido. */
const validators: Record<FieldName, (value: string) => I18nKey | null> = {
  name: (v) => (v.trim().length >= 2 ? null : 'contact.err.name'),
  email: (v) => (EMAIL_RE.test(v.trim()) ? null : 'contact.err.email'),
  message: (v) => (v.trim().length >= 10 ? null : 'contact.err.message'),
};

const FIELD_NAMES = Object.keys(validators) as FieldName[];

/** Escribe (o borra) un texto traducible en un elemento. */
function setText(el: HTMLElement, key: I18nKey | null): void {
  if (key) {
    el.dataset.i18n = key;
    el.textContent = translate(key);
  } else {
    delete el.dataset.i18n;
    el.textContent = '';
  }
}

function setup(form: HTMLFormElement): void {
  const statusEl = form.querySelector<HTMLElement>('[data-form-status]');
  const statusText = form.querySelector<HTMLElement>('[data-form-status-text]');
  const submit = form.querySelector<HTMLButtonElement>('button[type="submit"]');
  const submitLabel = submit?.querySelector<HTMLElement>('[data-i18n]');
  if (!statusEl || !statusText || !submit || !submitLabel) return;

  const field = (name: FieldName): Field | null =>
    form.querySelector<Field>(`[name="${name}"]`);

  function validate(name: FieldName): boolean {
    const input = field(name);
    const errorEl = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
    if (!input || !errorEl) return true;
    const error = validators[name](input.value);
    setText(errorEl, error);
    input.setAttribute('aria-invalid', String(error !== null));
    return error === null;
  }

  function setStatus(status: Status, key: I18nKey | null = null): void {
    form.dataset.status = status;
    statusEl!.dataset.state = status;
    setText(statusText!, key);
    const sending = status === 'sending';
    submit!.disabled = sending;
    setText(submitLabel!, sending ? 'contact.sending' : 'contact.send');
  }

  for (const name of FIELD_NAMES) {
    const input = field(name);
    input?.addEventListener('blur', () => validate(name));
    // Mientras el campo esté marcado como erróneo, se revalida al escribir.
    input?.addEventListener('input', () => {
      if (input.hasAttribute('aria-invalid')) validate(name);
    });
  }

  // Tras un envío correcto, los campos vacíos vuelven a su estado inicial.
  form.addEventListener('reset', () => {
    for (const name of FIELD_NAMES) {
      field(name)?.removeAttribute('aria-invalid');
      const errorEl = form.querySelector<HTMLElement>(`[data-error-for="${name}"]`);
      if (errorEl) setText(errorEl, null);
    }
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (form.dataset.status === 'sending') return;

    const results = FIELD_NAMES.map(validate);
    const firstInvalid = FIELD_NAMES[results.indexOf(false)];
    if (firstInvalid) {
      field(firstInvalid)?.focus();
      setStatus('idle');
      return;
    }

    const accessKey = form.dataset.accessKey ?? '';
    const endpoint = form.dataset.endpoint ?? '';
    if (!accessKey || !endpoint) {
      setStatus('warning', 'contact.notConfigured');
      return;
    }

    const data = new FormData(form);
    // Honeypot: si un bot lo marca, se finge el éxito sin enviar nada.
    if (data.get('botcheck')) {
      form.reset();
      setStatus('success', 'contact.success');
      return;
    }

    setStatus('sending', 'contact.sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: accessKey,
          subject: `Portfolio · mensaje de ${String(data.get('name')).trim()}`,
          from_name: 'Portfolio juanreifs.github.io',
          name: String(data.get('name')).trim(),
          email: String(data.get('email')).trim(),
          message: String(data.get('message')).trim(),
        }),
      });
      const result = (await response.json()) as { success?: boolean };
      if (!response.ok || !result.success) throw new Error(`Web3Forms ${response.status}`);
      form.reset();
      setStatus('success', 'contact.success');
    } catch (error) {
      console.error('[contacto]', error);
      setStatus('error', 'contact.error');
    }
  });
}

document.querySelectorAll<HTMLFormElement>('[data-contact-form]').forEach(setup);
