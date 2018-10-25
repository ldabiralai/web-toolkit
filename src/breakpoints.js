import { css } from 'react-emotion/macro';

export const small = style => css`
  @media ${'(min-width: 480px)'} {
    ${style};
  }
`;

export const medium = style => css`
  @media ${'(min-width: 700px)'} {
    ${style};
  }
`;

export const large = style => css`
  @media ${'(min-width: 1024px)'} {
    ${style};
  }
`;

export const wide = style => css`
  @media ${'(min-width: 1366px)'} {
    ${style};
  }
`;
