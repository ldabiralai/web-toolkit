import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'emotion-theming';
import { theme, colors } from '../src';
import { withBackgrounds } from '@storybook/addon-backgrounds';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.*.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;

addDecorator(ThemeDecorator);
addDecorator(withKnobs);
addDecorator(withBackgrounds([
  { name: 'default', value: colors.ebony, default: true },
]));

configure(loadStories, module);
