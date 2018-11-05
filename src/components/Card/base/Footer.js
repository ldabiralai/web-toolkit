import React from 'react';
import PropTypes from 'prop-types';

const Footer = ({ children }) => <div>{children}</div>;

Footer.displayName = 'Footer';

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
