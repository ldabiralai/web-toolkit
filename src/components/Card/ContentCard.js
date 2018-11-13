import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { rgba } from 'polished';
import ChannelIcon from '../../elements/ChannelIcon';
import PlayIcon from '../../elements/PlayIcon';
import * as colors from '../../colors';

const StyledImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  object-position: 50% 0;
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

const StyledCard = styled.a`
  display: flex;
  flex-direction: column;
  height: 100%;
  border-radius: 2px;
  box-shadow: 0 1px 0 0 ${rgba(colors.mirage, 0.75)};
  text-decoration: none;
  overflow: hidden;
  font-family: ${({ theme }) => theme.typography.base};

  &:hover {
    ${StyledHeader}:before {
      opacity: 0.1;
    }

    ${StyledPlayIcon} {
      border-color: ${colors.white};
    }
  }
`;

const StyledContent = styled.div`
  padding: 16px 16px 8px;
  line-height: 1.3;
  background-color: ${colors.bunting};
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const StyledCategory = styled.p`
  font-size: 12px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.turquoiseBlue};
  letter-spacing: 1px;
  margin: 0 0 10px;
`;

const footerBorder = rgba(colors.whiteLilac, 0.15);
const StyledFooter = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  margin-top: 20px;
  font-size: 14px;
`;

const StyledDetails = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border-top: 1px solid ${footerBorder};

  * :nth-child(2) {
    margin-left: 10px;
    padding-left: 10px;
    border-left: 1px solid ${footerBorder};
    padding: 8px;
  }
`;

const StyledTitle = styled.p`
  font-size: 14px;
  font-weight: bold;
  color: ${colors.whiteLilac};
  margin: 0 0 10px;
`;

const StyledDescription = styled.p`
  color: ${colors.manatee};
  font-size: 14px;
  line-height: 20px;
  margin: 0 0 10px;
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

const StyledTimeStamp = styled.p`
  padding: 8px 0;
  margin: 0;
  color: ${colors.manatee};
  font-size: 12px;
`;

const ContentCard = ({ card, type, ...props }) => {
  const { img, url, category, title, description, timestamp, channel, liveLabel } = card;
  const isLive = type === 'live';
  const isPlayable = isLive || type === 'vod';

  return (
    <StyledCard {...props} href={url}>
      <StyledHeader>
        <StyledImage src={img} alt={title} />
        {isPlayable && <StyledPlayIcon height={50} />}
        {isLive && <StyledLiveLabel>● {liveLabel}</StyledLiveLabel>}
      </StyledHeader>
      <StyledContent>
        <StyledCategory>{category}</StyledCategory>
        <StyledTitle>{title}</StyledTitle>
        {description && <StyledDescription>{description}</StyledDescription>}
        <StyledFooter>
          <StyledDetails>
            {isLive && <ChannelIcon height={15} type={channel} />}
            <StyledTimeStamp>{timestamp}</StyledTimeStamp>
          </StyledDetails>
        </StyledFooter>
      </StyledContent>
    </StyledCard>
  );
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
};

ContentCard.displayName = 'Cards.Content';

export default ContentCard;
