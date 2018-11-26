import React from 'react';
import { shallow } from 'enzyme/build';
import Grid, { getColumnStyles, getContainerStyles } from '.';

describe('renders the good styles for container', () => {
  it('tiny breakpoint', () => {
    expect(getContainerStyles('tiny')).toEqual('margin: 0 5.07%;');
  });
  it('small breakpoint', () => {
    expect(getContainerStyles('small')).toEqual('margin: 0 4.44%;');
  });
  it('medium breakpoint', () => {
    expect(getContainerStyles('medium')).toEqual('margin: 0 4.3%;');
  });
  it('large breakpoint', () => {
    expect(getContainerStyles('large')).toEqual('margin: 0 auto;width: 964px;');
  });
  it('wide breakpoint', () => {
    expect(getContainerStyles('wide')).toEqual('margin: 0 auto;width: 1289px;');
  });
});

describe('renders the good styles for column', () => {
  it('tiny breakpoint', () => {
    expect(getColumnStyles(1, 1, 'tiny')).toEqual('width: 11.96305363899399%;margin-left: 17.60516358780325%;');
    expect(getColumnStyles(6, 0, 'tiny')).toEqual('width: 99.98887157801025%;margin-left: 0%;');
    expect(getColumnStyles('full', 0, 'tiny')).toEqual('width: 99.98887157801025%;margin-left: 0%;');
  });
  it('small breakpoint', () => {
    expect(getColumnStyles(1, 1, 'small')).toEqual('width: 12.59877085162423%;margin-left: 17.471466198419666%;');
    expect(getColumnStyles(6, 0, 'small')).toEqual('width: 99.95610184372256%;margin-left: 0%;');
    expect(getColumnStyles('full', 0, 'small')).toEqual('width: 99.95610184372256%;margin-left: 0%;');
  });
  it('medium breakpoint', () => {
    expect(getColumnStyles(1, 1, 'medium')).toEqual('width: 5.984028005688655%;margin-left: 8.543922984356197%;');
    expect(getColumnStyles(12, 0, 'medium')).toEqual('width: 99.96718083360682%;margin-left: 0%;');
    expect(getColumnStyles('full', 0, 'medium')).toEqual('width: 99.96718083360682%;margin-left: 0%;');
  });
  it('large breakpoint', () => {
    expect(getColumnStyles(1, 1, 'large')).toEqual('width: 62px;margin-left: 82px;');
    expect(getColumnStyles(12, 0, 'large')).toEqual('width: 964px;margin-left: 0px;');
    expect(getColumnStyles('full', 0, 'large')).toEqual('width: 964px;margin-left: 0px;');
  });
  it('wide breakpoint', () => {
    expect(getColumnStyles(1, 1, 'wide')).toEqual('width: 90px;margin-left: 109px;');
    expect(getColumnStyles(12, 0, 'wide')).toEqual('width: 1289px;margin-left: 0px;');
    expect(getColumnStyles('full', 0, 'wide')).toEqual('width: 1289px;margin-left: 0px;');
  });
});

describe('Container', () => {
  it('should add extra props passed to the component Container', () => {
    const component = shallow(<Grid.Container data-test="container" />);
    expect(component.props()).toHaveProperty('data-test', 'container');
  });
});

describe('Row', () => {
  it('should add extra props passed to the component Row', () => {
    const component = shallow(<Grid.Row data-test="row" />);
    expect(component.props()).toHaveProperty('data-test', 'row');
  });
});

describe('Column', () => {
  it('should add extra props passed to the component Column', () => {
    const component = shallow(<Grid.Column data-test="column" />);
    expect(component.props()).toHaveProperty('data-test', 'column');
  });

  it('should call StyledColumn with default props when no props set', () => {
    const component = shallow(<Grid.Column />);
    expect(component.props()).toHaveProperty('tiny', 'full');
    expect(component.props()).toHaveProperty('small', 'full');
    expect(component.props()).toHaveProperty('medium', 'full');
    expect(component.props()).toHaveProperty('large', 'full');
    expect(component.props()).toHaveProperty('wide', 'full');
    expect(component.props()).toHaveProperty('tinyOffset', '0');
    expect(component.props()).toHaveProperty('smallOffset', '0');
    expect(component.props()).toHaveProperty('mediumOffset', '0');
    expect(component.props()).toHaveProperty('largeOffset', '0');
    expect(component.props()).toHaveProperty('wideOffset', '0');
  });

  it('should call StyledColumn with default props when props are set', () => {
    const component = shallow(<Grid.Column medium="4" mediumOffset="2" />);
    expect(component.props()).toHaveProperty('tiny', 'full');
    expect(component.props()).toHaveProperty('small', 'full');
    expect(component.props()).toHaveProperty('medium', '4');
    expect(component.props()).toHaveProperty('large', '4');
    expect(component.props()).toHaveProperty('wide', '4');
    expect(component.props()).toHaveProperty('tinyOffset', '0');
    expect(component.props()).toHaveProperty('smallOffset', '0');
    expect(component.props()).toHaveProperty('mediumOffset', '2');
    expect(component.props()).toHaveProperty('largeOffset', '2');
    expect(component.props()).toHaveProperty('wideOffset', '2');
  });
});
