import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { Card, Header, Content, Footer } from './base';
import UppercaseHeading from '../../elements/UppercaseHeading';
import Text from '../../elements/Text';
import Icon from '../../elements/Icon';
import { colors } from '../..';

const ContentTitle = styled(Text)`
  font-weight: bold;
  color: ${colors.whiteLilac};
`;

const ContentDescription = styled(Text)`
  font-weight: bold;
  color: ${colors.whiteLilac};
`;

export const StyledLiveLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2em 0.4em;
  border-radius: 2px;
  background-color: #e00034;
  color: white;
  font-weight: bold;
  font-size: 15px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const StyledPlayIcon = styled(Icon)`
  position: absolute;
  bottom: 17px;
  left: 16px;
`;

const StyledImage = styled('img')`
  width: 100%;
`;

const TimeStamp = styled(Text)`
  padding: 8px 0;
`;

const StyledCardFooter = styled(Footer)`
  * :nth-child(2) {
    margin-left: 1em;
    padding-left: 1em;
    border-left: 1px solid grey;
    padding: 8px;
  }
`;

const ContentCard = ({ card, type }) => {
  const { img, category, title, description, timestamp, channel } = card;
  const isLive = type === 'live';
  const isPlayable = isLive || type === 'vod';

  return (
    <Card>
      <Header style={{ position: 'relative' }}>
        <StyledImage src={img} alt={description} />
        {isPlayable && <StyledPlayIcon type="play" height="60" />}
        {isLive && <StyledLiveLabel>Live</StyledLiveLabel>}
      </Header>
      <Content>
        <UppercaseHeading as="h2">{category}</UppercaseHeading>
        <ContentTitle>{title}</ContentTitle>
        {description && <ContentDescription>{description}</ContentDescription>}
        <StyledCardFooter>
          {isLive && <Icon height="15" type={channel} />}
          <TimeStamp>{timestamp}</TimeStamp>
        </StyledCardFooter>
      </Content>
    </Card>
  );
};

ContentCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    timestamp: PropTypes.string,
    channel: PropTypes.string,
  }).isRequired,
  type: PropTypes.string.isRequired,
};

export default ContentCard;
