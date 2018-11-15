import styled, { css } from 'react-emotion';
import React from 'react';
import { breakpoints } from '../..';
import eurosport from '../../assets/eurosport.svg';

const StyledLogo = styled.img`
  width: 131px;
  height: 16px;
  ${breakpoints.medium(css`
    width: 197px;
    height: 24px;
  `)};
`;

const Logo = () => <StyledLogo src={eurosport} alt="Eurosport" />;

export default Logo;
