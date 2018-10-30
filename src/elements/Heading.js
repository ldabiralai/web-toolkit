import React from 'react';
import PropTypes from 'prop-types';

const Heading  = ({ as, children, className }) => {
  const HeadingTag = as;
  return <HeadingTag className={className}>{children}</HeadingTag>
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6'])
};

export default Heading;
