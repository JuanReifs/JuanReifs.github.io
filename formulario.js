// formulario.js - Validación y manejo del formulario de contacto

class ContactForm {
    constructor() {
        this.form = document.getElementById('contact-form');
        this.statusDiv = document.getElementById('form-status');
        
        if (this.form) {
            this.init();
        }
    }

    init() {
        this.form.addEventListener('submit', (e) => this.handleSubmit(e));
        this.setupFieldValidation();
    }

    setupFieldValidation() {
        const fields = this.form.querySelectorAll('input, textarea, select');
        
        fields.forEach(field => {
            field.addEventListener('blur', () => this.validateField(field));
            field.addEventListener('change', () => this.validateField(field));
        });
    }

    validateField(field) {
        const isValid = this.isValidField(field);
        
        if (isValid) {
            field.classList.remove('field-error');
            field.classList.add('field-valid');
        } else {
            field.classList.remove('field-valid');
            field.classList.add('field-error');
        }
        
        return isValid;
    }

    isValidField(field) {
        const { name, type, value } = field;

        switch (name) {
            case 'name':
                return value.trim().length >= 2;
            
            case 'email':
                return this.isValidEmail(value);
            
            case 'phone':
                // Phone es opcional, solo validar si tiene contenido
                if (value.trim() === '') return true;
                return this.isValidPhone(value);
            
            case 'message':
                return value.trim().length >= 10;
            
            case 'subject':
                return value.trim() !== '';
            
            case 'privacy':
                return field.checked;
            
            default:
                return true;
        }
    }

    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    isValidPhone(phone) {
        // Validar formato internacional simple
        const phoneRegex = /^[\d\s\-\+\(\)]{7,}$/;
        return phoneRegex.test(phone);
    }

    validateForm() {
        const fields = this.form.querySelectorAll('[required]');
        let isValid = true;

        fields.forEach(field => {
            if (!this.validateField(field)) {
                isValid = false;
            }
        });

        // Validar checkbox de privacidad
        const privacyCheckbox = this.form.querySelector('[name="privacy"]');
        if (privacyCheckbox && !privacyCheckbox.checked) {
            this.validateField(privacyCheckbox);
            isValid = false;
        }

        return isValid;
    }

    showStatus(message, type = 'success') {
        if (!this.statusDiv) return;

        this.statusDiv.textContent = message;
        this.statusDiv.className = `form-status form-status-${type}`;
        this.statusDiv.style.display = 'block';

        // Auto-hide después de 5 segundos si es éxito
        if (type === 'success') {
            setTimeout(() => {
                this.statusDiv.style.display = 'none';
            }, 5000);
        }
    }

    getFormData() {
        const formData = new FormData(this.form);
        return {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            subject: formData.get('subject'),
            message: formData.get('message'),
            timestamp: new Date().toISOString()
        };
    }

    async handleSubmit(e) {
        e.preventDefault();

        // Validar formulario
        if (!this.validateForm()) {
            this.showStatus('Por favor, completa correctamente todos los campos requeridos.', 'error');
            
            // Scroll al campo con error
            const firstError = this.form.querySelector('.field-error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
            return;
        }

        // Mostrar estado enviando
        this.showStatus('Enviando mensaje...', 'sending');

        const data = this.getFormData();

        try {
            // Opción 1: Usar EmailJS (requiere configuración)
            // await this.sendViaEmailJS(data);

            // Opción 2: Usar formspree.io (servicio gratuito)
            await this.sendViaFormspree(data);

            // Registrar en Google Analytics
            if (window.gtag) {
                gtag('event', 'contact_form_submitted', {
                    'subject': data.subject,
                    'email': data.email
                });
            }

            // Mostrar éxito
            this.showStatus('¡Mensaje enviado correctamente! Te responderé pronto.', 'success');
            this.form.reset();
            this.form.querySelectorAll('input, textarea, select').forEach(field => {
                field.classList.remove('field-valid', 'field-error');
            });

        } catch (error) {
            console.error('Error al enviar:', error);
            this.showStatus(`Error al enviar: ${error.message || 'Intenta más tarde'}`, 'error');
        }
    }

    async sendViaFormspree(data) {
        // Usar formspree.io - servicio gratuito sin configuración
        const response = await fetch('https://formspree.io/f/FORM_ID', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
                phone: data.phone,
                subject: data.subject,
                message: data.message,
                _subject: `Nuevo contacto: ${data.subject}`,
                _replyto: data.email
            })
        });

        if (!response.ok) {
            throw new Error('Error en la respuesta del servidor');
        }

        return await response.json();
    }

    async sendViaEmailJS(data) {
        // Reemplazar con tus credenciales de EmailJS
        const SERVICE_ID = 'YOUR_SERVICE_ID';
        const TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
        const PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

        if (!window.emailjs) {
            // Cargar EmailJS
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/index.min.js';
            document.head.appendChild(script);

            await new Promise(resolve => {
                script.onload = resolve;
            });
        }

        await window.emailjs.send(SERVICE_ID, TEMPLATE_ID, {
            from_name: data.name,
            from_email: data.email,
            phone: data.phone,
            subject: data.subject,
            message: data.message
        }, PUBLIC_KEY);
    }
}

