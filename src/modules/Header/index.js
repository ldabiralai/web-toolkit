import React from 'react';
import styled, { css } from 'react-emotion';
import * as breakpoints from '../../breakpoints';
import * as colors from '../../colors';
import Logo from '../../elements/Logo';

const StyledWrapper = styled.header`
  background: ${colors.brandBase};
  height: 50px;
  padding-left: 18px;
  display: flex;
  align-items: center;
  ${breakpoints.medium(css`
    height: 60px;
    padding-left: 32px;
  `)};
  ${breakpoints.large(css`
    height: 70px;
  `)};
`;

const Header = props => (
  <StyledWrapper {...props}>
    <Logo />
  </StyledWrapper>
);

export default Header;
