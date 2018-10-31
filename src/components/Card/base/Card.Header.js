import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledCardHeader = styled.div`
  position: relative;
`;

const CardHeader = ({ children, className }) => (
  <StyledCardHeader className={className}>
    {children}
  </StyledCardHeader>
);

CardHeader.displayName = 'CardHeader';

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardHeader;
