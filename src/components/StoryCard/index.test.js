import React from 'react';
import { shallow } from 'enzyme';
import StoryCard from '.';

describe('StoryCard', () => {
  it('renders its content', () => {
    expect(
      shallow(
        <StoryCard
          href="http://test.com"
          image="src.image"
          published="1 day ago"
          title="title"
          topic="story topic"
          target="_blank"
        />
      )
    ).toMatchSnapshot();
  });
});
