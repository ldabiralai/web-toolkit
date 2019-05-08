import React from 'react';
import { shallow } from 'enzyme';
import LiveComment from './LiveComment';

const cardDetails = {
  pictureUrl: 'https://i.eurosport.com/2019/04/21/2570541-53309530-2560-1440.jpg?w=800',
  title: 'Federer continues to climb the rankings behind injured Rafael Nadal',
  link: 'www.google.com',
  withPlayButton: false,
};

describe('LiveComment card', () => {
  it('card snapshot', () => {
    expect(shallow(<LiveComment {...cardDetails} />)).toMatchSnapshot();
  });

  describe('card render types', () => {
    it('with video', () => {});

    it('with play button', () => {});

    it('without title', () => {});
  });
});
