import React from 'react';
import styled, { css, injectGlobal } from 'react-emotion';
import PropTypes from 'prop-types';

import Cross from '../../assets/close-cross.svg';
import LeftMenu from './LeftMenu';
import RightMenu from './RightMenu';

import { points } from '../../breakpoints';
import { withMatchMedia } from '../../hocs';

// eslint-disable-next-line no-unused-expressions
injectGlobal`
  body.modal--opened {
    overflow: hidden;
  }
`;

const StyledModal = styled.div`
  display: none;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: white;
  color: black;
  z-index: 10;
  ${props =>
    props.isOpen &&
    css`
      display: block;
    `};
`;

const StyledButtonClosed = styled.a`
  position: absolute;
  right: 0;
  top: 0;
  width: 20px;
  height: 20px;
  z-index: 10;
  padding: 15px;
  background: url(${Cross}) no-repeat center center;
  background-size: 20px 20px;
  &:hover {
    cursor: pointer;
  }
`;

const StyledMenu = styled.div`
  display: flex;
  height: 100%;
`;

export class BurgerMenu extends React.Component {
  state = {
    selectedMenuId: 2,
  };

  onMenuSelected = id => {
    this.setState({ selectedMenuId: id });
  };

  render() {
    const { header, onClose, isOpen, isMobileMenu, homePageUrl } = this.props;
    const { selectedMenuId } = this.state;

    return (
      <StyledModal data-test="modal-container" isOpen={isOpen}>
        <StyledButtonClosed onClick={onClose} data-test="burger-menu-close" href="#" />
        <StyledMenu>
          <LeftMenu
            isMobileMenu={isMobileMenu}
            header={header}
            selectedMenuId={selectedMenuId}
            onMenuSelected={this.onMenuSelected}
            homePageUrl={homePageUrl}
          />
          <RightMenu isMobileMenu={isMobileMenu} header={header} selectedMenuId={selectedMenuId} />
        </StyledMenu>
      </StyledModal>
    );
  }
}

BurgerMenu.propTypes = {
  header: PropTypes.shape({
    items: PropTypes.array,
    socialItem: PropTypes.shape({
      name: PropTypes.string,
      sections: PropTypes.array,
    }),
  }).isRequired,
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  isMobileMenu: PropTypes.bool.isRequired,
  homePageUrl: PropTypes.string.isRequired,
};

export default withMatchMedia(`(max-width: ${points.large - 1}px)`, 'isMobileMenu')(BurgerMenu);
