import React from 'react';
import { shallow } from 'enzyme';
import Labels from '.';
import { beforeEventLabels, liveEventLabels, afterEventLabels } from './mockData/labels';

describe('Labels', () => {
  it('renders labels before event', () => {
    const labels = shallow(<Labels labels={beforeEventLabels} />);
    expect(labels).toMatchSnapshot();
  });
  it('renders labels live event', () => {
    const labels = shallow(<Labels labels={liveEventLabels} />);
    expect(labels).toMatchSnapshot();
  });
  it('renders labels after event', () => {
    const labels = shallow(<Labels labels={afterEventLabels} />);
    expect(labels).toMatchSnapshot();
  });
});
