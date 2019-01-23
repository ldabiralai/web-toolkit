import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object } from '@storybook/addon-knobs';
import Carousel from '.';
import WatchbarCard from '../Card/WatchbarCard';

const indexStories = storiesOf('Carousel', module);

const base = {
  img: 'https://i.eurosport.com/taiga/MagicBox/Crop/16_9/0_20180710-125830.jpeg?w=640',
  url: '/article/id',
  category: 'Tennis',
  title: 'Klopp happy with Chelsea draw after good performance',
  description: 'Day 2',
  timestamp: '09:00 - 10:30',
};

const watchbar = {
  ...base,
  title: 'Darts: BDO World Championship',
  channel: 'E1FR',
  liveLabel: 'live',
  isLive: true,
};

indexStories.add(
  'Carousel',
  withInfo()(() => (
    <Carousel>
      <WatchbarCard card={object('card', watchbar)} />
      <WatchbarCard card={object('card', watchbar)} />
      <WatchbarCard card={object('card', watchbar)} />
      <WatchbarCard card={object('card', watchbar)} />
      <WatchbarCard card={object('card', watchbar)} />
      <WatchbarCard card={object('card', watchbar)} />
      <WatchbarCard card={object('card', watchbar)} />
      <WatchbarCard card={object('card', watchbar)} />
      <WatchbarCard card={object('card', watchbar)} />
    </Carousel>
  ))
);
