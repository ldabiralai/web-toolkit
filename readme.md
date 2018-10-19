Directory structure follows atomic design:
- src/atoms
- src/molecules
- src/organisms

Decisions:
- Public github repo
- Public NPM module that contains all components
- PR review from one person from both other teams
- Versioned using semver

Todo:
- Update version and publish automatically on circleci
- Visual regression
- Deploy storybook
- Deploy storybook per pr
- Fix webpack or externalise react in parcel
- Test treeshaking is working as intended with multiple components
- Refactor test setup to have 1 file with adaptor/enzyme
- Improve storybook Info for propTypes description
