import React from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';
import * as breakpoints from '../../breakpoints';
import * as colors from '../../colors';
import { Row, Column } from '../../elements/Grid';
import Author from '../../components/Author';
import { H1 } from '../../typography';

const StyledImage = styled.div`
  position: relative;
  background-image: ${({ img }) => `url(${img})`};
  background-size: cover;
  background-position: 50% 0;
  clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 30px), 0% 100%);
  height: 445px;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(transparent 30%, ${colors.vulcan} 90%, ${colors.vulcan});
    z-index: 1;
  }
  ${breakpoints.small(css`
    height: 475px;
    clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 35px), 0% 100%);
    justify-content: flex-start;
    &:before {
      opacity: 0.4;
    }
  `)};
  ${breakpoints.wide(css`
    height: 630px;
    clip-path: polygon(0 0, 100% 0%, 100% calc(100% - 50px), 0% 100%);
  `)};
`;

const StyledRow = styled(Row)`
  z-index: 2;
`;

const StyledTitle = styled(H1)`
  color: ${colors.white};
  word-break: break-word;
  margin-bottom: 32px;
  ${breakpoints.medium(css`
    margin-bottom: 23px;
  `)};
`;

const StyledAuthor = styled(Author)`
  margin-bottom: 57px;

  ${breakpoints.medium(css`
    margin-bottom: 80px;
  `)};
  ${breakpoints.wide(css`
    margin-bottom: 108px;
  `)};
`;

const Hero = ({ title, img, author, time, ...props }) => (
  <StyledImage img={img} {...props}>
    <StyledRow>
      <Column mediumOffset="1" medium="9" wide="7">
        <StyledTitle>{title}</StyledTitle>
        <StyledAuthor {...author} time={time} />
      </Column>
    </StyledRow>
  </StyledImage>
);

Hero.propTypes = {
  title: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  author: PropTypes.shape({
    name: PropTypes.string,
    img: PropTypes.string,
  }),
  time: PropTypes.string,
};

Hero.defaultProps = {
  author: null,
  time: '',
};

Hero.displayName = 'Hero';

export default Hero;
