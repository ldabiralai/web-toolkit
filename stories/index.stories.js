import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Button, Link, theme } from '../src';

const linkStories = storiesOf('Link', module);
const buttonStories = storiesOf('Button', module);

linkStories.add(
  'with text',
  withInfo()(() => (
    <ThemeProvider theme={theme}>
      <Link href={text('href', 'goo.gl')}>{text('Label', 'Hello Link')}</Link>
    </ThemeProvider>
  ))
);

buttonStories.add(
  'Primary',
  withInfo()(() => (
    <ThemeProvider theme={theme}>
      <Button type="primary">{text('Children', 'Primary')}</Button>
    </ThemeProvider>
  ))
);

buttonStories.add(
  'Secondary',
  withInfo()(() => (
    <ThemeProvider theme={theme}>
      <Button type="secondary">{text('Children', 'Secondary')}</Button>
    </ThemeProvider>
  ))
);
