import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { boolean, select, object } from '@storybook/addon-knobs';
import { Cards } from '../src';
import styled from 'react-emotion';

const cardStories = storiesOf('Card', module);

const Wrapper = styled('div')`
  max-width: 200px;
`;

const baseData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200',
  title: 'Tennis',
  description: 'Klopp happy with Chelsea draw after good performance',
  timestamp: '09:00 - 10:30',
  channel: 'E1',
};


cardStories.add(
  'Content Card',
  withInfo()(() => (
    <Wrapper>
      <Cards.Content
        card={object('object', baseData)}
        type={select('Type', ['vod', 'article', 'live'], 'article')}
      />
    </Wrapper>
  ))
);
