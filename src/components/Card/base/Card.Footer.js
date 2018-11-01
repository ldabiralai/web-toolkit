import React from 'react';
import PropTypes from 'prop-types';

const CardFooter = ({ children, className }) => (
  <div className={className} >
    {children}
  </div>
);

CardFooter.displayName = 'CardFooter';

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardFooter;
