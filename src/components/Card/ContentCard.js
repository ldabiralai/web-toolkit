import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, CardFooter } from './base';
import UppercaseHeading from '../../elements/UppercaseHeading';
import Text from '../../elements/Text';
import ChannelLogo from '../../elements/ChannelLogo';
import Icon from '../../elements/Icon';

import styled from 'react-emotion';


const ContentDescription = styled(Text)`
  font-weight: bold;
`;

export const StyledLiveLabel = styled.div`
  background-color: red;
  color: white;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const StyledPlayIcon = styled(Icon)`
  position: absolute;
  top: 30px;
  left: 10px;
`;

const TimeStamp = styled(Text)`
  display: inline;
`;

const StyledCardFooter = styled(CardFooter)`
  display: flex;
`;

const ContentCard = ({ card, live, type } ) => {
  const { img, title, description, timestamp, channel } = card;
  return (
    <Card>
      <CardHeader style={{position: 'relative'}}>
        <img src={img} />
        {type ==='vod' && <StyledPlayIcon type='play' height='60' />}
        {live && <StyledLiveLabel>Live</StyledLiveLabel>}
      </CardHeader>
      <CardContent>
        <UppercaseHeading as="h2">{title}</UppercaseHeading>
        <ContentDescription>{description}</ContentDescription>
      </CardContent>
      <StyledCardFooter>
        <ChannelLogo height='20' channel={channel} />
        <TimeStamp>{timestamp}</TimeStamp>
      </StyledCardFooter>


    </Card>);
}

ContentCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    timestamp: PropTypes.string,
    channel: PropTypes.string,
    live: PropTypes.bool,
    type: PropTypes.string
  }),
};

export default ContentCard;
