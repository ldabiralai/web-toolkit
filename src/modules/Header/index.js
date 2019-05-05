import React, { Component } from 'react';
import styled from '@emotion/styled';
import { css, Global } from '@emotion/core';
import PropTypes from 'prop-types';

import { Link, Logo, BurgerMenu, BurgerIcon, breakpoints, colors, Button } from '../..';

const StyledButton = styled(Button)`
  margin-left: auto;
  margin-right: 11px;
  font-size: 8px;
  line-height: 10px;
  padding: 8px 11px;
  ${breakpoints.medium(css`
    font-size: 12px;
    line-height: 15px;
    padding: 12px 24px;
  `)}
`;

const StyledWrapper = styled.header`
  box-sizing: border-box;
  background: ${colors.brandBase};
  height: 50px;
  ${props =>
    !props.menuItems &&
    css`
      padding-left: 18px;

      ${breakpoints.medium(css`
        padding-left: 32px;
      `)}
    `}
  display: flex;
  align-items: center;

  ${breakpoints.medium(css`
    height: 70px;
  `)};

  ${Logo.css} {
    margin: 4px 15px 0 0px;

    ${breakpoints.medium(css`
      margin: 0 25px 0 17px;
    `)}
  }
`;

class Header extends Component {
  state = {
    isBurgerMenuOpen: false,
  };

  toggleBurgerMenu = e => {
    e.preventDefault();
    const { isBurgerMenuOpen } = this.state;

    this.setState({
      isBurgerMenuOpen: !isBurgerMenuOpen,
    });

    document.body.classList.toggle('modal--opened');
  };

  getBurgerIcon = () => {
    const { menuItems } = this.props;

    if (!menuItems) return null;

    return <BurgerIcon onClick={this.toggleBurgerMenu} />;
  };

  getBurgerMenu = () => {
    const { menuItems, homePageUrl } = this.props;
    const { isBurgerMenuOpen } = this.state;

    if (!menuItems) return null;

    return (
      <>
        <Global
          styles={css`
            body.modal--opened {
              overflow: hidden;
            }
          `}
        />
        <BurgerMenu
          isOpen={isBurgerMenuOpen}
          onClose={this.toggleBurgerMenu}
          items={menuItems}
          homePageUrl={homePageUrl}
        />
      </>
    );
  };

  render() {
    const { homePageUrl, cta } = this.props;

    return (
      <StyledWrapper {...this.props} data-test="header">
        {this.getBurgerMenu()}
        {this.getBurgerIcon()}
        <Link href={homePageUrl} data-test="header-logo">
          <Logo />
        </Link>
        {cta && (
          <StyledButton href={cta.link} data-test="header-cta">
            {cta.label}
          </StyledButton>
        )}
      </StyledWrapper>
    );
  }
}

Header.displayName = 'Header';

Header.defaultProps = {
  menuItems: null,
  homePageUrl: '',
};

Header.propTypes = {
  menuItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sections: PropTypes.arrayOf(
        PropTypes.shape({
          items: PropTypes.arrayOf(
            PropTypes.shape({
              url: PropTypes.string,
              blank: PropTypes.bool,
              name: PropTypes.string,
              icon: PropTypes.string,
            })
          ),
        })
      ),
    })
  ),
  homePageUrl: PropTypes.string,
};

export default Header;
