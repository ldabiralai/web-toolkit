import React from 'react';
import styled, { css } from 'react-emotion';
import { rgba } from 'polished';
import PropTypes from 'prop-types';

import LeftMenuItem from './LeftMenuItem';
import Logo from '../../../elements/Logo';

import { large } from '../../../breakpoints';
import { cerulean, coreLightMinus1, midnightExpress } from '../../../colors';

const StyledWrapper = styled.div`
  width: 20%;
  min-width: 100px;
  background: ${midnightExpress};

  ${large(css`
    width: 195px;
  `)};
`;

const StyledTabs = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0;
  margin: 0;
  list-style: none;
  height: 100%;
  text-align: center;
`;

const StyledTabLogo = styled.a`
  box-sizing: border-box;
  padding: 0 25px 0 17px;
  order: 1;
  height: 53px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid ${rgba(coreLightMinus1, 0.15)};
  &:hover {
    background-color: ${cerulean};
  }
  ${large(css`
    height: 157px;
  `)};

  img {
    width: 100%;
  }
`;

const LeftMenu = ({
  header: { items },
  selectedMenuId,
  onMenuSelected,
  isMobileMenu,
  homePageUrl,
  quantCastMenuLabel,
}) => (
  <StyledWrapper>
    <StyledTabs>
      <StyledTabLogo href={homePageUrl} data-test="burger-logo">
        <Logo small={isMobileMenu} />
      </StyledTabLogo>
      {items &&
        items.map(item => (
          <LeftMenuItem
            isMobileMenu={isMobileMenu}
            selectedMenuId={selectedMenuId}
            onMenuSelected={onMenuSelected}
            key={item.id}
            item={item}
          />
        ))}
      {// eslint-disable-next-line
      quantCastMenuLabel && window.__cmp && (
        <LeftMenuItem
          key="privacy"
          data-test="burger-privacy"
          selectedMenuId={selectedMenuId}
          onClick={() => {
            // eslint-disable-next-line
            window.__cmp('displayConsentUi', 2, true);
          }}
          item={{ id: 1234, name: quantCastMenuLabel }}
        />
      )}
    </StyledTabs>
  </StyledWrapper>
);

LeftMenu.defaultProps = {
  quantCastMenuLabel: '',
  homePageUrl: '#',
};

LeftMenu.propTypes = {
  header: PropTypes.shape({
    items: PropTypes.array,
  }).isRequired,
  selectedMenuId: PropTypes.number.isRequired,
  onMenuSelected: PropTypes.func.isRequired,
  isMobileMenu: PropTypes.bool.isRequired,
  homePageUrl: PropTypes.string,
  quantCastMenuLabel: PropTypes.string,
};

export default LeftMenu;
