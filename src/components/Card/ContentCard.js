import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import UppercaseHeading from '../../elements/UppercaseHeading';
import Text from '../../elements/Text';
import Icon from '../../elements/Icon';
import * as colors from '../../colors';

const StyledCard = styled('div')`
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  overflow: hidden;
`;

const StyledContent = styled('div')`
  padding: 6px 10px;
  line-height: 1.3em;
  background-color: ${colors.bunting};
`;

const StyledCardFooter = styled('div')`
  
  display: flex;
  align-items: center;
  margin-top: 15px;
  border-top: 1px solid ${colors.whiteLilac};
  color: ${colors.santasGray};
  font-size: 14px;
  
  * :nth-child(2) {
    margin-left: 1em;
    padding-left: 1em;
    border-left: 1px solid ${colors.whiteLilac};
    padding: 8px;
  }
`;

const StyledHeader = styled('div')`
  position: relative;
`;

const StyledContentTitle = styled(Text)`
  font-weight: bold;
  color: ${colors.whiteLilac};
  display: block;
`;

const StyledContentDescription = styled(Text)`
  color: ${colors.whiteLilac};
  display: block;
`;

export const StyledLiveLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.2em 0.4em;
  border-radius: 2px;
  background-color: ${colors.utahCrimson};
  color: ${colors.white};
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

const StyledTimeStamp = styled(Text)`
  padding: 8px 0;
`;


const ContentCard = ({ card, type }) => {
  const { img, category, title, description, timestamp, channel } = card;
  const isLive = type === 'live';
  const isPlayable = isLive || type === 'vod';

  return (
    <StyledCard>
      <StyledHeader>
        <StyledImage src={img} alt={description} />
        {isPlayable && <StyledPlayIcon type="play" height="60" />}
        {isLive && <StyledLiveLabel>Live</StyledLiveLabel>}
      </StyledHeader>
      <StyledContent>
        <UppercaseHeading as="h2">{category}</UppercaseHeading>
        <StyledContentTitle>{title}</StyledContentTitle>
        {description && <StyledContentDescription>{description}</StyledContentDescription>}
        <StyledCardFooter>
          {isLive && <Icon height="15" type={channel} />}
          <StyledTimeStamp>{timestamp}</StyledTimeStamp>
        </StyledCardFooter>
      </StyledContent>
    </StyledCard>
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
  type: PropTypes.oneOf(['vod','article','live'])
};

export default ContentCard;
