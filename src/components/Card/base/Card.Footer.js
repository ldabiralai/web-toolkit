import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledFooter = styled('div')`
  margin-top: 1em;
  padding-top: 1em;
  border-top: 1px solid rgba(0,0,0,.05);
  font-size: 0.8em;
  
  *:second-child{
    background-color: red;
  }
  
`;

const CardFooter = ({ children, className }) => (
  <StyledFooter className={className} >
    {children}
  </StyledFooter>
);

CardFooter.displayName = 'CardFooter';

CardFooter.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardFooter;
