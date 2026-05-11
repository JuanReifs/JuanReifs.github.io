# Proposal: Organize Assets

## Intent

The project currently has all image assets in the root directory, which leads to clutter as the number of assets increases. This proposal aims to move all image files to a dedicated `img/` directory to improve project structure and organization.

## Scope

### In Scope
- Create an `img/` directory.
- Move all local image assets (`.png`, `.jpeg`) to the `img/` directory.
- Update all image references in `detector.html` to point to the new location.

### Out of Scope
- Changing the images themselves.
- Updating remote images (URLs).

## Approach

1. **Folder Creation**: Create the `img/` directory.
2. **File Migration**: Move the identified image files into `img/`.
3. **HTML Path Update**: Update the `src` attributes of `<img>` tags in `detector.html` from `filename.ext` to `img/filename.ext`.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| Project Root | Modified | Images moved out. |
| `img/` | New | New directory for assets. |
| `detector.html` | Modified | Image paths updated. |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Missing paths | Low | Perform a global search for image extensions in HTML. |

## Rollback Plan

1. Move images back to the root directory.
2. Revert changes in `detector.html`.
3. Delete the `img/` directory.

## Dependencies

- None.

## Success Criteria

- [ ] All local image files are located in `img/`.
- [ ] No images are broken when viewing the application in the browser.
