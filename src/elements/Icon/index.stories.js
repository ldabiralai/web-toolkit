import React from 'react';
import { storiesOf } from '@storybook/react';
import { select, number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { Icon } from '../../index';

const iconsStories = storiesOf('Icon', module);

iconsStories.add(
  'configurable',
  withInfo()(() => (
    <Icon type={select('Type', ['play', 'pause', 'E', 'E1', 'E2', 'E2NO', 'E2RUG', 'E2GR'], 'play')} height={number('Height', 50)} />
  ))
);
