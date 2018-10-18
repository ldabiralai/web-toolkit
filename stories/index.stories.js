import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { storiesOf } from '@storybook/react';
import { Button, Link, theme } from '../src';

storiesOf('Link', module).add('with text', () => (
  <ThemeProvider theme={theme}>
    <Link href="goo.gl">Hello Link</Link>
  </ThemeProvider>
));
storiesOf('Button', module)
  .add('Primary', () => (
    <ThemeProvider theme={theme}>
      <Button type="primary">Primary</Button>
    </ThemeProvider>
  ))
  .add('Secondary', () => (
    <ThemeProvider theme={theme}>
      <Button type="secondary">Secondary</Button>
    </ThemeProvider>
  ));
