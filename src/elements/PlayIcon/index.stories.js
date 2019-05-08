import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import { PlayIcon } from '../..';

const iconsStories = storiesOf('Elements|PlayIcon', module);

iconsStories.add('configurable', () => (
  <PlayIcon
    height={number('Height', 50)}
    isLoading={boolean('isLoading', false)}
    withHoverState={boolean('withHoverState', false)}
  />
));
