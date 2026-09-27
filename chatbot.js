// chatbot.js - Asistente de chat inteligente
// Utiliza respuestas predefinidas y coincidencia de patrones

class ChatbotAssistant {
    constructor() {
        this.isOpen = false;
        this.messages = [];
        this.responses = this.initializeResponses();
        this.init();
    }

    init() {
        const toggle = document.getElementById('chatbot-toggle');
        const closeBtn = document.querySelector('.chatbot-content .close-btn');
        const sendBtn = document.getElementById('chatbot-send');
        const input = document.getElementById('chatbot-message');

        if (toggle) {
            toggle.addEventListener('click', () => this.toggle());
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => this.close());
        }

        if (sendBtn) {
            sendBtn.addEventListener('click', () => this.sendMessage());
        }

        if (input) {
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    this.sendMessage();
                }
            });
        }

        // Mostrar mensaje de bienvenida después de 3 segundos
        setTimeout(() => {
            if (!this.isOpen) {
                this.addBotMessage('¡Hola! Soy el asistente de Juan. ¿En qué puedo ayudarte? 👋');
            }
        }, 3000);
    }

    initializeResponses() {
        return {
            // Saludos
            'hola|hi|hey|buenos días|buenas noches': {
                responses: [
                    '¡Hola! ¿Cómo estás? 😊',
                    '¡Bienvenido! ¿En qué puedo ayudarte?',
                    'Hola, gracias por contactar 👋'
                ]
            },

            // Sobre Juan
            'quién eres|quién soy|sobre ti|sobre juan|información': {
                responses: [
                    'Soy Juan Reifs García, desarrollador multiplataforma especializado en Java, JavaScript y Python. Actualmente estudio DAM en Madrid.',
                    'Me llamo Juan Reifs García y soy un desarrollador apasionado por la tecnología y la innovación.',
                    'Puedes saber más sobre mí en la sección "Sobre mí" o en mi LinkedIn.'
                ]
            },

            // Proyectos
            'proyectos|portfolio|trabajos|qué has hecho': {
                responses: [
                    'He trabajado en varios proyectos interesantes: Sistema de gestión de archivos, Calculadora web interactiva, Algoritmos de ordenación y mucho más. ¡Mira la sección de Proyectos!',
                    'Tengo un portafolio completo con mis mejores trabajos. Desde desarrollo web hasta aplicaciones de escritorio.',
                    'Puedes ver todos mis proyectos en la página de Proyectos. Incluye código en GitHub para cada uno.'
                ]
            },

            // Habilidades
            'habilidades|lenguajes|tecnologías|qué sabes|stack': {
                responses: [
                    'Mi stack técnico incluye: Java, JavaScript, Python, HTML5, CSS3, SQL, Git, Linux y mucho más. Especializado en IA y automatización.',
                    'Trabajo con: Frontend (HTML, CSS, JavaScript), Backend (Java, Python), Bases de datos (SQL), y herramientas como Git y Linux.',
                    'Tengo experiencia con múltiples lenguajes y tecnologías. En la sección de Habilidades encontrarás detalles.'
                ]
            },

            // Contacto
            'contacto|email|teléfono|cómo contactar|quiero contactar': {
                responses: [
                    'Puedes contactarme de varias formas:\n📧 Email: reifsgarcia.juan@gmail.com\n📞 Teléfono: +34 644 74 90 32\n🌐 LinkedIn: linkedin.com/in/juan-reifs',
                    'Me puedes encontrar en:\n- Email: reifsgarcia.juan@gmail.com\n- Teléfono: +34 644 74 90 32\n- GitHub: github.com/JuanReifs',
                    'Para contactarme, usa el formulario en la sección "Contacto" o escríbeme directamente a reifsgarcia.juan@gmail.com'
                ]
            },

            // Disponibilidad
            'disponible|ocupado|disponibilidad|cuándo|proyecto nuevo': {
                responses: [
                    'Estoy disponible para nuevos proyectos y colaboraciones. Actualmente trabajo en tiempo parcial y tengo flexibilidad.',
                    'Sí, estoy disponible para proyectos freelance y oportunidades laborales. Contacta si te interesa.',
                    'Puedo ayudarte con proyectos. Depende de la envergadura y disponibilidad. ¡Hablemos!'
                ]
            },

            // Blog
            'blog|artículos|noticias|contenido': {
                responses: [
                    'Tengo un blog con artículos sobre desarrollo, IA, y tendencias tecnológicas. ¡Echa un vistazo!',
                    'Publico regularmente contenido sobre desarrollo web, programación y tecnología. Visita la sección Blog.',
                    'En el blog encontrarás artículos útiles sobre desarrollo, tutoriales y análisis de tendencias.'
                ]
            },

            // Despedidas
            'adiós|bye|hasta luego|me voy|chao': {
                responses: [
                    '¡Hasta luego! 👋 Espero haberte sido útil.',
                    '¡Que tengas un gran día! Contacta si necesitas algo más.',
                    'Gracias por visitarme. ¡Vuelve pronto! 😊'
                ],
                close: true
            },

            // Ayuda
            'ayuda|help|qué puedes hacer|comandos': {
                responses: [
                    'Puedo ayudarte con:\n- Información sobre Juan\n- Detalles de proyectos\n- Cómo contactar\n- Preguntas técnicas\n- Y mucho más\n\nPregúntame algo 😊'
                ]
            },

            // Gracias
            'gracias|thanks|muchas gracias': {
                responses: [
                    '¡De nada! Estoy aquí para ayudar 😊',
                    'Es un placer. ¿Hay algo más que necesites?',
                    'De nada. ¡Espero haber sido útil!'
                ]
            }
        };
    }

    findResponse(userInput) {
        const input = userInput.toLowerCase().trim();
        
        for (const [patterns, responseObj] of Object.entries(this.responses)) {
            const patternList = patterns.split('|');
            
            for (const pattern of patternList) {
                if (input.includes(pattern) || pattern.includes(input)) {
                    const responses = responseObj.responses;
                    const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                    return { text: randomResponse, close: responseObj.close || false };
                }
            }
        }

        return {
            text: 'Interesante pregunta. Por favor, escribe a reifsgarcia.juan@gmail.com para consultas más específicas. 😊',
            close: false
        };
    }

    toggle() {
        if (this.isOpen) {
            this.close();
        } else {
            this.open();
        }
    }

    open() {
        const content = document.getElementById('chatbot-content');
        const toggle = document.getElementById('chatbot-toggle');
        
        if (content && toggle) {
            content.hidden = false;
            toggle.setAttribute('aria-expanded', 'true');
            this.isOpen = true;
            
            // Focus en input
            const input = document.getElementById('chatbot-message');
            if (input) input.focus();

            // Evento para analytics
            if (window.gtag) {
                gtag('event', 'chatbot_opened');
            }
        }
    }

    close() {
        const content = document.getElementById('chatbot-content');
        const toggle = document.getElementById('chatbot-toggle');
        
        if (content && toggle) {
            content.hidden = true;
            toggle.setAttribute('aria-expanded', 'false');
            this.isOpen = false;
        }
    }

    addMessage(text, isBot) {
        const messagesDiv = document.getElementById('chatbot-messages');
        if (!messagesDiv) return;

        const message = document.createElement('div');
        message.className = isBot ? 'bot-message' : 'user-message';
        message.setAttribute('role', 'region');
        message.setAttribute('aria-live', 'polite');
        message.textContent = text;

        messagesDiv.appendChild(message);
        messagesDiv.scrollTop = messagesDiv.scrollHeight;
    }

    addBotMessage(text) {
        this.addMessage(text, true);
    }

    addUserMessage(text) {
        this.addMessage(text, false);
    }

    sendMessage() {
        const input = document.getElementById('chatbot-message');
        if (!input) return;

        const userInput = input.value.trim();
        if (userInput === '') return;

        // Agregar mensaje del usuario
        this.addUserMessage(userInput);
        input.value = '';

        // Esperar un poco para simular escritura
        setTimeout(() => {
            const response = this.findResponse(userInput);
            this.addBotMessage(response.text);

            if (response.close) {
                setTimeout(() => this.close(), 2000);
            }

            // Evento para analytics
            if (window.gtag) {
                gtag('event', 'chatbot_message', {
                    'message_text': userInput
                });
            }
        }, 500);
    }
}

