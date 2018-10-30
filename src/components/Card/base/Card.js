import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ children }) => <div style={ { width: '200px', position: 'relative'} }>{children}</div>;

Card.displayName = 'Card';

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
