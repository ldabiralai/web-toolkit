import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { storiesOf } from '@storybook/react';
import { Button, Link, theme } from '../src';
import { text } from '@storybook/addon-knobs';

const linkStories = storiesOf('Link', module);
const buttonStories = storiesOf('Button', module);

linkStories.add('with text', () => (
  <ThemeProvider theme={theme}>
    <Link href={text('href', 'goo.gl')}>{text('Label', 'Hello Link')}</Link>
  </ThemeProvider>
));

buttonStories.add('Primary', () => (
  <ThemeProvider theme={theme}>
    <Button type="primary">{text('Children', 'Primary')}</Button>
  </ThemeProvider>
));

buttonStories.add('Secondary', () => (
  <ThemeProvider theme={theme}>
    <Button type="secondary">{text('Children', 'Secondary')}</Button>
  </ThemeProvider>
));
