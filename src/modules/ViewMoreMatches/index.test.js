import React from 'react';
import { mount } from 'enzyme';
import { object } from '@storybook/addon-knobs';
import ViewMoreMatches from '.';

const children = [];
for (let i = 0; i < 10; i += 1) {
  children.push(<div key={i}>match</div>);
}

describe('ViewMoreMatches', () => {
  it('renders its content', () => {
    expect(mount(<ViewMoreMatches>{object('children', children)}</ViewMoreMatches>)).toMatchSnapshot();
  });
});
