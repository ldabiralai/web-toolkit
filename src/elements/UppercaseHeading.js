import React from 'react';
import styled from 'react-emotion';

import Heading from './Heading';
import { turquoiseBlue } from '../colors';

const StyledHeading = styled(Heading)`
  text-transform: uppercase;
  color: ${turquoiseBlue};
  font-size: 0.8rem;
  letter-spacing: 0.1rem;
`;

const UppercaseHeading = ({ children, ...props }) => <StyledHeading {...props}>{children}</StyledHeading>;

export default UppercaseHeading;
