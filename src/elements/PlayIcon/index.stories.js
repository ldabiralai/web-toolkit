import React from 'react';
import { storiesOf } from '@storybook/react';
import { number } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { PlayIcon } from '../../index';

const iconsStories = storiesOf('PlayIcon', module);

iconsStories.add(
  'configurable',
  withInfo()(() => (
    <PlayIcon height={number('Height', 50)} />
  ))
);
