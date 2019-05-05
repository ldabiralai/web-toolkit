import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import getChannelIcon from './getChannelIcon';

const ChannelIcon = ({ type, height, ...props }) => {
  const icon = getChannelIcon(type);
  if (!icon) return null;
  const StyledChannelIcon = styled(icon.component)`
    height: ${height}px;
    width: ${icon.widthRatio * height}px;
  `;

  return <StyledChannelIcon {...props} />;
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
