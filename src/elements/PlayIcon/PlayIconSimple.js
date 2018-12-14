import React from 'react';
import PropTypes from 'prop-types';
import play from '../../assets/play.svg';

const PlayIconSimple = ({ alt, height, ...props }) => (
  <div {...props}>
    <img src={play} alt={alt} height={height} />
  </div>
);

PlayIconSimple.defaultProps = {
  alt: 'play',
};

PlayIconSimple.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number.isRequired,
};

export default PlayIconSimple;
