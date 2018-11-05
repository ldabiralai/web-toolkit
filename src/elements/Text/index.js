import React from 'react';
import PropTypes from 'prop-types';

const Text = ({ children }) => <span>{children}</span>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
