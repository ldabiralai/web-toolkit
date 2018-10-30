import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, CardFooter } from './base';

import Heading from '../../elements/Heading';
import Text from '../../elements/Text';
import ChannelLogo from '../../elements/ChannelLogo';
import Icon from '../../elements/Icon';

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

const StyledCardHeader = styled(CardHeader)`
  position: relative
`;

const StyledLiveLabel = styled.div`
  background-color: red;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const StyledPlayIcon = styled(Icon)`
  position: absolute;
  top: 30px;
  left: 10px;
`;

const TimeStamp = styled(Text)`
  display: inline;
`;


const VodCard = ( {live = false} ) => (
  <Card>
    <CardHeader style={{position: 'relative'}}>
      <img src="https://i.eurosport.com/2018/10/29/2450727-50913270-2560-1440.jpg?w=200" />
      <StyledPlayIcon type='play' height='60' />
      {live && <StyledLiveLabel>Live</StyledLiveLabel>}
    </CardHeader>
    <CardContent>
      <StyledHeading as="h1">Heading</StyledHeading>
      <ContentDescription>Lorem ipsum dolor sit.</ContentDescription>
    </CardContent>
    <CardFooter>
      <ChannelLogo height='20' channel='E1' />
      <TimeStamp>15:00 - 16:00</TimeStamp>
    </CardFooter>


  </Card>);

VodCard.displayName = 'VodCard';

VodCard.propTypes = {
  live: PropTypes.bool.isRequired,
};

export default VodCard;
