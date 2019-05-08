import React, { Component } from 'react';
import styled, { css, injectGlobal } from 'react-emotion';
import PropTypes from 'prop-types';
import { HideOnMobile } from '../../hocs';

import Link from '../../elements/Link';
import Logo from '../../elements/Logo';
import BurgerMenu from '../BurgerMenu';
import BurgerIcon from '../../elements/BurgerIcon';
import * as breakpoints from '../../breakpoints';
import * as colors from '../../colors';
import Button from '../../elements/Button';

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
    `};
  display: flex;
  align-items: center;

  ${breakpoints.medium(css`
    height: 70px;
  `)};

  ${Logo.css} {
    margin: 4px 15px 0 0;

    ${breakpoints.medium(css`
      margin: 0 25px 0 17px;
    `)}
  }
`;

const Breadcrumbs = styled(({ className, items }) => (
  <div className={className}>
    {items.map((item, i) => {
      const link = (
        <Link key={item.name} href={item.url}>
          {item.name}
        </Link>
      );

      return i !== items.length - 1 ? <HideOnMobile>{link}</HideOnMobile> : link;
    })}
  </div>
))`
  ${breakpoints.medium(css``)};
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
        items={menuItems}
        homePageUrl={homePageUrl}
      />
    );
  };

  render() {
    const { homePageUrl, cta, breadcrumbs } = this.props;

    return (
      <StyledWrapper {...this.props} data-test="header">
        {this.getBurgerMenu()}
        {this.getBurgerIcon()}
        <Link href={homePageUrl} data-test="header-logo">
          <HideOnMobile>
            <Logo />
          </HideOnMobile>
        </Link>
        {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
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
  cta: null,
  breadcrumbs: [],
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
  cta: PropTypes.shape({
    link: PropTypes.string,
    label: PropTypes.string,
  }),
  breadcrumbs: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
    })
  ),
};

export default Header;
