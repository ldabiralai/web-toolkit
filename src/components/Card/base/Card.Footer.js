import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledFooter = styled('div')`
  border-top: 1px solid black;
  font-size: 0.8em;
`;

const CardFooter = ({ children }) => (
  <StyledFooter>
    {children}
  </StyledFooter>
);

CardFooter.displayName = 'CardFooter';

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardFooter;
