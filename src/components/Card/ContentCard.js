import React from 'react';
import PropTypes from 'prop-types';
import { Card, CardHeader, CardContent, CardFooter } from './base';
import UppercaseHeading from '../../elements/UppercaseHeading';
import Text from '../../elements/Text';
import Icon from '../../elements/Icon';

import styled from 'react-emotion';


const ContentDescription = styled(Text)`
  font-weight: bold;
`;

export const StyledLiveLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: .2em .4em;
  border-radius: 2px;	
  background-color: #E00034;
  color: white;
  font-weight: bold;
  font-size: 15px;
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
  align-items: center;
  
  * :nth-child(2) {
    margin-left: 1em;
    padding-left: 1em;
    border-left: 1px solid black;
  }
`;

const ContentCard = ({ card, type } ) => {
  const { img, title, description, timestamp, channel } = card;
  const isLive = type === 'live';
  const isPlayable = isLive || type === 'vod';

  return (
    <Card>
      <CardHeader style={{position: 'relative'}}>
        <img src={img} />
        {isPlayable && <StyledPlayIcon type='play' height='60' />}
        {isLive && <StyledLiveLabel>Live</StyledLiveLabel>}
      </CardHeader>
      <CardContent>
        <UppercaseHeading as="h2">{title}</UppercaseHeading>
        <ContentDescription>{description}</ContentDescription>
        <StyledCardFooter>
          {isLive &&  <Icon height='20' type={channel} />}
          <TimeStamp>{timestamp}</TimeStamp>
        </StyledCardFooter>
      </CardContent>

    </Card>);
}

ContentCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    timestamp: PropTypes.string,
    channel: PropTypes.string,
    type: PropTypes.string
  }),
};

export default ContentCard;
