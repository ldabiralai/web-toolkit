import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledCard = styled('div')`
  border-radius: 0.28571429rem;
  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;
  overflow: hidden;
`;

const Card = ({ children }) => <StyledCard>{children}</StyledCard>;

Card.displayName = 'Card';

Card.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Card;
