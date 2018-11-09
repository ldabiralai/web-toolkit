import React from 'react';
import { shallow } from 'enzyme';
import Grid from '.';

describe('ContentListing Grid', () => {
  it('renders children without title', () => {
    expect(shallow(<Grid>{[<div key="1">card1</div>, <div key="2">card2</div>]}</Grid>)).toMatchSnapshot();
  });
  it('renders children with title', () => {
    expect(
      shallow(<Grid title="Title">{[<div key="1">card1</div>, <div key="2">card2</div>]}</Grid>)
    ).toMatchSnapshot();
  });
});
