import getDevice, { mqDesktop, mqTablet, mqMobile } from './getDevice';

describe('getDevice', () => {
  it('tablet-web', () => {
    global.matchMedia = mq => {
      const matches = mq === mqTablet;
      return {
        matches,
      };
    };
    expect(getDevice()).toBe('tablet-web');
  });

  it('desktop', () => {
    global.matchMedia = mq => {
      const matches = mq === mqDesktop;
      return {
        matches,
      };
    };
    expect(getDevice()).toBe('desktop');
  });

  it('mobile-web', () => {
    global.matchMedia = mq => {
      const matches = mq === mqMobile;
      return {
        matches,
      };
    };
    expect(getDevice()).toBe('mobile-web');
  });
});
