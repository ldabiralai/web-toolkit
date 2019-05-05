import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { Author } from '../..';

const authorStories = storiesOf('Components|Author', module);

authorStories
  .add('Author with picture', () => (
    <Author
      name={text('Name', 'Author name')}
      img={text('Avatar', 'https://i.eurosport.com/2014/04/23/1223468-25519942-150-150.jpg')}
      time={text('Time', 'September 4th 2018 at 12:40PM')}
    />
  ))
  .add('Author without picture', () => (
    <Author name={text('Name', 'Author name')} time={text('Time', 'September 4th 2018 at 12:40PM')} />
  ));
