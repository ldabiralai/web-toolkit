import React from 'react';
import { withInfo } from '@storybook/addon-info';
import { storiesOf } from '@storybook/react';
import { Header } from '../..';

import headerMenu from '../BurgerMenu/mocks/header';

storiesOf('Header', module)
  .add('default', withInfo()(() => <Header />))
  .add('with menu', withInfo()(() => <Header homePageUrl="www.google.com" menuItems={headerMenu} />));
