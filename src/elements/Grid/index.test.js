import React from 'react';
import { shallow } from 'enzyme/build';
import Grid, { getWidthString, getOffset, getContainerStyles } from '.';

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

describe('renders the good width and offset for tiny', () => {
  it('renders the good width and offset for tiny for 1 column', () => {
    expect(getWidthString(1, 'tiny')).toEqual('width: 11.96305363899399%;');
    expect(getOffset(1, 'tiny')).toEqual('margin-left: 17.60516358780325%;');
  });

  it('renders the good width for tiny for 6 column', () => {
    expect(getWidthString(6, 'tiny')).toEqual('width: 99.98887157801025%;');
  });
});

describe('renders the good width and offset for small', () => {
  it('renders the good width and offset for small for 1 column', () => {
    expect(getWidthString(1, 'small')).toEqual('width: 12.59877085162423%;');
    expect(getOffset(1, 'small')).toEqual('margin-left: 17.471466198419666%;');
  });

  it('renders the good width for small for 6 column', () => {
    expect(getWidthString(6, 'small')).toEqual('width: 99.95610184372256%;');
  });
});

describe('renders the good width and offset for medium', () => {
  it('renders the good width and offset for medium for 1 column', () => {
    expect(getWidthString(1, 'medium')).toEqual('width: 5.984028005688655%;');
    expect(getOffset(1, 'medium')).toEqual('margin-left: 8.543922984356197%;');
  });

  it('renders the good width for medium for 12 column', () => {
    expect(getWidthString(12, 'medium')).toEqual('width: 99.96718083360682%;');
  });
});

describe('renders the good width and offset for large', () => {
  it('renders the good width and offset for large for 1 column', () => {
    expect(getWidthString(1, 'large')).toEqual('width: 62px;');
    expect(getOffset(1, 'large')).toEqual('margin-left: 82px;');
  });

  it('renders the good width for large for 12 column', () => {
    expect(getWidthString(12, 'large')).toEqual('width: 964px;');
  });
});

describe('renders the good width and offset for wide', () => {
  it('renders the good width and offset for wide for 1 column', () => {
    expect(getWidthString(1, 'wide')).toEqual('width: 90px;');
    expect(getOffset(1, 'wide')).toEqual('margin-left: 109px;');
  });

  it('renders the good width for wide for 12 column', () => {
    expect(getWidthString(12, 'wide')).toEqual('width: 1289px;');
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
});
