import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const Chevron = props => (
  <svg xmlns="http://www.w3.org/2000/svg" width="6" height="9" {...props}>
    <path fillRule="nonzero" d="M1.145 0L0 1.061 3.71 4.5 0 7.939 1.145 9 6 4.5z" />
  </svg>
);

const StyledChevron = styled(Chevron)`
  margin-left: 6px;

  path {
    fill: currentColor;
  }
`;

const LinkComponent = styled.a`
  color: ${({ theme }) => theme.link.color};
  &:focus,
  &:visited,
  &:hover {
    color: ${({ theme }) => theme.link.color};
  }
  text-decoration: none;
  text-align: center;
  text-transform: uppercase;
  display: block;
  font-size: 14px;
  font-weight: bold;
  letter-spacing: 1.27px;
  line-height: 24px;
`;

const Link = ({ children, ...props }) => (
  <LinkComponent {...props}>
    {children}
    <StyledChevron />
  </LinkComponent>
);

Link.displayName = 'Link';

Link.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Link;
