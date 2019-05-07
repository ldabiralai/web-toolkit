import React from 'react';
import { shallow } from 'enzyme';
import AdPlacement from '.';
import AdManager from '../AdManager';

jest.mock('../AdManager');

describe('AdPlacement', () => {
  let globDate;
  let globMath;

  beforeAll(() => {
    globDate = global.Date;
    globMath = global.Math;

    delete global.Date;

    global.Date = {
      now: () => 'now',
    };

    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0.5;
    global.Math = mockMath;
  });

  afterAll(() => {
    global.Date = globDate;
    global.Math = globMath;
    jest().resetAllMocks();
  });

  it('renders ad with random div', () => {
    expect(shallow(<AdPlacement adType="mpu" isNoDesktop isNoMobile isNoTablet />)).toMatchSnapshot();
  });

  it('calls adManager to render the given ad', () => {
    AdManager.manageAds.injectAdSlot.mockResolvedValue(jest.fn());
    shallow(<AdPlacement adType="betting-box" isNoDesktop isNoMobile isNoTablet />);
    expect(AdManager.manageAds.injectAdSlot).toHaveBeenCalledWith('betting-box', 'adIdnow500', true, true, true);
  });
});
