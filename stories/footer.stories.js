import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { Footer } from '../src';

const footerStories = storiesOf('Footer', module);

footerStories.add('base', withInfo()(() => <Footer />));
