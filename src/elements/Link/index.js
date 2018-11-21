import React from 'react';
import PropTypes from 'prop-types';

const Link = ({ linkComponent: LinkComponent, ...props }) => <LinkComponent {...props} />;

Link.propTypes = {
  linkComponent: PropTypes.func,
};

Link.defaultProps = {
  linkComponent: ({ href, children, ...props }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
};

export default Link;
