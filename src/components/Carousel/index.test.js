import React from 'react';
import { mount } from 'enzyme';
import Carousel from './index';

describe('Carousel test', () => {
  it('handleSwipe', () => {
    const wrapper = mount(
      <Carousel>
        <div>1</div>
        <div>2</div>
        <div>1</div>
        <div>2</div>
      </Carousel>
    );
    wrapper.instance().handleSwipe(1000, 1);
    wrapper.setState({
      left: 0,
      currentSlide: 1,
      slideWidth: 500,
      slideByRow: 2,
      length: 4,
      wrapperWidth: 2000,
    });
    expect(wrapper.state().left).toEqual(20);
  });
});
