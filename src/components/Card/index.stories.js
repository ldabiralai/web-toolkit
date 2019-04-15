import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object } from '@storybook/addon-knobs';
import styled from 'react-emotion';
import { Cards } from '../..';

const cardStories = storiesOf('Card', module);

const Wrapper = styled.div`
  max-width: 500px;
`;

const base = {
  img: 'https://i.eurosport.com/taiga/MagicBox/Crop/16_9/0_20180710-125830.jpeg?w=640',
  url: '/article/id',
  category: 'Tennis',
  title: 'Klopp happy with Chelsea draw after good performance',
  description: 'Day 2',
  timestamp: '09:00 - 10:30',
};

const data = {
  vod: base,
  live: {
    ...base,
    channel: 'E2NO',
    liveLabel: 'live',
  },
  article: base,
};

const schedule = {
  ...base,
  url: null,
  channel: 'E1GB',
};

const vod = {
  ...base,
  description: null,
  timestamp: '01:33:28',
  url: 'http://eurosport.co.uk',
};

const watchbar = {
  ...base,
  title: 'Darts: BDO World Championship',
  playerChannelNameAnalytics: 'eurosport-france',
  titleAnalytics: 'masters-1000-indian-wells',
  trackingPosition: 0,
  channel: 'E1FR',
  liveLabel: 'live',
  isLive: true,
  startTime: '14h00',
  endTime: '15h00',
};

const contentCardTypes = ['vod', 'article', 'live'];
contentCardTypes.forEach(type => {
  cardStories.add(
    `ContentCard - ${type}`,
    withInfo({ propTablesExclude: [Wrapper] })(() => {
      const card = object('card', data[type]);
      return (
        <Wrapper>
          <Cards.Content card={card} type={type} />
        </Wrapper>
      );
    })
  );
});

cardStories
  .add(
    'Schedule',
    withInfo({ propTablesExclude: [Wrapper] })(() => (
      <Wrapper>
        <Cards.Schedule card={object('card', schedule)} />
      </Wrapper>
    ))
  )
  .add(
    'Vod Compact',
    withInfo({ propTablesExclude: [Wrapper] })(() => (
      <Wrapper>
        <Cards.VodCompact card={object('card', vod)} />
      </Wrapper>
    ))
  )
  .add(
    'Watchbar',
    withInfo({ propTablesExclude: [Wrapper] })(() => (
      <Wrapper>
        <Cards.Watchbar
          card={object('card', watchbar)}
          trackingPosition={object('trackingPosition', watchbar.trackingPosition)}
        />
      </Wrapper>
    ))
  );
