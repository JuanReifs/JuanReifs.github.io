# Specification: DAM Impostor Detector

## Project Overview
A Single Page Application (SPA) inspired by Among Us and Cyberpunk, designed to test technical knowledge and detect "impostors" who rely too much on AI.

## Visual Design
- **Theme**: Dark Mode, Cyberpunk Neon.
- **Colors**:
  - Background: `#050505`
  - Neon Cyan: `#00f2ff` (Cyber-Olympics)
  - Neon Magenta: `#ff00ff` (UI Accents)
  - Neon Yellow/Gold: `#ffd700` (Casino Royale)
  - Neon Green: `#39ff14` (DevConnect)
  - Danger Red: `#ff0033` (Escape Luismi & Suspicion)
- **Typography**: Futuristic sans-serif (e.g., 'Orbitron' via Google Fonts).
- **Animations**:
  - Glitch effect on incorrect answers and screen transitions.
  - Pulsing "Sospechómetro" when suspicion is >70%.

## Gameplay Logic
- **Game Length**: 10 random questions per session.
- **Time Limit**: 15 seconds per question.
- **Suspicion System**:
  - Base: 0%.
  - Correct Answer: +0%.
  - Incorrect Answer: +10% suspicion.
  - Timeout: +20% suspicion.
  - **Threshold**: 100% suspicion results in immediate "Ejected" (Defeat).

## User Journey Scenarios

### Scenario: Selecting a Group
**Given** the user is on the Initial Screen
**When** the user clicks on the "CASINO ROYALE" card
**Then** the UI should show a glitch transition
**And** the Quiz screen should appear with the title "Grupo: CASINO ROYALE"

### Scenario: Correct Answer
**Given** a question is displayed
**When** the user selects the correct answer
**Then** the "Sospechómetro" should remain unchanged
**And** the next question should be displayed after a brief success animation

### Scenario: Incorrect Answer
**Given** a question is displayed
**When** the user selects a wrong answer
**Then** the "Sospechómetro" should increase by 10%
**And** a red glitch effect should flash on the screen
**And** the next question should be displayed

### Scenario: Timeout
**Given** a question is displayed
**When** 15 seconds pass without an answer
**Then** the "Sospechómetro" should increase by 20%
**And** the game should auto-advance to the next question with a warning effect

### Scenario: Victory
**Given** the user has answered 10 questions
**And** the "Sospechómetro" is below 100%
**When** the last question is processed
**Then** the Victory screen should be shown ("CÓDIGO ARTESANAL DETECTADO")

### Scenario: Defeat
**Given** the "Sospechómetro" is at 90%
**When** the user fails a question or times out
**Then** the "Sospechómetro" should reach 100%
**And** the Defeat screen should be shown ("IMPOSTOR EYECTADO")

## Question Bank (18 Questions)
1. **Sistemas**: ¿Resultado XOR 1, 1? (0)
2. **Sistemas**: Binario 1010 -> Decimal (10)
3. **Sistemas**: ¿Componente para operaciones aritméticas? (CPU)
4. **Sistemas**: Binario 1111 -> Decimal (15)
5. **Sistemas**: ¿Puerta que da 1 solo si entradas son 0? (NOR)
6. **Frontend**: Selector ID (#)
7. **Frontend**: Alineación eje principal Flexbox (justify-content)
8. **Frontend**: Añadir escuchador eventos (addEventListener)
9. **Frontend**: Obtener elemento por clase (querySelectorAll / getElementsByClassName)
10. **Frontend**: Valor 'display' por defecto de <div> (block)
11. **Sistemas**: ¿Bits en un Byte? (8)
12. **Frontend**: Color de fondo (background-color)
13. **Sistemas**: Inversa de AND (NAND)
14. **Frontend**: Mensaje en consola (console.log)
15. **Sistemas**: Memoria volátil (RAM)
16. **Frontend**: Etiqueta para JS (<script>)
17. **Sistemas**: Puerta que invierte valor (NOT)
18. **Sistemas**: Decimal 15 -> Binario (1111)

## Group Definitions
- **CASINO ROYALE**: Vitalii, Ruben, Stefan, Ricardo. (Theme: Luxury/Gold)
- **CYBER-OLYMPICS**: Iván Martínez, Pablo Rodríguez, Izan García. (Theme: Tech-Sports/Cyan)
- **ESCAPE LUISMI**: Bilal, Adrian, Youssef, Victor. (Theme: Terror/Red)
- **DEVCONNECT**: Juan, Iván, Cristopher. (Theme: Social-Network/Green)
