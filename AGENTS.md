# AGENTS.md - Guía para el Proyecto RedSocial (DevPulse)

Este archivo contiene las directrices fundamentales para cualquier agente de IA que trabaje en este repositorio.

## 🎯 Objetivo General
Mantener una plataforma de aprendizaje (Quiz) y red social minimalista, rápida y con una estética premium "Glassmorphism".

## 🛠️ Tecnologías y Reglas Técnicas
- **Lenguaje:** HTML5, CSS3 y JavaScript Vanilla (ES6+).
- **CERO Librerías:** No se permiten frameworks (React, Vue) ni librerías externas (Tailwind, SweetAlert2, Google Fonts).
- **Fuentes:** Usar la pila de fuentes del sistema nativa. No añadir links externos de fuentes.
- **Rutas:** Las imágenes deben residir en la carpeta `imagenes/`.

## 🎨 Guía de Estilo (Glassmorphism Dark)
- **Fondo:** `#0a0b10` o variables de `style.css`.
- **Efectos:** Usar `backdrop-filter: blur(12px)` para elementos flotantes.
- **Bordes:** `border: 1px solid rgba(255, 255, 255, 0.1)`.
- **Botones:** Estilo "Pill-shaped" (totalmente redondeados) con efectos de hover sutiles.

## 🏷️ Branding y Contenido
- **Nombre de Marca:** El proyecto debe identificarse siempre como **DevPulse**.
- **Quiz:** Actualmente soporta 4 lenguajes: Java, Python, C++ y JavaScript.

## 🧠 Integración con Engram y SDD
- Este proyecto utiliza **Agent Teams Lite** para la ejecución de tareas.
- La memoria persistente se gestiona mediante **Engram**.
