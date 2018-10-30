import React from 'react';
import styled, { css } from 'react-emotion';
import { Button, breakpoints, colors } from '../..';

const StyledButton = styled(Button)`
  font-size: 11px;
  line-height: 11px;
  ${breakpoints.medium(css`
    display: inline-block;
    padding: 11px 20px;
  `)};
`;

const StyledCopyright = styled.div`
  color: ${colors.manatee};
`;

const Footer = () => (
  <>
    <StyledButton type="secondary" href="#" target="_blank">
      FAQ
    </StyledButton>

    <StyledCopyright>Copyright</StyledCopyright>
  </>
);

export default Footer;
