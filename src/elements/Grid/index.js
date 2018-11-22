import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import * as breakpoints from '../../breakpoints';

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

const SIX_COLUMNS = ['1', '2', '3', '4', '5', '6'];
const TWELVE_COLUMNS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
const SIX_OFFSETS = ['0', '1', '2', '3', '4', '5'];
const TWELVE_OFFSETS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11'];

export const getWidthString = (colNumber, size) => {
  const width = colNumber * grid[size].columnSize + (colNumber - 1) * grid[size].gap;
  return `width: ${width + grid[size].type};`;
};

export const getOffset = (colNumber, size) => {
  const width = colNumber * grid[size].columnSize + colNumber * grid[size].gap;
  return `margin-left: ${width + grid[size].type};`;
};

export const getContainerStyles = size => {
  const margin = grid[size].gutter === 'auto' ? `margin: 0 auto;` : `margin: 0 ${grid[size].gutter + grid[size].type};`;
  const width = grid[size].width ? `width: ${grid[size].width + grid[size].type};` : '';

  return `${margin}${width}`;
};

export const Container = styled.div`
  ${getContainerStyles('tiny')};

  ${breakpoints.small(css`
    ${getContainerStyles('small')};
  `)};

  ${breakpoints.medium(css`
    ${getContainerStyles('medium')};
  `)};

  ${breakpoints.large(css`
    ${getContainerStyles('large')};
  `)};

  ${breakpoints.wide(css`
    ${getContainerStyles('wide')};
  `)};
`;

export const Row = styled(Container)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
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
  tiny: PropTypes.oneOf(SIX_COLUMNS),
  small: PropTypes.oneOf(SIX_COLUMNS),
  medium: PropTypes.oneOf(TWELVE_COLUMNS),
  large: PropTypes.oneOf(TWELVE_COLUMNS),
  wide: PropTypes.oneOf(TWELVE_COLUMNS),
  tinyOffset: PropTypes.oneOf(SIX_OFFSETS),
  smallOffset: PropTypes.oneOf(SIX_OFFSETS),
  mediumOffset: PropTypes.oneOf(TWELVE_OFFSETS),
  largeOffset: PropTypes.oneOf(TWELVE_OFFSETS),
  wideOffset: PropTypes.oneOf(TWELVE_OFFSETS),
};

export default { Container, Row, Column, SIX_COLUMNS, TWELVE_COLUMNS, SIX_OFFSETS, TWELVE_OFFSETS };
