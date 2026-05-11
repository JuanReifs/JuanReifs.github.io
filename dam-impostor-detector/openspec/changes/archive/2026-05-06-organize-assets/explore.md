## Exploration: Organize Assets

### Current State
All image assets are currently located in the project root directory. These include:
- `casinoroyale.jpeg`
- `cyberolimpics.jpeg`
- `derrota_skynet.png`
- `error404.jpeg`
- `escapedeluismi.jpeg`
- `sospecha_matrix.png`
- `sospecha_robot.png`

These images are referenced in:
- `detector.html` (for group selection cards).
- `script.js` (for result screens, although currently the script seems to toggle visibility of containers that have the images in HTML).
  Wait, let me check `script.js` again.

### Affected Areas
- `detector.html` — Update `<img>` src paths.
- `script.js` — Update any dynamic image paths (if any).
- `assets/` — [NEW] Directory to hold all images.

### Approaches
1. **Move to `assets/` folder** — Create an `assets` directory and move all images there. Update paths in HTML/JS.
   - Pros: Standard project organization.
   - Cons: None.
   - Effort: Low

### Recommendation
Create an `assets/` folder and move all local images into it.

### Risks
- Broken images if paths are not updated correctly in both HTML and JS.

### Ready for Proposal
Yes.
