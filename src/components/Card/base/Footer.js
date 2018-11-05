import PropTypes from 'prop-types';
import styled from 'react-emotion';

const Footer = styled('div')`
  display: flex;
  align-items: center;
  margin-top: 15px;
  border-top: 1px solid grey;
  color: #9fa1ae;
  font-size: 12px;
`;

Footer.displayName = 'Footer';

Footer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Footer;
