import React from 'react';
import { mount } from 'enzyme';
import { object } from '@storybook/addon-knobs';
import ViewMore, { StyledButton } from '.';

const children = [];
for (let i = 0; i < 10; i += 1) {
  children.push(
    <div data-test="children" key={i}>
      match
    </div>
  );
}

describe('ViewMore', () => {
  it('renders its content', () => {
    expect(mount(<ViewMore>{object('children', children)}</ViewMore>)).toMatchSnapshot();
  });
  describe('items behavior', () => {
    it('should display one item at first load', () => {
      const wrapper = mount(<ViewMore>{object('children', children)}</ViewMore>);
      expect(wrapper.find('[data-test="children"]').length).toEqual(1);
    });
    it('should display more items when view more button is clicked', () => {
      const wrapper = mount(<ViewMore>{object('children', children)}</ViewMore>);
      wrapper.find(StyledButton).simulate('click');
      expect(wrapper.find('[data-test="children"]').length).toEqual(10);
    });
    it('should display one item when view less button is clicked', async () => {
      const wrapper = mount(<ViewMore>{object('children', children)}</ViewMore>);
      wrapper.find(StyledButton).simulate('click');
      wrapper.find('ul').simulate('transitionEnd');
      wrapper.find(StyledButton).simulate('click');
      expect(wrapper.find('[data-test="children"]').length).toEqual(1);
    });
  });
});
