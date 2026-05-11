# Design: File Separation Refactor

## Technical Approach

The goal is to move internal CSS and JavaScript from `detector.html` to separate files (`style.css` and `script.js`). This involves:
1. Creating `style.css` with the contents of the `<style>` tag.
2. Creating `script.js` with the contents of the `<script>` tag.
3. Modifying `detector.html` to link these files.
4. Updating `openspec/config.yaml` to remove the architectural constraint that enforced a single-file structure.

This approach ensures a cleaner `detector.html` and better separation of concerns without changing the game logic or visual design.

## Architecture Decisions

### Decision: External Script Scope

**Choice**: Use a standard `<script>` tag without `type="module"`.
**Alternatives considered**: Using ES Modules (`type="module"`).
**Rationale**: The current JavaScript in `detector.html` relies on global function declarations (e.g., `empezarMambo`, `volverAlInicio`) that are called from `onclick` attributes in the HTML. Using `type="module"` would scope these functions to the module and break the `onclick` handlers unless they were manually attached in JS. To minimize changes and maintain compatibility with the existing HTML structure, a standard script file is preferred.

### Decision: Project Configuration Update

**Choice**: Remove the "Maintain single-file structure" rule from `openspec/config.yaml`.
**Alternatives considered**: Keeping the rule but adding an exception.
**Rationale**: The user has explicitly requested the separation, so the project's architectural guidelines should be updated to reflect this shift in preference.

## Data Flow

The data flow remains unchanged. The HTML events trigger functions in the external JS, which updates the DOM and the state object `EstDelCot`.

    HTML UI (Events) ──→ script.js (Logic/State) ──→ DOM (Updates)

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `style.css` | Create | Contains extracted styles from `detector.html`. |
| `script.js` | Create | Contains extracted logic from `detector.html`. |
| `detector.html` | Modify | Remove internal `<style>` and `<script>` blocks; add `<link>` and `<script src>`. |
| `openspec/config.yaml` | Modify | Remove line 22 ("Maintain single-file structure"). |

## Interfaces / Contracts

No new interfaces are introduced. The existing functions and global state (`EstDelCot`) are preserved.

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Manual | UI Appearance | Verify that the page looks identical to the original version. |
| Manual | Game Logic | Run through a full quiz session (start, answer, see results) to ensure all JS functions are still correctly linked and executing. |

## Migration / Rollout

No migration required. The change is a direct replacement of the single-file structure.

## Open Questions

None.
