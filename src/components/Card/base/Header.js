import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';

const StyledHeader = styled.div`
  position: relative;
`;

const Header = ({ children }) => <StyledHeader>{children}</StyledHeader>;

Header.displayName = 'Header';

Header.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Header;
