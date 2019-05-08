import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { GoogleTagManager } from '../..';

const GoogleTagManagerStories = storiesOf('Components|GoogleTagManager', module);

GoogleTagManagerStories.add('configurable', () => (
  <GoogleTagManager googleTagManagerId={text('googleTagManagerId', '123456', 'GTM Id prop example')} />
));
