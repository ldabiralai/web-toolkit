/* eslint-disable no-underscore-dangle */
import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { object, boolean } from '@storybook/addon-knobs';
import { BurgerMenu } from '../..';
import menuMocks from './mocks/feed-menu';

const story = storiesOf('Modules|BurgerMenu', module).addDecorator(withInfo);

story.add('configurable', () => {
  window.__cmp = () => {};

  return (
    <BurgerMenu
      isOpen={boolean('isOpen', true, 'simple props')}
      homePageUrl="www.google.com"
      onClose={e => e.preventDefault()}
      items={object('items', menuMocks.header, 'items prop example')}
    />
  );
});
