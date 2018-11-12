import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object, select, text } from '@storybook/addon-knobs';
import { ContentListing, Cards } from '../..';

const contentListingStories = storiesOf('ContentListing', module);

const baseData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=500',
  category: 'British superbike',
  title: 'World superbikes: Argentina',
  description: 'Eurosport News',
  timestamp: '09:00 - 10:30',
  channel: 'E2NO',
};

contentListingStories.add(
  'Grid',
  withInfo()(() => (
    <ContentListing.Grid title={text('title', 'Articles list')}>
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
    </ContentListing.Grid>
  ))
);
