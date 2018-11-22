import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Logo } from '../..';

storiesOf('Logo', module).add('default', withInfo()(() => <Logo />));
