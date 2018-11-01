import React from 'react'
import PropTypes from 'prop-types';

const Text = ({children, className}) => <span className={className}>{children}</span>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
