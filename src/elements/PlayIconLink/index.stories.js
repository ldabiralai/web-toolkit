import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, color } from '@storybook/addon-knobs';
import { withInfo } from '@storybook/addon-info';
import { PlayIconLink } from '../..';

const iconsStories = storiesOf('Elements|PlayIconLink', module);

iconsStories.add(
  'default',
  withInfo()(() => (
    <PlayIconLink
      bgColorIcon={color('BgColorIcon', '#4652ff')}
      bgColorText={color('bgColorText', '#3c46dc')}
      href={text('href', 'http://eurosport.fr')}
      target={text('target', '')}
    >
      {text('Link Text', 'Replay ')}
    </PlayIconLink>
  ))
);
