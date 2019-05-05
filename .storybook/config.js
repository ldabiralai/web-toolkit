import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { create } from '@storybook/theming';
import { ThemeProvider } from 'emotion-theming';
import styled from '@emotion/styled';
import { theme, colors, GlobalStyles } from '../src';

// automatically import all files ending in *.stories.js
const req = require.context('../src', true, /.*.stories.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  options: {
    theme: create({
      base: 'light',
      brandTitle: 'Web-Toolkit',
      brandUrl: 'https://github.com/EurosportDigital/web-toolkit',
    }),
    sortStoriesByKind: true,
  },
  backgrounds: [
    { name: 'default', value: colors.brandPlus2, default: true },
    { name: 'coreLightMinus1', value: colors.coreLightMinus1 },
  ],
  knobs: {
    escapeHTML: false,
  },
});

const { STORYBOOK_OVERRIDE_BG } = process.env;
const StyledWrapper = styled.div`
  background-color: ${() => (STORYBOOK_OVERRIDE_BG ? '#92b900' : 'inherit')};
  padding: 30px;
`;

const ThemeDecorator = storyFn => (
  <ThemeProvider theme={theme}>
    <GlobalStyles />
    <StyledWrapper>{storyFn()}</StyledWrapper>
  </ThemeProvider>
);

addDecorator(withInfo);
addDecorator(ThemeDecorator);
addDecorator(withKnobs);

configure(loadStories, module);
