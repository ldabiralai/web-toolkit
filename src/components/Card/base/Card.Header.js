import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledHeader = styled('div')``;

const CardHeader = ({ children }) => (
  <StyledHeader>
    {children}
  </StyledHeader>
);

CardHeader.displayName = 'CardHeader';

CardHeader.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardHeader;
