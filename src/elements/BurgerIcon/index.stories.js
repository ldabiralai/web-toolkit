import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { BurgerIcon } from '../..';

const indexStories = storiesOf('BurgerIcon', module);

indexStories.add('default', withInfo()(() => <BurgerIcon onClick={() => {}} />));