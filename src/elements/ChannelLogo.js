import React from 'react';
import PropTypes from 'prop-types';
import Icon from './Icon';

const iconWidthMap = {
  e: 0.87,
  e1: 1.42,
  e2: 1.66
};

const ChannelLogo = ({ channel = 'E', height = '50' }) => {
  return (<Icon type={channel.toLowerCase()} height={height} width={height * iconWidthMap[channel.toLowerCase()]}/>)
};

ChannelLogo.propTypes = {
  channel: PropTypes.oneOf(['E', 'E1', 'E2'])
};

export default ChannelLogo;
