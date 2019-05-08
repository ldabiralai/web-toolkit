import React from 'react';
import { shallow } from 'enzyme';
import LiveComment, { StyledTitle, StyledImage, StyledPlayIcon } from './LiveComment';

const cardDetails = {
  pictureUrl: 'https://i.eurosport.com/2019/04/21/2570541-53309530-2560-1440.jpg?w=800',
  title: 'Federer continues to climb the rankings behind injured Rafael Nadal',
  link: 'www.google.com',
  isVideo: false,
};

describe('LiveComment card', () => {
  it('matches snapshot with valid props', () => {
    expect(shallow(<LiveComment {...cardDetails} />)).toMatchSnapshot();
  });

  it('renders PlayIcon when with video playback', () => {
    const wrapper = shallow(<LiveComment {...cardDetails} isVideo />);
    expect(wrapper.find(StyledImage)).toHaveLength(1);
    expect(wrapper.find(StyledPlayIcon)).toHaveLength(1);
  });

  it('renders card image when title is not provided', () => {
    const props = {
      ...cardDetails,
    };
    delete props.title;
    const wrapper = shallow(<LiveComment {...props} />);
    expect(wrapper.find(StyledImage)).toHaveLength(1);
    expect(wrapper.find(StyledTitle)).toHaveLength(0);
  });
});
