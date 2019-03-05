import React, { Component } from 'react';
import styled, { css, injectGlobal } from 'react-emotion';
import PropTypes from 'prop-types';

import * as breakpoints from '../../breakpoints';
import * as colors from '../../colors';

import { Link, Logo, BurgerMenu, BurgerIcon } from '../..';

const StyledWrapper = styled.header`
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
    height: 60px;
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
    const { menuItems, homePageUrl, quantCastMenuLabel = '' } = this.props;
    const { isBurgerMenuOpen } = this.state;

    if (!menuItems) return null;

    // eslint-disable-next-line no-unused-expressions
    injectGlobal`
      body.modal--opened {
        overflow: hidden;
      }
    `;

    return (
      <BurgerMenu
        isOpen={isBurgerMenuOpen}
        onClose={this.toggleBurgerMenu}
        header={menuItems}
        homePageUrl={homePageUrl}
        quantCastMenuLabel={quantCastMenuLabel}
      />
    );
  };

  render() {
    const { homePageUrl } = this.props;

    return (
      <StyledWrapper {...this.props}>
        {this.getBurgerMenu()}
        {this.getBurgerIcon()}
        <Link href={homePageUrl}>
          <Logo />
        </Link>
      </StyledWrapper>
    );
  }
}

Header.displayName = 'Header';

Header.defaultProps = {
  menuItems: null,
  homePageUrl: '',
  quantCastMenuLabel: '',
};

Header.propTypes = {
  menuItems: PropTypes.shape({
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        sections: PropTypes.array,
      })
    ).isRequired,
    socialItem: PropTypes.shape({
      name: PropTypes.string,
    }),
  }),
  homePageUrl: PropTypes.string,
  quantCastMenuLabel: PropTypes.string,
};

export default Header;
