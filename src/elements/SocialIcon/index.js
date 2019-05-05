import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

import { BaseImage, BaseText } from './baseIconStyles';

import facebook from '../../assets/social-icons/facebook.svg';
import snapchat from '../../assets/social-icons/snapchat.svg';
import instagram from '../../assets/social-icons/instagram.svg';
import twitter from '../../assets/social-icons/twitter.svg';

export const StyledFacebook = styled(BaseImage)`
  background-image: url(${facebook});
  background-color: #3d5a98;
  background-size: 13px 13px;
`;

export const StyledSnapchat = styled(BaseImage)`
  background-image: url(${snapchat});
  background-size: 13px 13px;
  background-color: #fffc00;
`;

export const StyledInstagram = styled(BaseImage)`
  background-image: url(${instagram});
  background-size: 19px 19px;
`;

export const StyledTwitter = styled(BaseImage)`
  background-image: url(${twitter});
  background-size: 13px 13px;
  background-color: #0090fe;
`;

const SocialIcon = ({ iconType, iconText }) => (
  <React.Fragment>
    {iconType === 'facebook' && <StyledFacebook />}
    {iconType === 'twitter' && <StyledTwitter />}
    {iconType === 'instagram' && <StyledInstagram />}
    {iconType === 'snapchat' && <StyledSnapchat />}
    {iconText && <BaseText>{iconText}</BaseText>}
  </React.Fragment>
);

SocialIcon.propTypes = {
  iconType: PropTypes.oneOf(['facebook', 'twitter', 'snapchat', 'instagram']).isRequired,
  iconText: PropTypes.string,
};

SocialIcon.defaultProps = {
  iconText: '',
};

export default SocialIcon;
