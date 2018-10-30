import React from 'react'
import PropTypes from 'prop-types';

const Text = ({children, className}) => <div className={className}>{children}</div>;

Text.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Text;
