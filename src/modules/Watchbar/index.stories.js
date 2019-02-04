import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import WatchBar from '.';

const indexStories = storiesOf('WatchBar', module);

const base = {
  img: 'https://i.eurosport.com/taiga/MagicBox/Crop/16_9/0_20180710-125830.jpeg?w=640',
  url: '/article/id',
  category: 'Tennis',
  title: 'Klopp happy with Chelsea draw after good performance',
  description: 'Day 2',
  timestamp: '09:00 - 10:30',
};

const watchbarCard = {
  ...base,
  title: 'Darts: BDO World Championship',
  channel: 'E1FR',
  liveLabel: 'live',
  isLive: true,
  startTime: '09:00',
  endTime: '10:00',
};

const cards = [];
for (let i = 0; i < 2; i += 1) {
  cards.push(watchbarCard);
}

indexStories.add('WatchBar', withInfo()(() => <WatchBar cards={cards} title="Next on Eurosport"/>));
