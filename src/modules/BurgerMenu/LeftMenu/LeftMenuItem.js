import React from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/core';
import { rgba } from 'polished';
import { large } from '../../../breakpoints';
import { cerulean, coreLightMinus1, utahCrimson } from '../../../colors';

const StyledItemLink = styled.a`
  display: block;
  color: ${coreLightMinus1};
  width: 100%;
  text-decoration: none;
  text-align: center;
  border-bottom: 1px solid ${rgba(coreLightMinus1, 0.15)};
  cursor: pointer;
`;

const StyledItem = styled.li`
  padding: 0 10px;

  ${StyledItemLink} {
    font-size: 12px;
    line-height: 14px;
    padding: 18px 0;

    ${large(css`
      padding: 22px 0;
      font-size: 14px;
      line-height: 17px;
    `)};
  }

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
      ${StyledItemLink} {
        font-size: 10px;
      }
    `};

  ${props =>
    props.isWatch &&
    css`
      background: ${utahCrimson};
      text-transform: uppercase;

      &:hover {
        background: ${utahCrimson};
      }
    `};
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
