import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'react-emotion';
import { object } from '@storybook/addon-knobs';
import { ViewMore } from '../..';
import { coreLightMinus1 } from '../../colors';

const viewmore = storiesOf('Modules|ViewMore', module).addDecorator(withInfo);

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

viewmore.add('viewmore', () => (
  <Wrapper>
    <ViewMore>{object('children', children)}</ViewMore>
  </Wrapper>
));
