import React from 'react';
import { storiesOf } from '@storybook/react';
import { Logo } from '../..';

storiesOf('Elements|Logo', module)
  .add('normal', () => <Logo small={false} />)
  .add('small', () => <Logo small />);
