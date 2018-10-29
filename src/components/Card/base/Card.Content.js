import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledContent = styled('div')``;

const CardContent = ({ children }) => (
  <StyledContent>
    {children}
  </StyledContent>
);

CardContent.displayName = 'CardContent';

CardContent.propTypes = {
  children: PropTypes.node.isRequired,
};

export default CardContent;
