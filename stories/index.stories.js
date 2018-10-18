import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { storiesOf } from '@storybook/react';
import { Button, Link, theme } from '../src';

storiesOf('Link', module).add('with text', () => (
  <ThemeProvider theme={theme}>
    <Link href="goo.gl">Hello Link</Link>
  </ThemeProvider>
));
storiesOf('Button', module).add('with text', () => <Button>Hello Button</Button>);
