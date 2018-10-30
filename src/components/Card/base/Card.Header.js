import React from 'react';
import PropTypes from 'prop-types';

const CardHeader = ({ children }) => (
  <>
    {children}
  </>
);

CardHeader.displayName = 'CardHeader';

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardHeader;
