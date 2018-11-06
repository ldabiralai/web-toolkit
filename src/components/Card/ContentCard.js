import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { rgba } from 'polished';
import Icon from '../../elements/Icon';
import * as colors from '../../colors';

const StyledCard = styled('div')`
  border-radius: 2px;
  box-shadow: 0 1px 0 0 ${rgba(colors.mirage, 0.75)}};
  overflow: hidden;
`;

const StyledContent = styled('div')`
  padding: 6px 10px;
  line-height: 1.3;
  background-color: ${colors.bunting};
`;

const StyledCategory = styled('p')`
  text-transform: uppercase;
  color: ${colors.turquoiseBlue};
  font-size: 12px;
  letter-spacing: 1px;
`;

const StyledFooter = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 15px;
  border-top: 1px solid ${colors.whiteLilac};
  color: ${colors.santasGray};
  font-size: 14px;

  * :nth-child(2) {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid ${colors.whiteLilac};
    padding: 8px;
  }
`;

const StyledHeader = styled('div')`
  position: relative;
`;

const StyledTitle = styled('p')`
  font-weight: bold;
  color: ${colors.whiteLilac};
`;

const StyledDescription = styled('p')`
  color: ${colors.whiteLilac};
`;

export const StyledLiveLabel = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  border-radius: 2px;
  background-color: ${colors.utahCrimson};
  color: ${colors.white};
  font-weight: bold;
  font-size: 12px;
  letter-spacing: 1.2px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const StyledIcon = styled(Icon)`
  position: absolute;
  bottom: 17px;
  left: 16px;
`;

const StyledImage = styled('img')`
  width: 100%;
`;

const StyledTimeStamp = styled('p')`
  padding: 8px 0;
`;

const ContentCard = ({ card, type }) => {
  const { img, category, title, description, timestamp, channel } = card;
  const isLive = type === 'live';
  const isPlayable = isLive || type === 'vod';

  return (
    <StyledCard>
      <StyledHeader>
        <StyledImage src={img} alt={title} />
        {isPlayable && <StyledIcon type="play" height="60" />}
        {isLive && <StyledLiveLabel>Live</StyledLiveLabel>}
      </StyledHeader>
      <StyledContent>
        <StyledCategory>{category}</StyledCategory>
        <StyledTitle>{title}</StyledTitle>
        {description && <StyledDescription>{description}</StyledDescription>}
        <StyledFooter>
          {isLive && <Icon height="15" type={channel} />}
          <StyledTimeStamp>{timestamp}</StyledTimeStamp>
        </StyledFooter>
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
  type: PropTypes.oneOf(['vod', 'article', 'live']).isRequired,
};

export default ContentCard;
