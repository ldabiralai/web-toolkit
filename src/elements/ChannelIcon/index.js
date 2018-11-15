import React from 'react';
import PropTypes from 'prop-types';
import E from '../../assets/channels/E.svg';
import E1 from '../../assets/channels/E1.svg';
import E2 from '../../assets/channels/E2.svg';
import E2GR from '../../assets/channels/E2GR.svg';
import E2NO from '../../assets/channels/E2NO.svg';
import E2RUG from '../../assets/channels/E2RUG.svg';

export const iconMap = {
  E: {
    src: E,
    altText: 'Eurosport',
    widthRatio: 0.87,
  },
  E1: {
    src: E1,
    altText: 'Eurosport 1',
    widthRatio: 1.42,
  },
  E2: {
    src: E2,
    altText: 'Eurosport 2',
    widthRatio: 1.66,
  },
  E2GR: {
    src: E2GR,
    altText: 'Eurosport 2',
    widthRatio: 3.5,
  },
  E2NO: {
    src: E2NO,
    altText: 'Eurosport 2',
    widthRatio: 2.06,
  },
  E2RUG: {
    src: E2RUG,
    altText: 'Eurosport 2',
    widthRatio: 4,
  },
};

const ChannelIcon = ({ type, height, ...props }) => {
  const icon = iconMap[type] || iconMap.E;

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
  type: 'E',
  height: 50,
};

ChannelIcon.propTypes = {
  type: PropTypes.oneOf(['E', 'E1', 'E2', 'E2NO', 'E2RUG', 'E2GR']),
  height: PropTypes.number,
};

export default ChannelIcon;
