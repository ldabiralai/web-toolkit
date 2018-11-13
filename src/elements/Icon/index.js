import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';

export const iconMap = {
  pause: {
    src:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTEyIiBoZWlnaHQ9IjExMiIgdmlld0JveD0iMCAwIDExMiAxMTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlPlBhdXNlPC90aXRsZT48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0yLjkyNyA1LjI2OGg5OS45MDJ2OTkuOTAySDIuOTI2eiIvPjxjaXJjbGUgZmlsbD0iIzE0MUI0RCIgb3BhY2l0eT0iLjYiIGN4PSI1NiIgY3k9IjU2IiByPSI1NiIvPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM5IDMxKSIgZmlsbD0iI0VGRUZGNCI+PHJlY3Qgd2lkdGg9IjEwIiBoZWlnaHQ9IjUwIiByeD0iNSIvPjxyZWN0IHg9IjI0LjE5NSIgd2lkdGg9IjEwIiBoZWlnaHQ9IjUwIiByeD0iNSIvPjwvZz48L2c+PC9zdmc+',
    altText: 'pause',
  },
  play: {
    src:
      'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTUgMzBDNi43MyAzMCAwIDIzLjI3IDAgMTVTNi43MyAwIDE1IDBzMTUgNi43MyAxNSAxNS02LjczIDE1LTE1IDE1eiIgZmlsbD0iIzE0MUI0RCIgb3BhY2l0eT0iLjYiLz48cGF0aCBkPSJNMTUgMjljNy43MTggMCAxNC02LjI4MiAxNC0xNFMyMi43MTggMSAxNSAxIDEgNy4yODIgMSAxNXM2LjI4MiAxNCAxNCAxNHptMCAxQzYuNzMgMzAgMCAyMy4yNyAwIDE1UzYuNzMgMCAxNSAwczE1IDYuNzMgMTUgMTUtNi43MyAxNS0xNSAxNXoiIGZpbGw9IiNDQkNBRDUiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik0yMC42ODEgMTUuNzRsLTcuMjY5IDUuMDMyYS45LjkgMCAwIDEtMS40MTItLjc0VjkuOTY4YS45LjkgMCAwIDEgMS40MTItLjc0bDcuMjcgNS4wMzJhLjkuOSAwIDAgMSAwIDEuNDh6IiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==',
    altText: 'play',
  },
  e: {
    src:
      'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjMiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPGcgZmlsbD0iI0I5QkJDQSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgPHBhdGggZD0iTTEwLjMzNSA2LjY1Nkg1LjM0NlYuOTZjMC0uNDA2LjMzLS43MzcuNzMzLS43MzdoMTMuMDFjLjQwNCAwIC43MzIuMzMzLjczMi43NHYzLjE5MmMwIC40NC0uMjczLjc1NS0uNzA3Ljc1NWgtOC43OHYxLjc0NnpNNS4xNjkgMjIuOTA2bDUuMTY2LTQuNjg1aDguNzY0Yy40MiAwIC43MjQuMzYuNzI0LjczdjMuMjE5YzAgLjQwNi0uMjkyLjczNi0uNjk2LjczNkg1LjE3ek0xMC4zMzUgMTMuOTk3bDYuNjItMi44MzZoLTYuNjJWNi42NTZMNi40OTkgMTEuMTZIMGw0LjE1IDIuODM2TC41ODYgMTguMjJsNS45NTEtMi41OTQgMy43OTcgMi41OTR6IiAvPg0KICAgIDwvZz4NCiAgPC9zdmc+',
    altText: 'Eurosport',
    widthRatio: 0.87,
  },
  e1: {
    src:
      'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjEgMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUgLjEpIj4NCiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPg0KICAgICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNNiAxNC44OVYwSDB2MTQuODl6IiAvPg0KICAgICAgICA8L21hc2s+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgZD0iTTUuOTk5LjQ4M0EuNDkuNDkgMCAwIDAgNS41MDMgMEguNDk3QS40OTIuNDkyIDAgMCAwIDAgLjQ4NWwuMDAxIDIuMDk2YzAgLjI4OC4xODUuNDk2LjQ3OS40OTZoMi4xMzhsLjAwMyAxMS4zM2EuNDcuNDcgMCAwIDAgLjQ3Mi40ODNoMi40MzVBLjQ3LjQ3IDAgMCAwIDYgMTQuNDA2TDUuOTk5LjQ4M3oiDQogICAgICAgICAgZmlsbD0iI0I5QkJDQSINCiAgICAgICAgICBtYXNrPSJ1cmwoI2IpIg0KICAgICAgICAvPg0KICAgICAgPC9nPg0KICAgICAgPHBhdGgNCiAgICAgICAgZD0iTTYuNzg3IDQuMzcxSDMuNTFWLjYzMWMwLS4yNjcuMjE2LS40ODQuNDgtLjQ4NGg4LjU0NWMuMjY1IDAgLjQ4LjIxOC40OC40ODV2Mi4wOTdjMCAuMjg4LS4xNzkuNDk1LS40NjQuNDk1SDYuNzg3djEuMTQ3ek0zLjM5NCAxNS4wNDNsMy4zOTMtMy4wNzdoNS43NTVjLjI3NiAwIC40NzYuMjM2LjQ3Ni40OHYyLjExM2MwIC4yNjctLjE5Mi40ODQtLjQ1Ny40ODRIMy4zOTR6Ig0KICAgICAgICBmaWxsPSIjQjlCQkNBIg0KICAgICAgLz4NCiAgICAgIDxwYXRoDQogICAgICAgIGZpbGw9IiNCOUJCQ0EiDQogICAgICAgIGQ9Ik02Ljc4NyA5LjE5Mmw0LjM0Ny0xLjg2M0g2Ljc4N1Y0LjM3MWwtMi41MiAyLjk1OEgwbDIuNzI1IDEuODYzLTIuMzQgMi43NzQgMy45MDgtMS43MDQgMi40OTQgMS43MDR6Ig0KICAgICAgLz4NCiAgICA8L2c+DQogIDwvc3ZnPg==',
    altText: 'Eurosport 1',
    widthRatio: 1.42,
  },
  e2: {
    src:
      'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjUgMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPGcgZmlsbD0iI0I5QkJDQSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgPHBhdGggZD0iTTYuNzg2OCA0LjM3MUgzLjUxMVYuNjMwN2MwLS4yNjY4LjIxNi0uNDgzOS40ODA4LS40ODM5aDguNTQ0Yy4yNjUyIDAgLjQ4MDkuMjE4Ni40ODA5LjQ4NTJsLS4wMDA2IDIuMDk3YzAgLjI4OC0uMTc5LjQ5NTUtLjQ2MzguNDk1NUg2Ljc4Njh2MS4xNDY3ek0zLjM5NDMgMTUuMDQyOGwzLjM5MjUtMy4wNzcxaDUuNzU1M2MuMjc2MyAwIC40NzU4LjIzNTkuNDc1OC40OHYyLjExMzNjMCAuMjY3LS4xOTIuNDgzOC0uNDU2OC40ODM4SDMuMzk0M3oiIC8+DQogICAgICA8cGF0aCBkPSJNNi43ODY4IDkuMTkxOGw0LjM0NzctMS44NjIzSDYuNzg2OFY0LjM3MDlMNC4yNjggNy4zMjk1SDBMMi43MjUgOS4xOTE4LjM4NTMgMTEuOTY1N2wzLjkwODItMS43MDMyIDIuNDkzMyAxLjcwMzJ6TTE0Ljk1NDQgMTQuMTI5MXYuNDMwN2MwIC4yNjY3LjE5Mi40ODM3LjQ1Ny40ODM3SDI0LjUwMWMuMjY0OCAwIC40NTY5LS4yMTcuNDU2OS0uNDgzN3YtMi4xMTNjMC0uMjQ0LS4xOTk3LS40OC0uNDc2LS40OGgtNC4yNTQ3bDIuNjQ4NC0zLjU2ODdjMS41NzktMi4wNDc0IDEuOTI0Ny00LjMzNzUgMS4wNjI0LTYuMDg4M0MyMy4yMTU0Ljg0MTggMjEuNjk1NC4wMDAxIDE5Ljc2NDUuMDAwMWMtMy4wMTA1LjAyMi00LjcwNTIgMS42NzQtNC43NzIxIDQuNjUxbC0uMDEzNS43MDY4YzAgLjI4NjYuMjA2NS40NjY0LjQ5MjYuNDY2NGwyLjA0MzcuMDAwOGMuMjY1NSAwIC40NjQxLS4yMDkzLjQ3ODgtLjQ4MWwuMDMwNS0uNjQ3Yy4wNDQyLS43OTY3LjM2ODMtMS43NDYxIDEuNjY0Ni0xLjc0NjEgMS4wNTAyIDAgMS41NzYxLjY3MjggMS42MDMxIDEuMzU5My4wMjk1Ljc1NzYtLjE1NjIgMS4zMjY1LS44MTQgMi4xOTJsLTUuMjkwMyA3LjAxMDVjLS4xNTQxLjE4ODctLjIzMzUuMzQzNi0uMjMzNS42MTYzIiAvPg0KICAgIDwvZz4NCiAgPC9zdmc+',
    altText: 'Eurosport 2',
    widthRatio: 1.66,
  },
};

export const BaseIcon = styled.img`
  background-size: 'contain';
  height: ${({ height }) => `${height}px`};
  width: ${({ type, height }) => `${(iconMap[type].widthRatio || 1) * height}px`};
  display: 'inline-block';
`;

const Icon = ({ type, alt, ...props }) => (
  <BaseIcon {...props} src={iconMap[type].src} alt={alt || iconMap[type].altText} type={type} />
);

Icon.defaultProps = {
  alt: '',
};

Icon.propTypes = {
  type: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Icon;