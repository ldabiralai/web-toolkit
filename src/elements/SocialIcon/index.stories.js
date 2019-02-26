import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, radios } from '@storybook/addon-knobs';

import SocialIcon from './index';

const indexStories = storiesOf('SocialIcon', module);

indexStories.add('configurable', () => (
  <SocialIcon
    iconType={radios('iconType', ['facebook', 'twitter', 'snapchat', 'instagram'], 'snapchat')}
    iconText={text('iconText', 'your icon text goes here')}
  />
));
