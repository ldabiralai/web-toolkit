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

  it('should pass other props onto Grid', () => {
    expect(shallow(<Grid data-test-id="test">{[<div key="1" />]}</Grid>).prop('data-test-id')).toEqual('test');
  });
});
