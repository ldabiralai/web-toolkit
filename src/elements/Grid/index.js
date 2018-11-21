import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import { breakpoints } from '../..';

const grid = {
  tiny: {
    ratio: 100 / 89.86,
    gutter: 5.07,
    get gap() {
      return 5.07 * this.ratio;
    },
    get columnSize() {
      return 10.75 * this.ratio;
    },
    columns: 6,
    type: '%',
  },
  small: {
    ratio: 100 / 91.12,
    gutter: 4.44,
    get gap() {
      return 4.44 * this.ratio;
    },
    get columnSize() {
      return 11.48 * this.ratio;
    },
    columns: 6,
    type: '%',
  },
  medium: {
    ratio: 100 / 91.41,
    gutter: 4.3,
    get gap() {
      return 2.34 * this.ratio;
    },
    get columnSize() {
      return 5.47 * this.ratio;
    },
    columns: 12,
    type: '%',
  },
  large: {
    gap: 20,
    gutter: 'auto',
    columnSize: 62,
    columns: 12,
    width: 964,
    type: 'px',
  },
  wide: {
    gap: 19,
    gutter: 'auto',
    columnSize: 90,
    columns: 12,
    width: 1289,
    type: 'px',
  },
};

export const getWidthString = (colNumber, size) => {
  const width = colNumber * grid[size].columnSize + (colNumber - 1) * grid[size].gap;
  return `width: ${width + grid[size].type};`;
};

export const getOffset = (colNumber, size) => {
  const width = colNumber * grid[size].columnSize + colNumber * grid[size].gap;
  return `margin-left: ${width + grid[size].type};`;
};

export const Container = styled.div`
  margin: 0 ${grid.tiny.gutter + grid.tiny.type};

  ${breakpoints.small(css`
    margin: 0 ${grid.small.gutter + grid.small.type};
  `)};

  ${breakpoints.medium(css`
    margin: 0 ${grid.medium.gutter + grid.medium.type};
  `)};

  ${breakpoints.large(css`
    margin: 0 ${grid.large.gutter + grid.large.type};
  `)};

  ${breakpoints.wide(css`
    margin: 0 ${grid.wide.gutter};
    width: ${grid.wide.width + grid.wide.type};
  `)};
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 ${grid.tiny.gutter + grid.tiny.type};
  justify-content: space-between;

  ${breakpoints.medium(css`
    margin: 0 ${grid.small.gutter + grid.small.type};
  `)};

  ${breakpoints.medium(css`
    margin: 0 ${grid.medium.gutter + grid.medium.type};
  `)};

  ${breakpoints.large(css`
    margin: 0 ${grid.large.gutter + grid.large.type};
  `)};

  ${breakpoints.wide(css`
    margin: 0 ${grid.wide.gutter};
    width: ${grid.wide.width + grid.wide.type};
  `)};
`;

export const Column = styled.div`
  ${({ tiny }) => (tiny ? getWidthString(tiny, 'tiny') : 'width: 100%')};
  ${({ tinyOffset }) => tinyOffset && getOffset(tinyOffset, 'tiny')};

  ${({ small }) =>
    breakpoints.small(css`
      ${small && getWidthString(small, 'small')};
    `)};

  ${({ medium }) =>
    breakpoints.medium(css`
      ${medium && getWidthString(medium, 'medium')};
    `)};

  ${({ large }) =>
    breakpoints.large(css`
      ${large && getWidthString(large, 'large')};
    `)};

  ${({ wide }) =>
    breakpoints.wide(css`
      ${wide && getWidthString(wide, 'wide')};
    `)};

  ${({ smallOffset }) =>
    breakpoints.small(css`
      ${smallOffset && getOffset(smallOffset, 'small')};
    `)};

  ${({ mediumOffset }) =>
    breakpoints.medium(css`
      ${mediumOffset && getOffset(mediumOffset, 'medium')};
    `)};

  ${({ largeOffset }) =>
    breakpoints.large(css`
      ${largeOffset && getOffset(largeOffset, 'large')};
    `)};

  ${({ wideOffset }) =>
    breakpoints.wide(css`
      ${wideOffset && getOffset(wideOffset, 'wide')};
    `)};
`;

Column.propTypes = {
  tiny: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  small: PropTypes.oneOf(['1', '2', '3', '4', '5', '6']),
  medium: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  large: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  wide: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  mediumOffset: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  largeOffset: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
  wideOffset: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']),
};

export default { Container, Row, Column };
