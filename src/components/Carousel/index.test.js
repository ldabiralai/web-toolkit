import React from 'react';
import { mount } from 'enzyme';
import Carousel from './index';

const initialState = {
  left: 0,
  currentSlide: 1,
  slideWidth: 500,
  slideByRow: 2,
  length: 6,
  wrapperWidth: 2000,
};

const initialSlides = (
  <Carousel>
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
  </Carousel>
);

describe('Carousel test', () => {
  it('must render the carousel', () => {
    expect(mount(initialSlides)).toMatchSnapshot();
  });

  it('slide with touch event', async () => {
    const wrapper = mount(initialSlides);
    wrapper.setState(initialState);
    // Swipe to right
    wrapper.instance().handleSwipe(1200, 1);
    expect(wrapper.state().left).toEqual(-240);
    wrapper.instance().lockSlides(1200);
    await new Promise(resolve => setTimeout(resolve, 50));
    expect(wrapper.state().left).toEqual(-500);
    // Swipe to right
    wrapper.instance().handleSwipe(5200, 1);
    expect(wrapper.state().left).toEqual(-500);
    wrapper.instance().lockSlides(5200);
    await new Promise(resolve => setTimeout(resolve, 50));
    expect(wrapper.state().left).toEqual(-500);
    // Swipe to left
    wrapper.instance().handleSwipe(-1480, 1);
    expect(wrapper.state().left).toEqual(-204);
    wrapper.instance().lockSlides(-1480);
    await new Promise(resolve => setTimeout(resolve, 50));
    expect(wrapper.state().left).toEqual(-0);
  });
  it('slide with arrow', async () => {
    const wrapper = mount(initialSlides);
    wrapper.setState(initialState);
    // Next slide
    wrapper.instance().slide();
    expect(wrapper.state().left).toEqual(-500);
    // Next slide
    wrapper.instance().slide();
    expect(wrapper.state().left).toEqual(-1000);
    // Next slide
    wrapper.instance().slide();
    expect(wrapper.state().left).toEqual(-1500);
    // Next slide
    wrapper.instance().slide();
    expect(wrapper.state().left).toEqual(-2000);
    // Next slide
    wrapper.instance().slide();
    expect(wrapper.state().left).toEqual(-2000);
    // Previous slide
    wrapper.instance().slide(true);
    expect(wrapper.state().left).toEqual(-1500);
    // Previous slide
    wrapper.instance().slide(true);
    expect(wrapper.state().left).toEqual(-1000);
    // Previous slide
    wrapper.instance().slide(true);
    expect(wrapper.state().left).toEqual(-500);
    // Previous slide
    wrapper.instance().slide(true);
    expect(wrapper.state().left).toEqual(0);
    // Previous slide
    wrapper.instance().slide(true);
    expect(wrapper.state().left).toEqual(0);
  });
});
