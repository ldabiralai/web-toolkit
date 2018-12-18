import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select, object } from '@storybook/addon-knobs';
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
  channel: 'E1GB',
};

const vod = {
  ...base,
  description: null,
  timestamp: '01:33:28',
};

cardStories
  .add(
    'Content',
    withInfo({ propTablesExclude: [Wrapper] })(() => {
      const type = select('type', ['vod', 'article', 'live'], 'article');
      const card = object('card', data[type]);

      return (
        <Wrapper>
          <Cards.Content card={card} type={type} />
        </Wrapper>
      );
    })
  )
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
        <Cards.VodCard card={object('card', vod)} />
      </Wrapper>
    ))
  );
