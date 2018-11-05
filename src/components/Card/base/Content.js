import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

const StyledContent = styled('div')`
  background-color: #10121e;
  padding: 6px 10px;
  line-height: 1.3em;
`;

const Content = ({ children }) => <StyledContent>{children}</StyledContent>;

Content.displayName = 'Content';

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Content;
