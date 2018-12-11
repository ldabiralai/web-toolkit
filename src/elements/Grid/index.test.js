import React from 'react';
import { shallow } from 'enzyme/build';
import Grid, { getColumnStyles, getContainerStyles } from '.';

describe('renders the good styles for container', () => {
  it('tiny breakpoint', () => {
    expect(getContainerStyles('tiny')).toEqual('margin-left: 5.07%;margin-right: 5.07%;');
  });
  it('small breakpoint', () => {
    expect(getContainerStyles('small')).toEqual('margin-left: 4.44%;margin-right: 4.44%;');
  });
  it('medium breakpoint', () => {
    expect(getContainerStyles('medium')).toEqual('margin-left: 4.3%;margin-right: 4.3%;');
  });
  it('large breakpoint', () => {
    expect(getContainerStyles('large')).toEqual('margin-left: auto;margin-right: auto;width: 964px;');
  });
  it('wide breakpoint', () => {
    expect(getContainerStyles('wide')).toEqual('margin-left: auto;margin-right: auto;width: 1289px;');
  });
});

describe('renders the good styles for column', () => {
  it('tiny breakpoint', () => {
    expect(getColumnStyles(1, 1, 'tiny')).toEqual(
      'width: 11.324133572105762%;margin-left: 16.664910987043086%;padding: 0 2.67%;'
    );
    expect(getColumnStyles(6, 0, 'tiny')).toEqual('width: 94.64868850732117%;margin-left: 0%;padding: 0 2.67%;');
    expect(getColumnStyles('full', 0, 'tiny')).toEqual('width: 94.64868850732117%;margin-left: 0%;padding: 0 2.67%;');
  });
  it('small breakpoint', () => {
    expect(getColumnStyles(1, 1, 'small')).toEqual(
      'width: 12.013394725826707%;margin-left: 16.65969024696526%;padding: 0 2.32%;'
    );
    expect(getColumnStyles(6, 0, 'small')).toEqual('width: 95.311845960653%;margin-left: 0%;padding: 0 2.32%;');
    expect(getColumnStyles('full', 0, 'small')).toEqual('width: 95.311845960653%;margin-left: 0%;padding: 0 2.32%;');
  });
  it('medium breakpoint', () => {
    expect(getColumnStyles(1, 1, 'medium')).toEqual(
      'width: 5.834666666666666%;margin-left: 8.330666666666666%;padding: 0 1.24%;'
    );
    expect(getColumnStyles(12, 0, 'medium')).toEqual('width: 97.472%;margin-left: 0%;padding: 0 1.24%;');
    expect(getColumnStyles('full', 0, 'medium')).toEqual('width: 97.472%;margin-left: 0%;padding: 0 1.24%;');
  });
  it('large breakpoint', () => {
    expect(getColumnStyles(1, 1, 'large')).toEqual('width: 62px;margin-left: 82px;padding: 0 10px;');
    expect(getColumnStyles(12, 0, 'large')).toEqual('width: 964px;margin-left: 0px;padding: 0 10px;');
    expect(getColumnStyles('full', 0, 'large')).toEqual('width: 964px;margin-left: 0px;padding: 0 10px;');
  });
  it('wide breakpoint', () => {
    expect(getColumnStyles(1, 1, 'wide')).toEqual('width: 90px;margin-left: 109px;padding: 0 9.5px;');
    expect(getColumnStyles(12, 0, 'wide')).toEqual('width: 1289px;margin-left: 0px;padding: 0 9.5px;');
    expect(getColumnStyles('full', 0, 'wide')).toEqual('width: 1289px;margin-left: 0px;padding: 0 9.5px;');
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
