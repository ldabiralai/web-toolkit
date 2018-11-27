import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { rgba } from 'polished';
import PlayIcon from '../../elements/PlayIcon';
import * as colors from '../../colors';
import Link from '../../elements/Link';
import CardDetails from './CardDetails';

const StyledImage = styled.div`
  height: 180px;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: 50% 0;
  display: block;
`;

const StyledHeader = styled.div`
  position: relative;
  overflow: hidden;

  :before {
    content: '';
    position: absolute;
    height: 100%;
    width: 101%;
    background: radial-gradient(circle, transparent, ${colors.mirage} 100%);
    opacity: 0.5;
  }
`;

export const StyledPlayIcon = styled(PlayIcon)`
  position: absolute;
  bottom: 17px;
  left: 16px;
`;

const StyledCard = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 ${rgba(colors.mirage, 0.75)};
  text-decoration: none;
  overflow: hidden;
  background-color: ${colors.bunting};

  &:hover {
    ${StyledHeader}:before {
      opacity: 0.1;
    }

    ${StyledPlayIcon} {
      border-color: ${colors.white};
    }
  }
`;

export const StyledLiveLabel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px 8px;
  border-radius: 2px;
  background-color: ${colors.utahCrimson};
  color: ${colors.white};
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 1.2px;
  position: absolute;
  top: 10px;
  right: 10px;
`;

const ContentCard = ({ card, type, ...props }) => {
  const { img, url, liveLabel } = card;
  const isLive = type === 'live';
  const isPlayable = isLive || type === 'vod';
  const cardDetailsProps = {
    category: card.category,
    title: card.title,
    description: card.description,
    channel: card.channel,
    timestamp: card.timestamp,
  };

  return (
    <StyledCard {...props} href={url}>
      <StyledHeader>
        <StyledImage src={img} />
        {isPlayable && <StyledPlayIcon height={50} />}
        {isLive && <StyledLiveLabel>● {liveLabel}</StyledLiveLabel>}
      </StyledHeader>
      <CardDetails card={cardDetailsProps} />
    </StyledCard>
  );
};

ContentCard.defaultProps = {
  linkComponent: undefined,
};

ContentCard.propTypes = {
  card: PropTypes.shape({
    img: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    timestamp: PropTypes.string,
    channel: PropTypes.string,
    liveLabel: PropTypes.string,
  }).isRequired,
  type: PropTypes.oneOf(['vod', 'article', 'live']).isRequired,
  linkComponent: PropTypes.func,
};

ContentCard.displayName = 'Cards.Content';

export default ContentCard;
