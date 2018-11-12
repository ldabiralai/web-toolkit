import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { select, object } from '@storybook/addon-knobs';
import styled from 'react-emotion';
import { Cards } from '../../index';

const cardStories = storiesOf('Card', module);

const Wrapper = styled.div`
  max-width: 500px;
`;

const baseData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=500',
  url: 'http://www.eurosport.co.uk',
  category: 'Tennis',
  title: 'Klopp happy with Chelsea draw after good performance',
  description: 'Day 2',
  timestamp: '09:00 - 10:30',
  channel: 'E1',
};

cardStories.add(
  'Content Card',
  withInfo()(() => (
    <Wrapper>
      <Cards.Content card={object('card', baseData)} type={select('type', ['vod', 'article', 'live'], 'article')} />
    </Wrapper>
  ))
);
