import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Cards } from '../src';

const cardStories = storiesOf('Card', module);

cardStories.add(
  'Article Card',
  withInfo()(() => (
    <Cards.Article />
  ))
).add(
  'VOD Card',
  withInfo()(() => (
    <Cards.Vod />
  ))
).add(
  'LIVE Card',
  withInfo()(() => (
    <Cards.Vod live/>
  ))
);
