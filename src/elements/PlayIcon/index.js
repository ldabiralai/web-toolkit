import React from 'react';
import PropTypes from 'prop-types';
import styled from 'react-emotion';
import { rgba } from 'polished';
import { white } from '../../colors';

const icon =
  'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgNDIgNDIiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNNDEuMzE0MTMxMiwyMi4yNzIxNDE5IEwxMy4yOTQ2MDAxLDM5Ljc3MjE1MTcgQzEyLjU5MTk1NzksNDAuMjEwOTk3MiAxMS42NjY1OTkyLDM5Ljk5NzE0NzggMTEuMjI3NzUzNywzOS4yOTQ1MDU1IEMxMS4wNzg5MTQ1LDM5LjA1NjE5NjkgMTEsMzguNzgwODc1MyAxMSwzOC40OTk5MDU0IEwxMSwzLjQ5OTg4NTggQzExLDIuNjcxNDU4NjcgMTEuNjcxNTcyOSwxLjk5OTg4NTggMTIuNSwxLjk5OTg4NTggQzEyLjc4MDk2OTksMS45OTk4ODU4IDEzLjA1NjI5MTUsMi4wNzg4MDAzMyAxMy4yOTQ2MDAxLDIuMjI3NjM5NSBMNDEuMzE0MTMxMiwxOS43Mjc2NDkzIEM0Mi4wMTY3NzM0LDIwLjE2NjQ5NDggNDIuMjMwNjIyOSwyMS4wOTE4NTM1IDQxLjc5MTc3NzQsMjEuNzk0NDk1NyBDNDEuNjcwOTQ4OCwyMS45ODc5NTYyIDQxLjUwNzU5MTcsMjIuMTUxMzEzMyA0MS4zMTQxMzEyLDIyLjI3MjE0MTkgWiIgZmlsbD0iI2ZmZiI+PC9wYXRoPjwvc3ZnPg==';

const StyledPlayIcon = styled.img`
  box-sizing: border-box;
  height: ${({ iconHeight }) => `${iconHeight}px`};
  padding: ${({ iconHeight }) => `${(iconHeight * 0.45) / 2}px`};
  border: 2px solid ${rgba(white, 0.5)};
  border-radius: 50%;
  background: rgba(6, 8, 37, 0.2);
`;

const PlayIcon = ({ alt, className, height }) => (
  <StyledPlayIcon alt={alt} className={className} src={icon} iconHeight={height} />
);

PlayIcon.defaultProps = {
  alt: 'play',
  className: '',
};

PlayIcon.propTypes = {
  alt: PropTypes.string,
  height: PropTypes.number.isRequired,
  className: PropTypes.string,
};

export default PlayIcon;
