import getChannelIcon, { icons } from './getChannelIcon';

describe('getChannelIcon', () => {
  it('should render correct icon for Eurosport 2 Germany', () => {
    expect(getChannelIcon('E2GR')).toEqual(icons.E2GR);
  });

  it('should render source for Eurosport 2 Norway', () => {
    expect(getChannelIcon('E2NO')).toEqual(icons.E2NO);
  });

  it('should render source for Eurosport 2 Gold', () => {
    expect(getChannelIcon('E2RUG')).toEqual(icons.E2RUG);
  });

  it('should render source for Eurosport 1', () => {
    expect(getChannelIcon('E1anything')).toEqual(icons.E1);
  });

  it('should render source for Eurosport 2', () => {
    expect(getChannelIcon('E2anything')).toEqual(icons.E2);
  });

  it('should render generic eurosport logo when type is unknown', () => {
    expect(getChannelIcon('unknown')).toEqual(icons.E);
  });
});
