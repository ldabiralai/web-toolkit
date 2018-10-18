import React from 'react';
import styled from 'react-emotion';

const StyledButton = styled.button`
  background-color: red;
  color: yellow;
`;

export default ({ children }) => <StyledButton type="button">{children}</StyledButton>;
