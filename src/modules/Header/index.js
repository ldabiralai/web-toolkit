import React, { Component, Fragment } from 'react';
import styled, { css } from 'react-emotion';
import * as breakpoints from '../../breakpoints';
import * as colors from '../../colors';
import Logo from '../../elements/Logo';

import BurgerMenu from '../BurgerMenu';
import BurgerIcon from '../../elements/BurgerIcon';

import Link from '../../elements/Link';

const StyledWrapper = styled.header`
  background: ${colors.brandBase};
  height: 50px;
  padding-left: 18px;
  display: flex;
  align-items: center;
  ${breakpoints.medium(css`
    height: 60px;
    padding-left: 32px;
  `)};
  ${breakpoints.large(css`
    height: 70px;
  `)};
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
      <BurgerMenu
        open={isBurgerMenuOpen}
        onClick={this.toggleBurgerMenu}
        header={menuItems}
        homePageUrl={homePageUrl}
      />
    );
  };

  render() {
    const { homePageUrl } = this.props;

    return (
      <Fragment>
        {this.getBurgerMenu()}
        <StyledWrapper {...this.props}>
          {this.getBurgerIcon()}
          <Link href={homePageUrl}>
            <Logo />
          </Link>
        </StyledWrapper>
      </Fragment>
    );
  }
}

export default Header;
