/* eslint-disable no-underscore-dangle */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object, boolean, text } from '@storybook/addon-knobs';
import { BurgerMenu } from '../..';
import headerMocks from './mocks/header';

const story = storiesOf('BurgerMenu', module).addDecorator(withInfo);

story.add('configurable', () => {
  window.__cmp = () => {};

  return (
    <BurgerMenu
      isOpen={boolean('isOpen', true, 'simple props')}
      quantCastMenuLabel={text('quantCastMenuLabel', 'privacy settings', 'simple props')}
      homePageUrl="www.google.com"
      onClose={e => e.preventDefault()}
      header={object('header', headerMocks, 'header prop example')}
    />
  );
});
