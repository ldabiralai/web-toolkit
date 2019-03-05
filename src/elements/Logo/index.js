import styled, { css } from 'react-emotion';
import React from 'react';
import PropTypes from 'prop-types';

import * as breakpoints from '../../breakpoints';
import eurosport from '../../assets/eurosport.svg';
import eurosportSmall from '../../assets/eurosport.small.svg';

const StyledLogo = styled.img`
  width: 131px;
  height: 16px;
  ${breakpoints.medium(css`
    width: 197px;
    height: 24px;
  `)};

  ${props =>
    props.small &&
    css`
      width: 20px;
      height: 23px;
      margin: 15px 0;
    `}
`;

const Logo = ({ small }) => <StyledLogo src={small ? eurosportSmall : eurosport} alt="Eurosport" />;

Logo.defaultProps = {
  small: false,
};

Logo.propTypes = {
  small: PropTypes.bool,
};

export default Logo;
