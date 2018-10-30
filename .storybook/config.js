import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../src';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.*.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const ThemeDecorator = storyFn => <ThemeProvider theme={theme}>{storyFn()}</ThemeProvider>;

addDecorator(ThemeDecorator);
addDecorator(withKnobs);

configure(loadStories, module);
