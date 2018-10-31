import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Cards } from '../src';
import styled from 'react-emotion';

const cardStories = storiesOf('Card', module);

const Wrapper = styled('div')`
  max-width: 200px;
`;

cardStories.add(
  'Article Card',
  withInfo()(() => (
    <Wrapper><Cards.Article /></Wrapper>
  ))
).add(
  'VOD Card',
  withInfo()(() => (
    <Wrapper><Cards.Vod /></Wrapper>
  ))
).add(
  'LIVE Card',
  withInfo()(() => (
      <Wrapper><Cards.Vod live/></Wrapper>
  ))
);
