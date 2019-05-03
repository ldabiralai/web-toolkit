import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import styled from 'react-emotion';
import { Betting } from '../..';

const betting = storiesOf('Components|Betting', module).addDecorator(withInfo);

const Wrapper = styled.div`
  max-width: 500px;
`;

betting.add('betting', () => (
  <Wrapper>
    <Betting />
  </Wrapper>
));
