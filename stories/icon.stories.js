import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Icon } from '../src';

const iconsStories = storiesOf('Icon', module);

iconsStories.add(
  'configurable',
  withInfo()(() => (
    <Icon type={select('Type', ['play', 'pause', 'E', 'E1', 'E2'], 'play')} height={number('Height', 50)} />
  ))
);
