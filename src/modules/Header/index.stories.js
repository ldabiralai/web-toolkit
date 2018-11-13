import { withInfo } from '@storybook/addon-info';
import React from 'react';
import { storiesOf } from '@storybook/react';
import { Header } from '../..';

storiesOf('Header', module).add('default', withInfo()(() => <Header />));
