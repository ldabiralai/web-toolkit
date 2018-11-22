import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'react-emotion';
import E from '../../assets/channels/E.svg';
import { colors, theme, breakpoints } from '../..';

const StyledAuthor = styled.div`
  display: flex;
  align-items: center;
`;

const StyledImage = styled.img`
  height: 32px;
  width: 32px;
  ${breakpoints.small(css`
    height: 40px;
    width: 40px;
  `)};
`;

const StyledSpacer = styled.div`
  width: 1px;
  height: 48px;
  background: ${colors.white};
  opacity: 0.3;
  margin: 0 18px 0 11px;
  ${breakpoints.small(css`
    height: 64px;
    margin: 0 17px 0 13px;
  `)};
  ${breakpoints.small(css`
    height: 56px;
    margin: 0 33px 0 26px;
  `)};
`;

const StyledContent = styled.div`
  flex: 1;
  font-family: ${theme.typography.base};
  font-size: 14px;
  line-height: 24px;
  ${breakpoints.small(css`
    font-size: 16px;
  `)};
`;

const StyledName = styled.p`
  color: ${colors.white};
  font-weight: bold;
`;

const StyledTime = styled.p`
  color: ${colors.manatee};
`;

const Author = ({ name, img, time, ...props }) => (
  <StyledAuthor {...props}>
    <StyledImage src={img} alt={name} />
    <StyledSpacer />

    <StyledContent>
      <StyledName>{name}</StyledName>
      <StyledTime>{time}</StyledTime>
    </StyledContent>
  </StyledAuthor>
);

Author.propTypes = {
  name: PropTypes.string.isRequired,
  time: PropTypes.string.isRequired,
  img: PropTypes.string,
};

Author.defaultProps = {
  img: E,
};

export default Author;
