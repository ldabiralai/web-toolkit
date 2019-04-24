import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { text } from '@storybook/addon-knobs';
import { StoryCard } from '../..';

const stories = storiesOf('StoryCard', module).addDecorator(withInfo);

stories.add('StoryCard', () => (
  <StoryCard
    image={text('image', 'https://i.eurosport.com/2018/04/29/2324145-48381670-2560-1440.jpg')}
    topic={text('topic', 'daily recap')}
    title={text('title', 'En Catalogne, Nadal prendra-t-il sa revanche ?')}
    published={text('published', '1 day ago')}
    href={text(
      'href',
      'https://www.eurosport.co.uk/tennis/atp-barcelona/2018/rafa-nadal-destroys-stefanos-tsitsipas-to-take-barcelona-title-and-stretch-clay-winning-streak_sto6733274/story.shtml'
    )}
    target={text('target', '_blank')}
  />
));
