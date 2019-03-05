import React from 'react';
import styled, { css } from 'react-emotion';
import { rgba } from 'polished';
import { medium } from '../../../breakpoints';
import { cerulean, coreLightMinus1, utahCrimson } from '../../../colors';

const StyledItem = styled.li`
  order: 3;
  font-size: 12px;
  padding: 0 10px;

  &:hover {
    background: ${cerulean};
  }

  ${props =>
    props.isActive &&
    css`
      background: ${cerulean};
    `};

  ${props =>
    props.isBottom &&
    css`
      margin-top: auto;
      order: 4;
      font-size: 10px;
    `};

  ${props =>
    !props.isBottom &&
    css`
      ${medium(css`
        font-size: 15px;
      `)};
    `};

  ${props =>
    props.isWatch &&
    css`
      background: ${utahCrimson};
      order: 2;

      ${medium(css`
        text-transform: uppercase;
      `)};

      &:hover {
        background: ${utahCrimson};
      }
    `};
`;

const StyledItemLink = styled.a`
  display: block;
  padding: 23px 0;
  color: ${coreLightMinus1};
  width: 100%;
  text-decoration: none;
  text-align: center;
  border-bottom: 1px solid ${rgba(coreLightMinus1, 0.15)};
  cursor: pointer;
`;

const LeftMenuItem = ({ item, selectedMenuId, onMenuSelected, isMobileMenu, ...props }) => (
  <StyledItem isActive={item.id === selectedMenuId} isBottom={item.isBottom} isWatch={item.isWatch} {...props}>
    <StyledItemLink
      href={item.link ? item.link.url : '#'}
      onClick={e => {
        if (!item.link) {
          e.preventDefault();
          if (item.sections) onMenuSelected(item.id);
        }
      }}
    >
      {isMobileMenu ? item.shortName || item.name : item.name}
    </StyledItemLink>
  </StyledItem>
);

export default LeftMenuItem;