// Inicializar chatbot cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', () => {
    const chatbot = new ChatbotAssistant();
});

// Agregar estilos CSS del chatbot dinámicamente
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addChatbotStyles);
} else {
    addChatbotStyles();
}

function addChatbotStyles() {
    const style = document.createElement('style');
    style.textContent = `
        .chatbot-widget {
            position: fixed;
            bottom: 20px;
            right: 20px;
            z-index: 1000;
            font-family: 'Source Sans 3', sans-serif;
        }

        .chatbot-toggle {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            border: none;
            color: white;
            font-size: 28px;
            cursor: pointer;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            transition: all 0.3s ease;
        }

        .chatbot-toggle:hover {
            transform: scale(1.1);
            box-shadow: 0 6px 16px rgba(102, 126, 234, 0.4);
        }

        .chatbot-toggle:focus {
            outline: 2px solid #667eea;
            outline-offset: 2px;
        }

        .chatbot-content {
            position: absolute;
            bottom: 90px;
            right: 0;
            width: 350px;
            background: white;
            border-radius: 15px;
            box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
            display: flex;
            flex-direction: column;
            max-height: 500px;
            animation: slideUp 0.3s ease;
        }

        @keyframes slideUp {
            from {
                opacity: 0;
                transform: translateY(20px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        .chatbot-header {
            padding: 15px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border-radius: 15px 15px 0 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .chatbot-header h3 {
            margin: 0;
            font-size: 16px;
        }

        .close-btn {
            background: none;
            border: none;
            color: white;
            font-size: 24px;
            cursor: pointer;
            padding: 0;
            line-height: 1;
        }

        .close-btn:hover {
            opacity: 0.8;
        }

        .chatbot-messages {
            flex: 1;
            overflow-y: auto;
            padding: 15px;
            display: flex;
            flex-direction: column;
            gap: 10px;
            background: #f5f5f5;
        }

        .bot-message,
        .user-message {
            padding: 10px 15px;
            border-radius: 10px;
            word-wrap: break-word;
            line-height: 1.4;
            font-size: 14px;
        }

        .bot-message {
            background: white;
            color: #333;
            align-self: flex-start;
            max-width: 80%;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        .user-message {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            align-self: flex-end;
            max-width: 80%;
        }

        .chatbot-input {
            display: flex;
            padding: 15px;
            gap: 10px;
            border-top: 1px solid #eee;
            background: white;
            border-radius: 0 0 15px 15px;
        }

        .chatbot-input input {
            flex: 1;
            border: 1px solid #ddd;
            border-radius: 20px;
            padding: 10px 15px;
            font-size: 14px;
            font-family: inherit;
            transition: border-color 0.3s ease;
        }

        .chatbot-input input:focus {
            outline: none;
            border-color: #667eea;
            box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1);
        }

        .chatbot-input button {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            border: none;
            border-radius: 50%;
            width: 40px;
            height: 40px;
            cursor: pointer;
            font-size: 16px;
            transition: transform 0.3s ease;
        }

        .chatbot-input button:hover {
            transform: scale(1.05);
        }

        .chatbot-input button:focus {
            outline: 2px solid #667eea;
            outline-offset: 2px;
        }

        @media (max-width: 480px) {
            .chatbot-content {
                width: 90vw;
                max-width: 100%;
                bottom: 80px;
                right: auto;
                left: 10px;
            }

            .bot-message,
            .user-message {
                max-width: 100%;
            }

            .chatbot-toggle {
                width: 50px;
                height: 50px;
                font-size: 24px;
            }
        }
    `;
    document.head.appendChild(style);
}
