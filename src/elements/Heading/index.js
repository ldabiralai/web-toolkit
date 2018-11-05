import React from 'react';
import PropTypes from 'prop-types';

const Heading = ({ as, children, ...props }) => {
  const HeadingTag = as;
  return <HeadingTag {...props}>{children}</HeadingTag>;
};

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  as: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6']).isRequired,
};

export default Heading;
