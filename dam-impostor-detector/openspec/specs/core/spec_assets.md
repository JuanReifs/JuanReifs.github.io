# Core Specification (Assets)

## Purpose
Defines the storage and referencing of visual assets.

## Requirements

### Requirement: Asset Encapsulation
The system MUST store all local image files within an `img/` directory.

#### Scenario: Image migration
- GIVEN the `img/` directory exists.
- WHEN image files are moved into it.
- THEN no image files MUST remain in the project root (except project configuration files).

### Requirement: Path Consistency
The application MUST reference images using relative paths to the `img/` directory.

#### Scenario: HTML path update
- GIVEN an image `test.png` moved to `img/`.
- WHEN the HTML contains `<img src="img/test.png">`.
- THEN the image MUST render correctly in the browser.
