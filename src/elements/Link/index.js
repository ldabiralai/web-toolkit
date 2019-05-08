import React from 'react';
import PropTypes from 'prop-types';

const DefaultLinkComponent = ({ href, children, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

DefaultLinkComponent.propTypes = {
  href: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

const Link = ({ linkComponent: LinkComponent, ...props }) => <LinkComponent {...props} />;

Link.propTypes = {
  linkComponent: PropTypes.func,
};

Link.defaultProps = {
  linkComponent: DefaultLinkComponent,
};

export default Link;
