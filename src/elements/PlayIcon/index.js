import React from 'react';
import PropTypes from 'prop-types';
import styled, { css, keyframes } from 'react-emotion';
import { rgba } from 'polished';
import { white, ebony } from '../../colors';
import play from '../../assets/play.svg';

const spin = keyframes`
  from 0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const StyledBorder = styled.div`
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-sizing: border-box;
  border-radius: 50%;
  border: 2px solid ${rgba(white, 0.5)};
  border-right-color: ${({ isLoading }) => isLoading && `transparent`};
  animation: ${({ isLoading }) => isLoading && `${spin} 1s linear infinite`};
`;

export const hoverStyles = css`
  ${StyledBorder} {
    border-color: white;
  }
`;

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;
  height: ${({ iconHeight }) => `${iconHeight}px`};
  width: ${({ iconHeight }) => `${iconHeight}px`};
  padding: ${({ iconHeight }) => `${(iconHeight * 0.45) / 2}px`};
  box-sizing: border-box;
  border-radius: 50%;
  background: ${rgba(ebony, 0.2)};
  overflow: hidden;

  :hover {
    ${({ withHoverState }) => withHoverState && hoverStyles}
  }
`;

const PlayIcon = ({ alt, height, isLoading, ...props }) => (
  <StyledWrapper {...props} iconHeight={height}>
    <StyledBorder isLoading={isLoading} />
    <img src={play} alt={alt} />
  </StyledWrapper>
);

PlayIcon.defaultProps = {
  alt: 'play',
  className: '',
  isLoading: false,
  withHoverState: false,
};

PlayIcon.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
  isLoading: PropTypes.bool,
  withHoverState: PropTypes.bool,
};

export default PlayIcon;
