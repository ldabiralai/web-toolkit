import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import Link from '../../elements/Link';
import PlayIcon from '../../elements/PlayIcon';
import { brandBase, coreLightMinus1 } from '../../colors';
import { medium, large, wide } from '../../breakpoints';
import { fontFamilies } from '../../typography';

const StyledPictureContainer = styled.div`
  position: relative;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;
  line-height: 0;
`;

export const StyledImage = styled.img`
  max-width: 100%;
  ${({ alt }) =>
    !alt &&
    css`
      border-radius: 4px;
    `}
`;

export const StyledPlayIcon = styled(PlayIcon)`
  position: absolute;
  bottom: 15px;
  left: 20px;
`;

export const StyledTitle = styled.div`
  display: block;
  min-height: 90px;
  padding: 15px 20px 28px;
  font-weight: bold;
  line-height: 20px;
  font-size: 14px;
  background-color: ${brandBase};
  color: ${coreLightMinus1};
  font-family: ${fontFamilies.interUi};
`;

const StyledLiveComment = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 286px;
  border-radius: 4px;
  overflow: hidden;
  text-decoration: none;

  ${medium(css`
    max-width: 388px;

    ${StyledTitle} {
      min-height: 102px;
      padding: 19px 24px 36px;
    }
  `)}
  
  ${large(css`
    max-width: 342px;
    ${StyledTitle} {
      font-size: 16px;
      min-height: 91px;
      padding: 15px 20px 28px;
    }
  `)}
  
  ${wide(css`
    max-width: 308px;
    ${StyledTitle} {
      font-size: 16px;
      padding: 15px 20px 33px;
    }
  `)}
  
`;

const LiveComment = ({ title, link, pictureUrl, isVideo }) => (
  <Link href={link} target="_blank">
    <StyledLiveComment>
      <StyledPictureContainer>
        <StyledImage src={pictureUrl} alt={title} />
        {isVideo && <StyledPlayIcon height={60} />}
      </StyledPictureContainer>
      {title && <StyledTitle>{title}</StyledTitle>}
    </StyledLiveComment>
  </Link>
);

LiveComment.defaultProps = {
  title: '',
  isVideo: false,
};

LiveComment.propTypes = {
  link: PropTypes.string.isRequired,
  pictureUrl: PropTypes.string.isRequired,
  title: PropTypes.string,
  isVideo: PropTypes.bool,
};
export default LiveComment;
