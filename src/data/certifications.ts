import type { I18nKey } from '../i18n';

export interface Certification {
  id: string;
  title: I18nKey;
  issuer: I18nKey;
  description: I18nKey;
  /**
   * URL de verificación. Si se deja vacía (''), el botón "Verificar" aparece desactivado.
   * TODO(Juan): pega aquí el enlace oficial de validación de cada certificado.
   */
  verifyUrl: string;
}

export const certifications: readonly Certification[] = [
  {
    id: 'c1',
    title: 'certs.c1.title',
    issuer: 'certs.c1.issuer',
    description: 'certs.c1.desc',
    // Enlace "Ver certificado" que aparece en el CV (Google Drive).
    verifyUrl: 'https://drive.google.com/file/d/17ZcOhQcClKgjzEtVh35T42aEPtyaVGgl/view',
  },
];
