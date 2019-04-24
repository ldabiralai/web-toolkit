import styled, { css } from 'react-emotion';
import * as breakpoints from './breakpoints';

export const fontFamilies = {
  interUi:
    "'Inter UI', -apple-system, -system-ui, system-ui, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  alphaHeadline:
    "'ESP AlphaHeadline Tab', -apple-system, -system-ui, system-ui, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif",
  helvetica: 'Helvetica, Roboto, Arial, sans-serif',
};

export const styles = `
@font-face {
  font-family: 'Inter UI';
  font-style:  normal;
  font-weight: normal;
  src: url("https://web-toolkit.eurosport.com/fonts/Inter-UI-Regular.woff2") format("woff2"),
       url("https://web-toolkit.eurosport.com/fonts/Inter-UI-Regular.woff") format("woff");
}
@font-face {
  font-family: 'Inter UI';
  font-style:  italic;
  font-weight: normal;
  src: url("https://web-toolkit.eurosport.com/fonts/Inter-UI-Italic.woff2") format("woff2"),
       url("https://web-toolkit.eurosport.com/fonts/Inter-UI-Italic.woff") format("woff");
}

@font-face {
  font-family: 'Inter UI';
  font-style:  normal;
  font-weight: bold;
  src: url("https://web-toolkit.eurosport.com/fonts/Inter-UI-SemiBold.woff2") format("woff2"),
       url("https://web-toolkit.eurosport.com/fonts/Inter-UI-SemiBold.woff") format("woff");
}
@font-face {
  font-family: 'Inter UI';
  font-style:  italic;
  font-weight: bold;
  src: url("https://web-toolkit.eurosport.com/fonts/Inter-UI-SemiBoldItalic.woff2") format("woff2"),
       url("https://web-toolkit.eurosport.com/fonts/Inter-UI-SemiBoldItalic.woff") format("woff");
}
@font-face {
  font-family: 'ESP AlphaHeadline Tab';
  font-style:  normal;
  font-weight: normal;
  src: url("https://web-toolkit.eurosport.com/fonts/ESPAlphaHeadlineTab-Regular.woff2") format("woff2"),
       url("https://web-toolkit.eurosport.com/fonts/ESPAlphaHeadlineTab-Regular.woff") format("woff");
}

body {
  font-family: ${fontFamilies.interUi};
  font-size: 16px;
}

p {
  font-size: 14px;
  line-height: 1.43;
  @media (min-width: ${breakpoints.points.large}px) {
    font-size: 16px;
    line-height: 1.5;
  }
}
`;

export const H1 = styled.h1`
  font-family: ${fontFamilies.alphaHeadline};
  font-size: 32px;
  line-height: 40px;
  ${breakpoints.medium(`
    font-size: 36px;
    line-height: 44px;
  `)};
  ${breakpoints.large(`
    font-size: 48px;
    line-height: 56px;
  `)};
`;

export const H2 = styled.h2`
  font-family: ${fontFamilies.alphaHeadline};
  font-size: 28px;
  line-height: 36px;
  ${breakpoints.large(`
    font-size: 36px;
    line-height: 44px;
  `)};
`;

export const H3 = styled.h3`
  font-family: ${fontFamilies.alphaHeadline};
  font-size: 24px;
  line-height: 32px;
  ${breakpoints.large(`
    font-size: 28px;
    line-height: 36px;
  `)};
`;

export const H4 = styled.h4`
  font-family: ${fontFamilies.interUi};
  font-size: 16px;
  line-height: 24px;
  ${breakpoints.large(`
    font-size: 18px;
    line-height: 28px;
  `)};
`;

export const H5 = styled.h5`
  font-family: ${fontFamilies.interUi};
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1px;
`;

export const H6 = styled.h6`
  font-family: fontFamilies.interUi;
  font-size: 12px;
  line-height: 18px;
  letter-spacing: 1px;
  text-transform: uppercase;
  ${props =>
    props.small &&
    css`
      font-weight: bold;
      font-size: 8px;
      line-height: 14px;
    `};
`;
