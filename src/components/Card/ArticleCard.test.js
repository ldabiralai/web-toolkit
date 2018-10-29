import React from 'react';
import { shallow } from 'enzyme';
import ArticleCard from './ArticleCard';

it('renders a ArticleCard', () => {
  expect(shallow(<ArticleCard />)).toMatchSnapshot();
});
