# Proposal: DAM Impostor Detector

## 🎯 Goal
Create an interactive "Impostor Detector" game for DAM students.
Theme: **Among Us + Cyberpunk**.
Format: **Single-file HTML/CSS/JS**.

## 🎨 UI Structure
- **Screen 1: Group Selection**
  - 4 cards (Casino Royale, Cyber-Olympics, Escape Luismi, DevConnect).
  - Hover: Neon glow corresponding to group theme.
  - Transition: Smooth fade/glitch transition to quiz.
- **Screen 2: Technical Quiz**
  - 10 randomized questions (Frontend & Systems).
  - Timer: 15s countdown with pulsing effect.
  - "Sospechómetro": A red progress bar that fills on errors/timeout.
- **Screen 3: Results**
  - **Victory**: "CÓDIGO ARTESANAL DETECTADO".
  - **Defeat**: "IMPOSTOR EYECTADO".

## 🛠️ Technical Implementation
- **Layout**: Tailwind CSS (CDN).
- **Icons/Graphics**: Custom CSS gradients, SVG, and Google Fonts (Orbitron, Rajdhani).
- **State Management**: Simple JavaScript object `GameState` to track `currentScreen`, `suspicionScore`, `selectedGroup`, and `remainingTime`.
- **Assets**: All graphics generated via CSS/SVG to keep it in one file.

## ⚠️ Risks
- **Asset Size**: Keeping it in one file means we avoid large external images.
- **Animation Performance**: Heavy neon filters can be slow on older browsers; will use hardware-accelerated transforms.

## 🚀 Next Steps
Proceed to `sdd-spec` to define the specific question bank and exact suspicion math.
