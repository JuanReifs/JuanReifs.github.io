# Task Breakdown: DAM Impostor Detector

## Phase 1: Foundation
- [ ] **1.1 HTML Boilerplate**: Single-file structure with Tailwind CDN and Google Fonts.
- [ ] **1.2 Design System**: Define CSS custom properties for neon colors and animation keyframes (glitch, pulse).
- [ ] **1.3 State Management**: Initialize the global `GameState` object and the main `render()` function.

## Phase 2: Selection Screen
- [ ] **2.1 Group Cards**: Implement the 4 selection cards with their specific theme colors.
- [ ] **2.2 Interactive Effects**: Add hover glow, scale transforms, and click transitions.

## Phase 3: Quiz Logic & UI
- [ ] **3.1 Timer System**: 15s countdown logic with visual feedback (Green -> Yellow -> Red).
- [ ] **3.2 Question Engine**: Logic to shuffle questions and render them one by one.
- [ ] **3.3 Suspicion System**: Connect answer results to the "Sospechómetro" bar (+10% on fail, +20% on timeout).
- [ ] **3.4 Quiz Flow**: Transitions between questions and handling of the final answer.

## Phase 4: Final Screens & Polish
- [ ] **4.1 Victory Screen**: Implement "CÓDIGO ARTESANAL DETECTADO" with celebration effects.
- [ ] **4.2 Defeat Screen**: Implement "IMPOSTOR EYECTADO" with heavy glitch effects and red overlay.
- [ ] **4.3 Responsiveness**: Fine-tune layout for mobile and tablet views.
- [ ] **4.4 Final Audit**: Verify all 18 questions are functional and suspicion math is accurate.
