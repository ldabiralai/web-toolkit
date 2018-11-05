import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object, select } from '@storybook/addon-knobs';
import { ContentListing, Cards } from '../..';

const contentListingStories = storiesOf('ContentListing', module);

const baseData = {
  img: 'https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=500',
  title: 'Tennis',
  description: 'Klopp happy with Chelsea draw after good performance',
  timestamp: '09:00 - 10:30',
  channel: 'e1',
};

contentListingStories.add(
  'Grid',
  withInfo()(() => (
    <ContentListing.Grid>
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
    </ContentListing.Grid>
  ))
);
