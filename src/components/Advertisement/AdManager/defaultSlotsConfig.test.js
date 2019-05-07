import defaultSlotsConfig from './defaultSlotsConfig';

describe('Default advertisement slots config', () => {
  it('matches snapshot', () => {
    expect(defaultSlotsConfig).toMatchSnapshot();
  });
});
