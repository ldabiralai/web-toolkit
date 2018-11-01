import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledContent = styled('div')`
  padding: 6px 10px;
  line-height: 1.3em;
`;

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
