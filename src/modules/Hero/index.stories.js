import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, object } from '@storybook/addon-knobs';
import { Hero } from '../..';

const data = {
  title: 'Klopp calls Ancelotti praise tactics ahead of Napoli clash',
  img: 'https://i.eurosport.com/taiga/MagicBox/Crop/16_9/0_20180710-130536.jpeg',
  author: {
    name: 'Eurosport',
    img: 'https://i.eurosport.com/2014/04/23/1223468-25519942-150-150.jpg',
  },
  time: 'September 4th 2018 at 12:40PM',
};

storiesOf('Modules|Hero', module)
  .addParameters({
    backgrounds: { disable: true },
  })
  .add('default', () => (
    <Hero
      title={text('Title', data.title)}
      img={text('img', data.img)}
      time={text('publication date', data.time)}
      author={object('author', data.author)}
    />
  ));
