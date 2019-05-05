import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { ChannelIcon } from '../..';

const iconsStories = storiesOf('Elements|ChannelIcon', module);

const iconTypes = ['', 'E1*', 'E2*', 'E2NO', 'E2RUG', 'E2GR'];

iconTypes.forEach(type => {
  iconsStories.add(`ChannelIcon${type ? ` - ${type}` : ''}`, () => (
    <ChannelIcon type={type} height={number('Height', 50)} />
  ));
});
