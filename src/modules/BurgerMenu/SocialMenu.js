import React from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

import SocialIcon from '../../elements/SocialIcon';
import { large } from '../../breakpoints';
import { midnightExpress } from '../../colors';
import Link from '../../elements/Link';

const StyledWrapper = styled.div`
  background: ${midnightExpress};
  color: white;
  display: flex;
  align-items: center;
  height: 61px;
  padding-left: 22px;

  ${large(css`
    padding-left: 70px;
  `)};
`;
const StyledTitle = styled.div`
  font-size: 12px;
  font-weight: bold;
`;
const StyledSocialItems = styled.ul`
  margin: 0;
  padding-left: 10px;
  list-style-type: none;
  display: flex;
  align-items: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  vertical-align: middle;
  margin-right: 10px;
  font-size: 12px;
`;

const SocialMenu = ({ name, items, isMobile }) => {
  if (items.length === 0) return null;

  return (
    <StyledWrapper>
      <StyledTitle>{name}</StyledTitle>
      <StyledSocialItems>
        {items &&
          items.map(({ name: itemName, link, icon }) => (
            <li key={itemName}>
              <StyledLink href={link.url} target={link.blank ? '_blank' : '_self'}>
                <SocialIcon iconText={isMobile ? '' : itemName} iconType={icon} />
              </StyledLink>
            </li>
          ))}
      </StyledSocialItems>
    </StyledWrapper>
  );
};

SocialMenu.defaultProps = {
  isMobile: false,
};

SocialMenu.propTypes = {
  name: PropTypes.string.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string,
      blank: PropTypes.bool,
      name: PropTypes.string,
      icon: PropTypes.string,
    })
  ).isRequired,
  isMobile: PropTypes.bool,
};

export default SocialMenu;
