# Technical Design: DAM Impostor Detector

## 🏗️ Architecture
- **Type**: Single Page Application (SPA).
- **Structure**: Single HTML file containing:
  - `<style>`: Tailwind CSS (via CDN) + Custom Neon/Glitch CSS.
  - `<body>`: Root `#app` container.
  - `<script>`: Game logic and state-based rendering.

## 🎨 Design System

### Color Tokens (CSS Variables)
```css
:root {
  --neon-cyan: #00fbff;
  --neon-gold: #ffcc00;
  --neon-red: #ff003c;
  --neon-green: #00ff41;
  --bg-black: #050505;
  --glass-bg: rgba(255, 255, 255, 0.05);
}
```

### Key Components
1. **Selection Screen**:
   - Grid layout (2x2 on desktop, 1x4 on mobile).
   - Cards with `hover:scale-105` and `box-shadow` glow effects.
2. **Quiz Screen**:
   - **Header**: Group name with the group's specific neon color.
   - **Suspicion Meter**: `div` with `transition-all duration-500`. Background color shifts to deeper red as it fills.
   - **Question Box**: Centered container with glassmorphism effect and neon border.
   - **Options**: Interactive buttons with hover sound simulation (visual).
3. **Animations**:
   - `glitch-anim`: Uses `clip-path` and horizontal offsets for a digital interference effect.
   - `pulse-glow`: Slow brightness animation for the suspicion bar.

## 🧠 JavaScript Logic

### State Management
```javascript
const GameState = {
  screen: 'selection', // 'selection', 'quiz', 'victory', 'defeat'
  suspicion: 0,
  selectedGroup: null,
  currentQuestionIndex: 0,
  questions: [], // Shuffled 10 questions
  timer: 15,
  timerId: null
};
```

### Core Functions
- `render()`: Main entry point for updating the DOM. Uses template literals for UI sections.
- `updateSuspicion(amount)`: Modifies suspicion level and checks for defeat condition (100%).
- `handleAnswer(isCorrect)`: Logic for processing answers, updating suspicion, and moving to the next question.
- `tick()`: Decrements timer every second; triggers timeout logic if it reaches 0.

## 📁 File Structure (Internal)
1. **Style Section**: CSS resets and custom neon classes.
2. **Data Section**: Array of 18 questions and 4 group definitions.
3. **Logic Section**: Game state, helper functions, and event listeners.
4. **Template Section**: String templates for different screens.
