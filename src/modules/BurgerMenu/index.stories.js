import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object, boolean } from '@storybook/addon-knobs';
import styled from 'react-emotion';
import BurgerMenu from './index';
import headerMocks from './mocks/header';

const story = storiesOf('BurgerMenu', module).addDecorator(withInfo);

const Container = styled.div`
  position: relative;
  width: 95vw;
  height: 95vh;
`;

story.add('configurable', () => (
  <Container>
    <BurgerMenu
      isOpen={boolean('isOpen', true, 'flags')}
      homePageUrl="www.google.com"
      onClose={e => e.preventDefault()}
      header={object('header', headerMocks, 'header prop example')}
    />
  </Container>
));
