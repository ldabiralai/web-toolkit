import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children, ...props }) => <span {...props}>{children}</span>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
