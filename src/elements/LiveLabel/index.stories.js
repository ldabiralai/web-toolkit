import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { LiveLabel } from '../..';

storiesOf('Elements|LiveLabel', module).add('default', withInfo()(() => <LiveLabel>● LIVE</LiveLabel>));
