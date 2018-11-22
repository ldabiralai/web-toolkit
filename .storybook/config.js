import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobsOptions } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { ThemeProvider } from 'emotion-theming';
import { theme, colors, injectStyles } from '../src';

injectStyles();

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.*.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;

addDecorator(ThemeDecorator);
addDecorator(
  withKnobsOptions({
    escapeHTML: false,
  })
);
addDecorator(
  withBackgrounds([{ name: 'default', value: colors.ebony, default: true }, { name: 'white', value: colors.white }])
);

configure(loadStories, module);
