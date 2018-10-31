import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from './base';import Text from '../../elements/Text';
import ChannelLogo from '../../elements/ChannelLogo';
import UppercaseHeading from '../../elements/UppercaseHeading';
import { colors } from '.'
import styled from 'react-emotion';

const ContentDescription = styled(Text)`
  font-weight: bold;
`;

const TimeStamp = styled(Text)`
  display: inline;
`;

const StyledCard = styled(Card)`
  width: 200px;
  position: relative;
`;


const ArticleCard = () => (
  <StyledCard>
    <CardHeader>
      <img src="https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200" />
    </CardHeader>
    <CardContent>
      <UppercaseHeading as="h2">Heading</UppercaseHeading>
      <ContentDescription>Lorem ipsum dolor sit.</ContentDescription>
    </CardContent>
    <CardFooter>
      <ChannelLogo height='20' channel='E2' />
      <TimeStamp>15:00 - 16:00</TimeStamp>
    </CardFooter>
  </StyledCard>
);

ArticleCard.displayName = 'ArticleCard';

export default ArticleCard;
