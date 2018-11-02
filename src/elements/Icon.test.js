import React from 'react';
import { shallow } from 'enzyme';
import { createMatchers } from 'jest-emotion';
import * as emotion from 'emotion';
import Icon, {BaseIcon} from './Icon';

expect.extend(createMatchers(emotion));

describe('Icon', () => {
  it('should render source for a valid icon type', () => {
    const wrapper = shallow(<Icon className="test" type="e1" />);
    expect(wrapper.find(BaseIcon).prop('src')).toEqual(
      'data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjEgMTUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+DQogICAgPGcgZmlsbD0ibm9uZSIgZmlsbFJ1bGU9ImV2ZW5vZGQiPg0KICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoMTUgLjEpIj4NCiAgICAgICAgPG1hc2sgaWQ9ImIiIGZpbGw9IiNmZmYiPg0KICAgICAgICAgIDxwYXRoIGlkPSJhIiBkPSJNNiAxNC44OVYwSDB2MTQuODl6IiAvPg0KICAgICAgICA8L21hc2s+DQogICAgICAgIDxwYXRoDQogICAgICAgICAgZD0iTTUuOTk5LjQ4M0EuNDkuNDkgMCAwIDAgNS41MDMgMEguNDk3QS40OTIuNDkyIDAgMCAwIDAgLjQ4NWwuMDAxIDIuMDk2YzAgLjI4OC4xODUuNDk2LjQ3OS40OTZoMi4xMzhsLjAwMyAxMS4zM2EuNDcuNDcgMCAwIDAgLjQ3Mi40ODNoMi40MzVBLjQ3LjQ3IDAgMCAwIDYgMTQuNDA2TDUuOTk5LjQ4M3oiDQogICAgICAgICAgZmlsbD0iI0I5QkJDQSINCiAgICAgICAgICBtYXNrPSJ1cmwoI2IpIg0KICAgICAgICAvPg0KICAgICAgPC9nPg0KICAgICAgPHBhdGgNCiAgICAgICAgZD0iTTYuNzg3IDQuMzcxSDMuNTFWLjYzMWMwLS4yNjcuMjE2LS40ODQuNDgtLjQ4NGg4LjU0NWMuMjY1IDAgLjQ4LjIxOC40OC40ODV2Mi4wOTdjMCAuMjg4LS4xNzkuNDk1LS40NjQuNDk1SDYuNzg3djEuMTQ3ek0zLjM5NCAxNS4wNDNsMy4zOTMtMy4wNzdoNS43NTVjLjI3NiAwIC40NzYuMjM2LjQ3Ni40OHYyLjExM2MwIC4yNjctLjE5Mi40ODQtLjQ1Ny40ODRIMy4zOTR6Ig0KICAgICAgICBmaWxsPSIjQjlCQkNBIg0KICAgICAgLz4NCiAgICAgIDxwYXRoDQogICAgICAgIGZpbGw9IiNCOUJCQ0EiDQogICAgICAgIGQ9Ik02Ljc4NyA5LjE5Mmw0LjM0Ny0xLjg2M0g2Ljc4N1Y0LjM3MWwtMi41MiAyLjk1OEgwbDIuNzI1IDEuODYzLTIuMzQgMi43NzQgMy45MDgtMS43MDQgMi40OTQgMS43MDR6Ig0KICAgICAgLz4NCiAgICA8L2c+DQogIDwvc3ZnPg=='
    );
  });

  it('should display alt text passed in from props', () => {
    const wrapper = shallow(<Icon className="test" type="e1" alt="test-alt" />);
    expect(wrapper.find(BaseIcon).prop('alt')).toEqual('test-alt');
  });

  it('should display default alt text when not passed in props', () => {
    const wrapper = shallow(<Icon className="test" type="e2" />);
    expect(wrapper.find(BaseIcon).prop('alt')).toEqual('Eurosport 2');
  });

  it('should default width of icon to be the same as height when ratio is not configured for the icon type', () => {
    const wrapper = shallow(<Icon className="test" type="play" height={50} />);
    expect(wrapper).toHaveStyleRule('width', '50px');
  });

  it('should apply correct width of icon when ratio is configured for the icon type', () => {
    const wrapper = shallow(<Icon className="test" type="e2" height={50} />);
    expect(wrapper).toHaveStyleRule('width', '83px');
  });

  it('should apply icon height passed in through props', () => {
    const wrapper = shallow(<Icon className="test" type="e2" height={50} />);
    expect(wrapper).toHaveStyleRule('height', '50px');
  });
});
