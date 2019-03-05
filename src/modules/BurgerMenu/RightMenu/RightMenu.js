import React, { Component } from 'react';
import styled, { css } from 'react-emotion';
import PropTypes from 'prop-types';

import RightMenuSection from './RightMenuSection';
import SocialMenu from '../SocialMenu/SocialMenu';
import { large } from '../../../breakpoints';
import * as types from './sectionTypes';

const StyledWrapper = styled.div`
  width: 80%;

  ${large(css`
    width: calc(100% - 195px);
  `)};
`;

const StyledContainer = styled.div`
  padding: 0 15px;
  height: calc(100% - 61px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  ${props =>
    props.menuType === types.MENU.SPORTS &&
    css`
      display: flex;
    `};

  ${large(css`
    padding: 0 20px;
  `)};
`;

class RightMenu extends Component {
  state = {
    selectedMobileMenuItem: -1,
    isSubMenuOpen: false,
  };

  onSubMenuOpen = item => {
    this.setState({ selectedMobileMenuItem: item, isSubMenuOpen: true });
  };

  onSubMenuClose = () => {
    this.setState({ isSubMenuOpen: false });
  };

  getSocialMenu = () => {
    const { header, isMobileMenu } = this.props;

    if (!header || !header.socialItem) return null;

    const { socialItem } = header;

    const { items = [] } = socialItem.sections.length && socialItem.sections[0];

    return <SocialMenu items={items} name={socialItem.name} isMobile={isMobileMenu} />;
  };

  render() {
    const {
      header: { socialItem, items },
      isMobileMenu,
      selectedMenuId,
    } = this.props;
    const selectedMenu = items && items.find(item => item.id === selectedMenuId);
    const { selectedMobileMenuItem, isSubMenuOpen } = this.state;
    if (!selectedMenu || !socialItem) return null;
    return (
      <StyledWrapper>
        <RightMenuSection
          selectedMobileMenuItem={selectedMobileMenuItem}
          subMenuMobile
          isSubMenuOpen={isSubMenuOpen}
          onSubMenuClose={this.onSubMenuClose}
        />
        <StyledContainer menuType={selectedMenu.menuType}>
          {selectedMenu.sections.map(section => (
            <RightMenuSection
              isMobileMenu={isMobileMenu}
              menuId={selectedMenu.id}
              key={section.name}
              columnType={section.columnType}
              menuType={selectedMenu.menuType}
              items={section.items}
              name={section.name}
              onSubMenuOpen={this.onSubMenuOpen}
            />
          ))}
        </StyledContainer>
        {this.getSocialMenu()}
      </StyledWrapper>
    );
  }
}

RightMenu.defaultProps = {
  header: null,
  isMobileMenu: false,
  selectedMenuId: null,
};

RightMenu.propTypes = {
  header: PropTypes.shape({
    socialItem: PropTypes.shape({
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
      name: PropTypes.string,
    }),
    items: PropTypes.arrayOf(
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
  }),
  isMobileMenu: PropTypes.bool,
  selectedMenuId: PropTypes.number,
};

RightMenu.displayName = 'RightMenu';

export default RightMenu;
