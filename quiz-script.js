/**
 * ARCHIVO DE LÓGICA CENTRAL - script.js (VANILLA)
 * Versión 100% nativa sin React, Tailwind ni librerías externas.
 */

const DATOS_QUIZ = {
    java: {
        titulo: 'Desafío Java',
        niveles: [
            {
                codigo: `public class Principal {\n    public static void main(String[] args) {\n        System.out.println("Hola Mundo")\n    }\n}`,
                lineaError: 3,
                explicacion: 'En Java, todas las sentencias deben terminar con un punto y coma (;).',
                pista: 'Falta un terminador de sentencia en la línea donde imprimes el mensaje.'
            },
            {
                codigo: `int x = 10;\nif (x = 20) {\n    System.out.println("Es veinte");\n}`,
                lineaError: 2,
                explicacion: 'Usaste un operador de asignación (=) en lugar de comparación (==).',
                pista: '¿Estás comparando el valor o asignándolo?'
            },
            {
                codigo: `public void test() {\n    String s;\n    System.out.println(s.length());\n}`,
                lineaError: 3,
                explicacion: 'La variable "s" no ha sido inicializada antes de su uso.',
                pista: '¿Tiene algún valor la variable "s" antes de pedir su longitud?'
            }
        ]
    },
    python: {
        titulo: 'Desafío Python',
        niveles: [
            {
                codigo: `def saludo():\nprint("Hola")`,
                lineaError: 2,
                explicacion: 'En Python, la identación es obligatoria para definir bloques de código.',
                pista: 'Revisa el espacio antes de la función print.'
            },
            {
                codigo: `lista = [1, 2, 3]\nprint(lista[3])`,
                lineaError: 2,
                explicacion: 'El índice 3 está fuera de los límites de la lista (Out of range).',
                pista: 'Las listas en Python empiezan en el índice 0.'
            },
            {
                codigo: `for i in range(5)\n    print(i)`,
                lineaError: 1,
                explicacion: 'Falta el símbolo de dos puntos (:) al final de la sentencia for.',
                pista: '¿Cómo se marcan el inicio de los bloques en Python?'
            }
        ]
    },
    cpp: {
        titulo: 'Desafío C++',
        niveles: [
            {
                codigo: `#include <iostream>\nusing namespace std;\n\nint main() {\n    int* p = nullptr;\n    *p = 10;\n    return 0;\n}`,
                lineaError: 6,
                explicacion: 'Estás intentando desreferenciar un puntero nulo (nullptr).',
                pista: '¿Hacia dónde apunta "p" antes de asignar un valor?'
            },
            {
                codigo: `int main() {\n    int arr[5];\n    arr[5] = 100;\n    return 0;\n}`,
                lineaError: 3,
                explicacion: 'Acceso fuera de los límites del array (Index out of bounds).',
                pista: 'Si el tamaño es 5, ¿cuál es el último índice válido?'
            },
            {
                codigo: `#include <iostream>\n\nint main() {\n    std::cout << "Hola" << std::endl\n    return 0;\n}`,
                lineaError: 4,
                explicacion: 'Falta el punto y coma (;) al final de la instrucción de salida.',
                pista: 'Revisa el final de la línea del cout.'
            }
        ]
    },
    javascript: {
        titulo: 'Desafío JavaScript',
        niveles: [
            {
                codigo: `const usuario = { nombre: "Alex" };\nusuario = { nombre: "Maria" };`,
                lineaError: 2,
                explicacion: 'Las variables declaradas con "const" no pueden ser reasignadas.',
                pista: '¿Qué tipo de declaración impide la reasignación total?'
            },
            {
                codigo: `function test() {\n    console.log(valor);\n    let valor = 10;\n}`,
                lineaError: 2,
                explicacion: 'No puedes acceder a una variable "let" antes de su declaración (Temporal Dead Zone).',
                pista: 'El orden de ejecución importa con let.'
            },
            {
                codigo: `const suma = (a, b) => a + b\nconsole.log(suma(5))`,
                lineaError: 2,
                explicacion: 'Llamaste a la función con menos argumentos de los requeridos (b será undefined).',
                pista: 'La función espera dos números, pero solo pasaste uno.'
            }
        ]
    }
};

