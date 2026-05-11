# Core Specification

## Purpose
Defines the core architecture and file structure of the DAM Impostor Detector project.

## Requirements

### Requirement: External CSS Separation
The system MUST move all internal CSS styles from `detector.html` to a dedicated `style.css` file.

#### Scenario: Styles are loaded from external file
- GIVEN `detector.html` contains no `<style>` tags with internal content.
- WHEN the page is loaded in the browser.
- THEN the visual appearance MUST remain identical to the single-file version.

### Requirement: External JavaScript Separation
The system MUST move all internal JavaScript logic from `detector.html` to a dedicated `script.js` file.

#### Scenario: Logic is loaded from external file
- GIVEN `detector.html` contains no `<script>` tags with internal content (excluding CDN links).
- WHEN the user interacts with the application.
- THEN all features (start quiz, answer questions, suspicion meter, results) MUST function correctly.

### Requirement: Multi-file Structure Support
The project configuration MUST allow for a multi-file architecture.

#### Scenario: Rule update
- GIVEN `openspec/config.yaml` is updated.
- WHEN checking the project rules.
- THEN the "Maintain single-file structure" rule MUST NOT exist.

### Requirement: HTML Integration
The `detector.html` file MUST correctly reference the new external files.

#### Scenario: Correct linking
- GIVEN `style.css` and `script.js` exist in the same directory as `detector.html`.
- WHEN `detector.html` is rendered.
- THEN it MUST include `<link rel="stylesheet" href="style.css">` and `<script src="script.js" defer></script>`.
