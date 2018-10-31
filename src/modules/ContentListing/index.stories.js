import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'react-emotion';
import { ContentListing } from '../..';

const contentListingStories = storiesOf('ContentListing', module);

const StyledCard = styled('div')`
  color: white;
  background-color: red;
`;

contentListingStories.add(
  'Grid',
  withInfo()(() => (
    <ContentListing.Grid>
      <StyledCard>
        Card1
        <br />
        Card1
        <br />
        Card1
        <br />
        Card1
        <br />
        Card1
      </StyledCard>
      <StyledCard>Card2</StyledCard>
      <StyledCard>Card3</StyledCard>
      <StyledCard>Card4</StyledCard>
      <StyledCard>Card5</StyledCard>
    </ContentListing.Grid>
  ))
);
