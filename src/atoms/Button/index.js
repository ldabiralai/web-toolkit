import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: red;
  color: yellow;
`;

export default ({ children }) => <StyledButton type="button">{children}</StyledButton>;
