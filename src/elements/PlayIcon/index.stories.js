import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { PlayIcon } from '../..';

const iconsStories = storiesOf('PlayIcon', module);

iconsStories
  .add(
    'Encircled',
    withInfo()(() => (
      <PlayIcon.PlayIcon
        height={number('Height', 50)}
        isLoading={boolean('isLoading', false)}
        withHoverState={boolean('withHoverState', false)}
      />
    ))
  )
  .add('Simple', withInfo()(() => <PlayIcon.PlayIconSimple height={number('Height', 50)} />));
