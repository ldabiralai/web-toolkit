import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { rgba } from 'polished';
import { white, ebony } from '../../colors';
import play from '../../assets/play.svg';

const StyledPlayIcon = styled.img`
  box-sizing: border-box;
  height: ${({ iconHeight }) => `${iconHeight}px`};
  padding: ${({ iconHeight }) => `${(iconHeight * 0.45) / 2}px`};
  border: 2px solid ${rgba(white, 0.5)};
  border-radius: 50%;
  background: rgba(${ebony}, 0.2);
`;

const PlayIcon = ({ height, ...props }) => <StyledPlayIcon {...props} src={play} iconHeight={height} />;

PlayIcon.defaultProps = {
  alt: 'play',
  className: '',
};

PlayIcon.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default PlayIcon;
