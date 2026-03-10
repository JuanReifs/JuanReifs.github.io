// analytics.js - Rastreo avanzado de eventos y comportamiento del usuario

class AdvancedAnalytics {
    constructor() {
        this.sessionStart = new Date();
        this.pageViews = 0;
        this.events = [];
        this.init();
    }

    init() {
        // Inicializar Google Analytics si está disponible
        if (typeof gtag !== 'undefined') {
            this.setupPageTracking();
            this.setupEventTracking();
            this.setupScrollTracking();
            this.setupPerformanceTracking();
            this.setupErrorTracking();
        }
    }

    setupPageTracking() {
        // Rastrear navegación
        window.addEventListener('beforeunload', () => {
            const sessionDuration = (new Date() - this.sessionStart) / 1000;
            
            gtag('event', 'session_end', {
                'session_duration': sessionDuration,
                'page_title': document.title,
                'page_path': window.location.pathname
            });
        });

        // Rastrear cambio de pestaña/ventana
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                gtag('event', 'page_hidden');
            } else {
                gtag('event', 'page_visible');
            }
        });
    }

    setupEventTracking() {
        // Rastrear clicks en enlaces externos
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && (link.target === '_blank' || link.rel.includes('external'))) {
                gtag('event', 'external_link_click', {
                    'link_url': link.href,
                    'link_text': link.textContent
                });
            }

            // Rastrear clicks en botones de descarga
            if (link && link.href && (link.href.includes('.pdf') || link.href.includes('.doc'))) {
                const fileType = link.href.split('.').pop().toUpperCase();
                gtag('event', 'file_download', {
                    'file_name': link.href.split('/').pop(),
                    'file_type': fileType
                });
            }
        });

        // Rastrear botones importantes
        const importantButtons = document.querySelectorAll('.btn-primary, [data-track]');
        importantButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                gtag('event', 'button_click', {
                    'button_text': btn.textContent.trim(),
                    'button_class': btn.className
                });
            });
        });

        // Rastrear envío de formularios
        const forms = document.querySelectorAll('form');
        forms.forEach(form => {
            form.addEventListener('submit', () => {
                gtag('event', 'form_submit', {
                    'form_name': form.id || form.name || 'unnamed_form'
                });
            });
        });
    }

    setupScrollTracking() {
        let scrollDepth = 0;
        const thresholds = [25, 50, 75, 100];
        const scrolledThresholds = new Set();
        let ticking = false; // <-- Añadimos un "candado"

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const windowHeight = window.innerHeight;
                    const documentHeight = document.documentElement.scrollHeight;
                    const scrollTop = window.scrollY;
                    
                    const currentDepth = Math.round((scrollTop + windowHeight) / documentHeight * 100);

                    thresholds.forEach(threshold => {
                        if (currentDepth >= threshold && !scrolledThresholds.has(threshold)) {
                            scrolledThresholds.add(threshold);
                            gtag('event', 'scroll_depth', { 'depth_percentage': threshold });
                        }
                    });
                    ticking = false; // <-- Quitamos el candado
                });
                ticking = true; // <-- Ponemos el candado
            }
        }, { passive: true });
    }

    setupPerformanceTracking() {
        window.addEventListener('load', () => {
            // Rastrear Core Web Vitals
            if (window.web_vitals) {
                // LCP (Largest Contentful Paint)
                web_vitals.getLCP((metric) => {
                    gtag('event', 'page_view', {
                        'value': metric.value,
                        'event_category': 'engagement',
                        'event_label': 'LCP'
                    });
                });

                // FID (First Input Delay)
                web_vitals.getFID((metric) => {
                    gtag('event', 'page_view', {
                        'value': metric.value,
                        'event_category': 'engagement',
                        'event_label': 'FID'
                    });
                });

                // CLS (Cumulative Layout Shift)
                web_vitals.getCLS((metric) => {
                    gtag('event', 'page_view', {
                        'value': metric.value,
                        'event_category': 'engagement',
                        'event_label': 'CLS'
                    });
                });
            }

            // Rastrear tiempo de carga
            const perfData = window.performance.timing;
            const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

            gtag('event', 'page_load', {
                'page_load_time': pageLoadTime,
                'page_title': document.title
            });
        });
    }

    setupErrorTracking() {
        // Rastrear errores de JavaScript
        window.addEventListener('error', (event) => {
            gtag('event', 'javascript_error', {
                'error_message': event.message,
                'error_source': event.filename,
                'error_line': event.lineno,
                'error_column': event.colno
            });

            console.error('Error rastreado:', event.error);
        });

        // Rastrear promesas rechazadas no manejadas
        window.addEventListener('unhandledrejection', (event) => {
            gtag('event', 'unhandled_rejection', {
                'error_message': event.reason?.message || 'Unknown rejection',
                'error_type': event.reason?.name || 'Promise Rejection'
            });
        });
    }

    // Métodos públicos para tracking manual
    static trackEvent(category, action, label = '', value = '') {
        if (typeof gtag !== 'undefined') {
            gtag('event', action, {
                'event_category': category,
                'event_label': label,
                'value': value
            });
        }
    }

    static trackPageView(pagePath, pageTitle) {
        if (typeof gtag !== 'undefined') {
            gtag('config', 'G-XXXXXX', {
                'page_path': pagePath,
                'page_title': pageTitle
            });
        }
    }

    static trackUserProperty(name, value) {
        if (typeof gtag !== 'undefined') {
            gtag('set', {
                [name]: value
            });
        }
    }
}

// Inicializar cuando el DOM esté listo
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new AdvancedAnalytics();
    });
} else {
    new AdvancedAnalytics();
}

// Cargar Web Vitals para métricas de rendimiento
(function() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/web-vitals@3/dist/web-vitals.iife.js';
    script.async = true;
    document.head.appendChild(script);
})();

// Exportar para uso global
window.Analytics = AdvancedAnalytics;
