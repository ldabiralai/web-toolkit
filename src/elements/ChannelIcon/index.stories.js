import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { ChannelIcon } from '../..';

const iconsStories = storiesOf('ChannelIcon', module);

iconsStories.add(
  'configurable',
  withInfo()(() => (
    <ChannelIcon type={select('Type', ['', 'E1*', 'E2*', 'E2NO', 'E2RUG', 'E2GR'], '')} height={number('Height', 50)} />
  ))
);
