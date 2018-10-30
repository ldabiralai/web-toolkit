import React from 'react';
import PropTypes from 'prop-types';

const ChannelLogo = ({ channel = 'E' }) => {
  return (<div>{channel}</div>)
};

ChannelLogo.propTypes = {
  channel: PropTypes.oneOf(['E', 'E1', 'E2'])
};

export default ChannelLogo;