// Inicializar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    new ContactForm();
});

// Agregar estilos CSS del formulario
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addFormStyles);
} else {
    addFormStyles();
}

function addFormStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .form-group {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;
        }

        .form-group label {
            font-weight: 600;
            margin-bottom: 8px;
            color: #333;
            font-size: 16px;
        }

        .form-group input,
        .form-group textarea,
        .form-group select {
            padding: 12px 15px;
            border: 2px solid #ddd;
            border-radius: 8px;
            font-size: 16px;
            font-family: inherit;
            transition: all 0.3s ease;
            background: white;
            color: #333;
        }

        .form-group input:focus,
        .form-group textarea:focus,
        .form-group select:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .form-group.field-valid input,
        .form-group.field-valid textarea,
        .form-group.field-valid select {
            border-color: #4caf50;
            background-color: #f1f8f6;
        }

        .form-group.field-error input,
        .form-group.field-error textarea,
        .form-group.field-error select {
            border-color: #f44336;
            background-color: #fff5f5;
        }

        .form-group.checkbox {
            flex-direction: row;
            align-items: center;
            gap: 10px;
            margin-bottom: 20px;
        }

        .form-group.checkbox input[type="checkbox"] {
            margin: 0;
            width: auto;
            height: auto;
            cursor: pointer;
        }

        .form-group.checkbox label {
            margin: 0;
            cursor: pointer;
            font-weight: 400;
            font-size: 14px;
        }

        .form-group small {
            font-size: 12px;
            color: #999;
            margin-top: 5px;
        }

        .form-status {
            padding: 15px;
            border-radius: 8px;
            margin-bottom: 20px;
            font-weight: 500;
            display: none;
            animation: slideDown 0.3s ease;
        }

        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateY(-10px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .form-status-success {
            background-color: #d4edda;
            color: #155724;
            border: 1px solid #c3e6cb;
        }

        .form-status-error {
            background-color: #f8d7da;
            color: #721c24;
            border: 1px solid #f5c6cb;
        }

        .form-status-sending {
            background-color: #d1ecf1;
            color: #0c5460;
            border: 1px solid #bee5eb;
        }

        .contact-form {
            background: white;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .contact-form h2 {
            margin-bottom: 25px;
            font-size: 24px;
            color: #333;
        }

        @media (max-width: 768px) {
            .contact-form {
                padding: 20px;
            }

            .form-group input,
            .form-group textarea,
            .form-group select {
                font-size: 16px; /* Prevenir zoom en iOS */
            }
        }

        /* Estilos para botones del formulario */
        .btn {
            padding: 12px 30px;
            border: none;
            border-radius: 8px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            text-decoration: none;
            display: inline-block;
            text-align: center;
            margin-right: 10px;
        }

        .btn-primary {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
        }

        .btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(102, 126, 234, 0.4);
        }

        .btn-secondary {
            background: #f0f0f0;
            color: #333;
        }

        .btn-secondary:hover {
            background: #e0e0e0;
        }

        .btn:focus {
            outline: 2px solid #667eea;
            outline-offset: 2px;
        }

        .btn:disabled {
            opacity: 0.6;
            cursor: not-allowed;
            transform: none;
        }
    `;
    document.head.appendChild(style);
}
