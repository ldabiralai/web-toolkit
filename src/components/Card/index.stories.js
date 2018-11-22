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

const baseData = {
  img: 'https://i.eurosport.com/taiga/MagicBox/Crop/16_9/0_20180710-125830.jpeg?w=640',
  url: '/article/id',
  category: 'Tennis',
  title: 'Klopp happy with Chelsea draw after good performance',
  description: 'Day 2',
  timestamp: '09:00 - 10:30',
  channel: 'E2NO',
  liveLabel: 'live',
};

cardStories.add(
  'Content Card',
  withInfo({ propTablesExclude: [Wrapper] })(() => (
    <Wrapper>
      <Cards.Content card={object('card', baseData)} type={select('type', ['vod', 'article', 'live'], 'article')} />
    </Wrapper>
  ))
);
