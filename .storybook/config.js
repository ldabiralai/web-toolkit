import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobsOptions } from '@storybook/addon-knobs';
import { withBackgrounds } from '@storybook/addon-backgrounds';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider } from 'emotion-theming';
import styled from 'react-emotion';
import { theme, colors, injectStyles } from '../src';

injectStyles();

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.*.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

const StyledWrapper = styled.div`
  padding: 30px;
`;

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <StyledWrapper>{storyFn()}</StyledWrapper>
  </ThemeProvider>
);

addDecorator(ThemeDecorator);
addDecorator(
  withKnobsOptions({
    escapeHTML: false,
  })
);
addDecorator(
  withBackgrounds([
    { name: 'default', value: colors.brandPlus2, default: true },
    { name: 'coreLightMinus1', value: colors.coreLightMinus1 },
  ])
);

addDecorator(withInfo);

configure(loadStories, module);
