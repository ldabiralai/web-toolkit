import getAdSlotParams from './getAdSlotParams';

describe('adSlotParams', () => {
  const creatives = {
    'banner-sponsorship': {
      creative: {
        name: 'banner-sponsorship',
        sizes: {
          desktop: [[970, 250], [970, 90], [728, 90]],
          'tablet-web': [728, 90],
          'mobile-web': [320, 50],
        },
      },
      count: 1,
    },
    mpu: {
      creative: {
        name: 'mpu',
        sizes: {
          desktop: [[300, 250], [300, 600], 'fluid'],
          'tablet-web': [[300, 250], 'fluid'],
          'mobile-web': [[300, 250], 'fluid'],
        },
      },
      count: 3,
    },
    'betting-box': {
      creative: {
        name: 'betting-box',
        sizes: {
          desktop: [[300, 170], 'fluid'],
          'tablet-web': [[300, 170], 'fluid'],
          'mobile-web': null,
        },
      },
      count: 1,
    },
    interstitiel: {
      creative: {
        name: 'interstitiel',
        sizes: {
          desktop: ['out-of-page'],
          'tablet-web': ['out-of-page'],
          'mobile-web': ['out-of-page'],
        },
      },
      count: 1,
    },
  };

  it('generates slots for a given desktop device', () => {
    expect(getAdSlotParams(creatives, 'slot1', 'adPath', 'desktop')).toEqual([
      {
        adUnitPath: '/slot1/adPath/banner-sponsorship',
        name: 'banner-sponsorship',
        optDiv: 'ad-banner-sponsorship-d',
        size: [[970, 250], [970, 90], [728, 90]],
      },
      { adUnitPath: '/slot1/adPath/mpu', name: 'mpu', optDiv: 'ad-mpu-1-d', size: [[300, 250], [300, 600], 'fluid'] },
      { adUnitPath: '/slot1/adPath/mpu', name: 'mpu', optDiv: 'ad-mpu-2-d', size: [[300, 250], [300, 600], 'fluid'] },
      { adUnitPath: '/slot1/adPath/mpu', name: 'mpu', optDiv: 'ad-mpu-3-d', size: [[300, 250], [300, 600], 'fluid'] },
      {
        adUnitPath: '/slot1/adPath/betting-box',
        name: 'betting-box',
        optDiv: 'ad-betting-box-d',
        size: [[300, 170], 'fluid'],
      },
      {
        adUnitPath: '/slot1/adPath/interstitiel',
        name: 'interstitiel',
        optDiv: 'ad-interstitiel-d',
        size: ['out-of-page'],
      },
    ]);
  });

  it('generates slots for a given tablet device', () => {
    expect(getAdSlotParams(creatives, 'slot1', 'adPath', 'tablet-web')).toEqual([
      {
        adUnitPath: '/slot1/adPath/banner-sponsorship',
        name: 'banner-sponsorship',
        optDiv: 'ad-banner-sponsorship-t',
        size: [728, 90],
      },
      { adUnitPath: '/slot1/adPath/mpu', name: 'mpu', optDiv: 'ad-mpu-1-t', size: [[300, 250], 'fluid'] },
      { adUnitPath: '/slot1/adPath/mpu', name: 'mpu', optDiv: 'ad-mpu-2-t', size: [[300, 250], 'fluid'] },
      { adUnitPath: '/slot1/adPath/mpu', name: 'mpu', optDiv: 'ad-mpu-3-t', size: [[300, 250], 'fluid'] },
      {
        adUnitPath: '/slot1/adPath/betting-box',
        name: 'betting-box',
        optDiv: 'ad-betting-box-t',
        size: [[300, 170], 'fluid'],
      },
      {
        adUnitPath: '/slot1/adPath/interstitiel',
        name: 'interstitiel',
        optDiv: 'ad-interstitiel-t',
        size: ['out-of-page'],
      },
    ]);
  });

  it('generates slots for a given mobile device', () => {
    expect(getAdSlotParams(creatives, 'slot1', 'adPath', 'mobile-web')).toEqual([
      {
        adUnitPath: '/slot1/adPath/banner-sponsorship',
        name: 'banner-sponsorship',
        optDiv: 'ad-banner-sponsorship-m',
        size: [320, 50],
      },
      { adUnitPath: '/slot1/adPath/mpu', name: 'mpu', optDiv: 'ad-mpu-1-m', size: [[300, 250], 'fluid'] },
      { adUnitPath: '/slot1/adPath/mpu', name: 'mpu', optDiv: 'ad-mpu-2-m', size: [[300, 250], 'fluid'] },
      { adUnitPath: '/slot1/adPath/mpu', name: 'mpu', optDiv: 'ad-mpu-3-m', size: [[300, 250], 'fluid'] },
      {
        adUnitPath: '/slot1/adPath/interstitiel',
        name: 'interstitiel',
        optDiv: 'ad-interstitiel-m',
        size: ['out-of-page'],
      },
    ]);
  });
});
