import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './base';
import Heading from '../../elements/Heading';
import Text from '../../elements/Text';
import ChannelLogo from '../../elements/ChannelLogo';
import styled, { css } from 'react-emotion';

const base = css`
  color: goldenrod;
`;

const StyledHeading = styled(Heading)`
  ${base}
  text-transform: uppercase;
  font-size: 1em;
  letter-spacing: 0.2em;
`;

const ContentDescription = styled(Text)`
  font-weight: bold;
`;

const TimeStamp = styled(Text)`
  display: inline;
`;


const ArticleCard = () => (
  <Card>
    <CardHeader>
      <img src="https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200" />
    </CardHeader>
    <CardContent>
      <StyledHeading as="h1">Heading</StyledHeading>
      <ContentDescription>Lorem ipsum dolor sit.</ContentDescription>
    </CardContent>
    <CardFooter>
      <ChannelLogo height='20' channel='E2' />
      <TimeStamp>15:00 - 16:00</TimeStamp>
    </CardFooter>
  </Card>
);

ArticleCard.displayName = 'ArticleCard';

export default ArticleCard;
