import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object } from '@storybook/addon-knobs';
import styled from 'react-emotion';
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

const StyledTitle = styled.div`
  border-bottom: 1px solid rgba(242, 243, 245, 0.3);
  text-transform: uppercase;
  margin: 0 15px 0 0;
  padding-bottom: 6px;
  font-size: 0.875rem;
  color: #f2f3f5;
  width: 100px;
  user-select: none;
`;

indexStories.add(
  'Carousel',
  withInfo()(() => (
    <Carousel>
      <StyledTitle>En direct sur Eurosport Player</StyledTitle>
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
