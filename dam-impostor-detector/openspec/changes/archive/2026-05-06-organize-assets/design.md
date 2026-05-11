# Design: Organize Assets

## Technical Approach

We will create a standard assets folder named `img/` and move all character/background images there. The HTML structure will be updated to prefix all local image paths with `img/`.

## Architecture Decisions

### Decision: Folder Name

**Choice**: `img/`.
**Alternatives considered**: `assets/`, `images/`.
**Rationale**: `img/` is short, clear, and follows a common convention for web projects.

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `img/` | Create | New folder. |
| `*.jpeg`, `*.png` | Move | All local images moved to `img/`. |
| `detector.html` | Modify | Update `src` of `<img>` tags. |

## Testing Strategy

| Layer | What to Test | Approach |
|-------|-------------|----------|
| Manual | Broken Images | Visual check of the selection screen and result screen images. |
