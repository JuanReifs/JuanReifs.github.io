# Tasks: File Separation Refactor

## Phase 1: Configuration Update

- [x] 1.1 Update `openspec/config.yaml` to remove the "Maintain single-file structure" rule (line 22).

## Phase 2: File Creation

- [x] 2.1 Create `style.css` with the CSS content extracted from the `<style>` block in `detector.html`.
- [x] 2.2 Create `script.js` with the JavaScript content extracted from the `<script>` block in `detector.html`.

## Phase 3: HTML Refactor

- [x] 3.1 Modify `detector.html` to remove the internal `<style>` block and add `<link rel="stylesheet" href="style.css">`.
- [x] 3.2 Modify `detector.html` to remove the internal `<script>` block and add `<script src="script.js" defer></script>`.

## Phase 4: Verification

- [x] 4.1 Verify visual appearance in the browser (Scenario: Styles are loaded from external file).
- [x] 4.2 Verify game functionality (Scenario: Logic is loaded from external file).
    - Start a game.
    - Answer questions correctly and incorrectly.
    - Check the suspicion meter updates.
    - Reach the results screen.
