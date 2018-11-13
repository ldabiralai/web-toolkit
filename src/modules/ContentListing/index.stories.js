import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object, select, text } from '@storybook/addon-knobs';
import { ContentListing, Cards } from '../..';

const contentListingStories = storiesOf('ContentListing', module);

const baseData = {
  img: 'https://i.eurosport.com/taiga/MagicBox/Crop/16_9/0_20180710-130536.jpeg?w=500',
  category: 'British superbike',
  title: 'World superbikes: Argentina',
  timestamp: '09:00 - 10:30',
  channel: 'E2NO',
  liveLabel: 'live',
};

const cardWithDescription = {
  ...baseData,
  description: 'Eurosport News',
};

contentListingStories.add(
  'Grid',
  withInfo()(() => (
    <ContentListing.Grid title={text('title', 'Articles list')}>
      <Cards.Content card={cardWithDescription} type={select('Type', ['vod', 'article', 'live'], 'article')} />
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
      <Cards.Content card={object('card', baseData)} type={select('Type', ['vod', 'article', 'live'], 'article')} />
    </ContentListing.Grid>
  ))
);
