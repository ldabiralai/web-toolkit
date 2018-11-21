import React from 'react';
import PropTypes from 'prop-types';

import getChannelIcon from './getChannelIcon';

const ChannelIcon = ({ type, height, ...props }) => {
  const icon = getChannelIcon(type);

  return icon ? (
    <img
      {...props}
      css={`
        height: ${height}px;
        width: ${icon.widthRatio * height}px;
      `}
      src={icon.src}
      alt={icon.altText}
    />
  ) : null;
};

ChannelIcon.defaultProps = {
  type: '',
  height: 50,
};

ChannelIcon.propTypes = {
  type: PropTypes.string,
  height: PropTypes.number,
};

export default ChannelIcon;
