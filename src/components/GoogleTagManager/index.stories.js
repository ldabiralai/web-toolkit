/* eslint-disable no-underscore-dangle */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { GoogleTagManager } from '../..';

const GoogleTagManagerStories = storiesOf('Components|GoogleTagManager', module).addDecorator(withInfo);

GoogleTagManagerStories.add('configurable', () => (
  <GoogleTagManager googleTagManagerId={text('googleTagManagerId', '123456', 'GTM Id prop example')} />
));