// --- MOTOR DEL JUEGO (Vanilla JS) ---

class MotorQuiz {
    constructor(lenguaje) {
        this.lenguaje = lenguaje;
        this.nivelActual = 0;
        this.puntuacion = 0;
        this.datos = DATOS_QUIZ[lenguaje] || DATOS_QUIZ.javascript;
        this.estado = 'jugando';
        this.contenedor = document.getElementById('raiz');
        this.dibujarCuerpo();
    }

    dibujarCuerpo() {
        if (!this.contenedor) return;
        this.contenedor.innerHTML = '';

        if (this.estado === 'finalizado') {
            this.mostrarPantallaFinal();
            return;
        }

        const nivel = this.datos.niveles[this.nivelActual];

        // Estructura principal
        const html = `
            <div class="contenedor-quiz">
                <button class="boton-volver" onclick="window.location.href='quiz.html'" style="margin-bottom: 2rem;">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
                    Volver al menú
                </button>

                <div class="barra-superior flex entre centro">
                    <div>
                        <h2 style="font-size: 2.5rem; font-weight: 800; margin-bottom: 0.5rem; color: white;">${this.datos.titulo}</h2>
                        <p style="color: var(--color-text-dim); font-weight: 500;">Nivel ${this.nivelActual + 1} de ${this.datos.niveles.length}</p>
                    </div>
                    <div class="puntuacion-caja flex centro gap-4">
                        <span style="font-size: 0.75rem; font-weight: 800; color: var(--color-text-dim); letter-spacing: 0.1rem;">PUNTOS</span>
                        <span style="font-size: 2rem; font-weight: 900; color: var(--color-primary);">${this.puntuacion}</span>
                    </div>
                </div>

                <div class="editor-ventana panel-cristal" style="padding: 0;">
                    <div class="editor-barra flex entre centro">
                        <div class="flex centro gap-2" style="color: var(--color-text-dim); font-weight: bold; font-size: 0.8rem;">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="4 17 10 11 4 5"></polyline><line x1="12" y1="19" x2="20" y2="19"></line></svg>
                            editor_codigo.${this.lenguaje === 'cpp' ? 'cpp' : 'js'}
                        </div>
                        <div class="flex gap-2">
                            <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-border);"></div>
                            <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-border);"></div>
                            <div style="width: 8px; height: 8px; border-radius: 50%; background: var(--color-border);"></div>
                        </div>
                    </div>
                    <div class="editor-codigo" id="area-codigo"></div>
                </div>

                <div class="flex centro gap-2" style="margin-top: 2rem; color: var(--color-primary); font-weight: 800; font-size: 0.75rem; opacity: 0.8; letter-spacing: 0.05rem;">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
                    ENCUENTRA EL ERROR Y HAZ CLIC EN LA LÍNEA
                </div>
            </div>
        `;
        this.contenedor.innerHTML = html;
        this.renderizarLineas(nivel.codigo);
    }

    renderizarLineas(codigo) {
        const area = document.getElementById('area-codigo');
        const lineas = codigo.split('\n');

        lineas.forEach((texto, i) => {
            const div = document.createElement('div');
            div.className = 'linea-codigo';
            div.onclick = () => this.verificarLinea(i + 1);
            div.innerHTML = `
                <span class="numero-linea">${i + 1}</span>
                <span style="white-space: pre;">${texto || ' '}</span>
            `;
            area.appendChild(div);
        });
    }

    verificarLinea(numero) {
        const nivel = this.datos.niveles[this.nivelActual];
        if (numero === nivel.lineaError) {
            this.puntuacion += 100;
            this.lanzarMensaje('¡Correcto!', nivel.explicacion, 'success');
        } else {
            this.lanzarMensaje('¡Vuelve a intentarlo!', 'Esa línea es correcta. Busca bien el error.', 'error', true);
        }
    }

