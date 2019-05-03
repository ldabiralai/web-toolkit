import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'react-emotion';
import { object } from '@storybook/addon-knobs';
import { ViewMoreMatches } from '../..';
import { coreLightMinus1 } from '../../colors';

const viewmorematches = storiesOf('Modules|ViewMoreMatches', module).addDecorator(withInfo);

const Wrapper = styled.div`
  color: ${coreLightMinus1};
`;

const Element = styled.div`
  margin-bottom: 15px;
`;

const children = [];
for (let i = 0; i < 10; i += 1) {
  children.push(<Element key={i}>match</Element>);
}

viewmorematches.add('viewmorematches', () => (
  <Wrapper>
    <ViewMoreMatches>{object('children', children)}</ViewMoreMatches>
  </Wrapper>
));
