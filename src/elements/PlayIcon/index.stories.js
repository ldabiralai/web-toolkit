import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { PlayIcon } from '../..';

const iconsStories = storiesOf('PlayIcon', module);

iconsStories.add(
  'configurable',
  withInfo()(() => <PlayIcon height={number('Height', 50)} isLoading={boolean('isLoading', false)} />)
);
