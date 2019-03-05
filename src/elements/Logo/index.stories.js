import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { boolean } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { Logo } from '../..';

storiesOf('Logo', module).add('configurable', withInfo()(() => <Logo small={boolean('small', true)} />));
