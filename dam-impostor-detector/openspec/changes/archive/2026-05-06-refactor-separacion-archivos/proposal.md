# Proposal: File Separation Refactor

## Intent

The current project structure combines HTML, CSS, and JavaScript into a single `detector.html` file. This proposal aims to professionalize the codebase by separating these concerns into external files (`style.css` and `script.js`). This will improve maintainability, readability, and follow modern web development best practices.

## Scope

### In Scope
- Extract all CSS from `<style>` tags in `detector.html` into a new `style.css` file.
- Extract all JavaScript from `<script>` tags in `detector.html` into a new `script.js` file.
- Update `detector.html` to link these external files and remove the internal blocks.
- Update `openspec/config.yaml` to remove the rule that mandates a single-file structure.

### Out of Scope
- Changing any functionality of the game.
- Updating the UI design or styling beyond the separation.
- Changing the tech stack (e.g., adding a bundler).

## Approach

1. **Extraction**: Identify and copy the CSS and JS blocks from `detector.html`.
2. **File Creation**: Create `style.css` and `script.js` with the extracted content.
3. **HTML Update**: Replace the `<style>` and `<script>` blocks in `detector.html` with `<link rel="stylesheet" href="style.css">` and `<script src="script.js" defer></script>`.
4. **Config Update**: Modify `openspec/config.yaml` to reflect the new architecture.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `detector.html` | Modified | Internal CSS/JS removed, links added. |
| `style.css` | New | External stylesheet. |
| `script.js` | New | External script file. |
| `openspec/config.yaml` | Modified | Rule "Maintain single-file structure" removed. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Broken paths | Low | Use relative paths and verify in browser. |
| Global scope issues | Low | The code already uses global functions/variables; moving them to a script file (not a module) preserves this. |

## Rollback Plan

1. Delete `style.css` and `script.js`.
2. Restore `detector.html` to its original state (containing internal blocks).
3. Restore `openspec/config.yaml`.

## Dependencies

- None.

## Success Criteria

- [ ] `detector.html` no longer contains internal `<style>` or `<script>` blocks (except for CDN links).
- [ ] The application remains fully functional in the browser.
- [ ] `openspec/config.yaml` is updated to allow multi-file structure.
