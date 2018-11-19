import React from 'react';
import styled, { css } from 'react-emotion';
import { colors, breakpoints, Logo } from '../..';

const StyledWrapper = styled.div`
  background: ${colors.bunting};
  height: 48px;
  padding-left: 16px;
  display: flex;
  align-items: center;
  ${breakpoints.medium(css`
    height: 64px;
    padding-left: 32px;
  `)};
  ${breakpoints.large(css`
    height: 72px;
  `)};
`;

const Header = props => (
  <StyledWrapper {...props}>
    <Logo />
  </StyledWrapper>
);

export default Header;
