import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { ChannelLogo } from '../src';

const channelLogoStories = storiesOf('ChannelLogo', module);

channelLogoStories.add(
  'configurable',
  withInfo()(() => (
    <ChannelLogo channel={select('Channel', ['E', 'E1', 'E2'], 'E')} height={number('Height', 50)} />
  ))
);