    lanzarMensaje(titulo, mensaje, tipo, conPista = false) {
        const modal = document.createElement('div');
        modal.className = 'capa-modal';

        const nivel = this.datos.niveles[this.nivelActual];
        const esUltimo = this.nivelActual === this.datos.niveles.length - 1;

        modal.innerHTML = `
            <div class="caja-modal">
                <h2 style="font-size: 2.25rem; font-weight: 800; margin-bottom: 1rem; color: ${tipo === 'success' ? 'var(--color-esmeralda)' : 'white'}">${titulo}</h2>
                <p style="color: var(--color-text-dim); line-height: 1.6; margin-bottom: 2rem;">${mensaje}</p>
                <div class="flex centro gap-4">
                    ${conPista ? `<button class="boton-secundario" id="btn-pista">Pedir Pista</button>` : ''}
                    <button class="boton-principal" id="btn-sig" style="margin-top: 0;">${tipo === 'success' ? (esUltimo ? 'Ver Resultado' : 'Siguiente Nivel') : 'Intentar de nuevo'}</button>
                </div>
            </div>
        `;

        document.body.appendChild(modal);

        document.getElementById('btn-sig').onclick = () => {
            document.body.removeChild(modal);
            if (tipo === 'success') {
                if (esUltimo) {
                    this.estado = 'finalizado';
                } else {
                    this.nivelActual++;
                }
                this.dibujarCuerpo();
            }
        };

        if (conPista) {
            document.getElementById('btn-pista').onclick = () => {
                this.lanzarMensaje('Pista', nivel.pista, 'info');
            };
        }
    }

    mostrarPantallaFinal() {
        const porcentaje = Math.round((this.puntuacion / (this.datos.niveles.length * 100)) * 100);
        let mensaje = '';
        let emoji = '';
        
        if (porcentaje === 100) {
            mensaje = '¡Eres un auténtico Master! Dominio total del código.';
            emoji = '👑';
        } else if (porcentaje >= 70) {
            mensaje = '¡Muy buen trabajo! Tienes bases muy sólidas.';
            emoji = '⭐';
        } else {
            mensaje = '¡Sigue practicando! La excelencia se alcanza con tiempo.';
            emoji = '📚';
        }

        this.contenedor.innerHTML = `
            <div class="contenedor-quiz panel-cristal" style="text-align: center; padding: 4rem 2rem; animation: zoomIn 0.8s cubic-bezier(0.16, 1, 0.3, 1);">
                <div style="font-size: 6rem; margin-bottom: 2rem; filter: drop-shadow(0 0 30px var(--color-primary-glow));">${emoji}</div>
                <h2 style="font-size: 3.5rem; font-weight: 800; margin-bottom: 1rem; color: white;">${this.datos.titulo} Completado</h2>
                <p style="color: var(--color-text-dim); font-size: 1.25rem; margin-bottom: 3.5rem; max-width: 600px; margin-left: auto; margin-right: auto;">${mensaje}</p>
                
                <div style="background: rgba(255,255,255,0.02); border: 1px solid var(--color-border); border-radius: 2.5rem; padding: 3rem; display: inline-block; margin-bottom: 3.5rem; min-width: 320px;">
                    <div style="font-size: 0.85rem; color: var(--color-text-dim); font-weight: 800; letter-spacing: 0.2rem; margin-bottom: 1rem; text-transform: uppercase;">Puntuación Final</div>
                    <div style="font-size: 5rem; font-weight: 900; color: var(--color-primary); line-height: 1;">
                        ${this.puntuacion}
                    </div>
                    <div style="margin-top: 1.5rem; color: var(--color-text-dim); font-weight: 600; font-size: 1.1rem;">Precisión: <span style="color: white;">${porcentaje}%</span></div>
                </div>

                <div style="display: flex; gap: 1.5rem; justify-content: center;">
                    <button class="boton-principal" onclick="window.location.reload()" style="padding: 1rem 3rem;">Reintentar</button>
                    <button class="boton-secundario" onclick="window.location.href='quiz.html'" style="padding: 1rem 3rem;">Volver al menú</button>
                </div>
            </div>
        `;
    }
}

// Inicializador global
window.iniciarJuego = (lenguaje) => {
    new MotorQuiz(lenguaje);
};