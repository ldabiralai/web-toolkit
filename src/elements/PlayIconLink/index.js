import React from 'react';
import styled from 'react-emotion';
import PropTypes from 'prop-types';
import { actionOneDarkBase, coreLightMinus1, coreLightBase } from '../../colors';
import { fontFamilies } from '../../typography';
import PlayIcon from '../PlayIcon';
import Link from '../Link';

export const DivPlayIconBg = styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: ${props => props.bgColorIcon};
  height: 100%;
  width: 48px;
  text-align: center;
`;

export const DivTextBg = styled.div`
  display: inline-block;
  vertical-align: top;
  background-color: ${props => props.bgColorText};
  color: ${coreLightBase};
  height: 100%;
  padding: 0 16px;
  text-align: center;
  font-family: ${fontFamilies.interUi};
  font-size: 10px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const StyledPlayIcon = styled(PlayIcon)`
  display: inline-block;
  width: 38%;
  vertical-align: middle;
`;

const PlayIconLink = styled(({ children, bgColorIcon, bgColorText, ...props }) => {
  const Wrapper = props.href ? Link : styled.div();
  return (
    <Wrapper {...props}>
      <DivPlayIconBg bgColorIcon={bgColorIcon}>
        <StyledPlayIcon isRounded={false} />
      </DivPlayIconBg>
      <DivTextBg bgColorText={bgColorText}>{children}</DivTextBg>
    </Wrapper>
  );
})`
  position: absolute;
  color: ${coreLightMinus1};
  white-space: nowrap;
  height: 48px;
  line-height: 48px;
`;

PlayIconLink.propTypes = {
  href: PropTypes.string,
  target: PropTypes.string,
  bgColorIcon: PropTypes.string,
  bgColorText: PropTypes.string,
};

PlayIconLink.defaultProps = {
  bgColorIcon: actionOneDarkBase,
  bgColorText: '#3c46dc',
};

export default PlayIconLink;
