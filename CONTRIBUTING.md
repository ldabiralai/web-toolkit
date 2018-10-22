# Contributing

Each PR should have an approving review from one person from the other two teams.

## Requirements

1. Each component must have have an associated story for the storybook documentation.
2. Components should have at least a base snapshot test, along with unit tests for each conditional branch.
3. `PropTypes` are required, with a max of 2 levels of `shape` nesting.
4. Add `defaultProps` when necessary, for example if it fails to render without.
