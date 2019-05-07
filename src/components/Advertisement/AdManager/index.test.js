import AdManager from '.';
import createEvent from './createEvent';
import * as events from './ad-events';
import * as adTypes from './ad-types';
import * as pageTypes from './page-types';
import defaultSlotsConfig from './defaultSlotsConfig';

jest.mock('./createEvent');

describe('AdManager', () => {
  beforeEach(() => {
    global.googletag = {
      cmd: [],
      apiReady: true,
    };
  });

  afterEach(() => {
    delete global.googletag;
  });

  afterAll(() => {
    jest().resetAllMocks();
  });

  describe('API', () => {
    it('enums', () => {
      expect(AdManager.enums).toEqual({
        adTypes,
        events,
        pageTypes,
      });
    });

    describe('registerAdEvents', () => {
      let spy;

      beforeAll(() => {
        spy = jest.spyOn(window, 'addEventListener');
      });

      it('registerInjectAdEvent', () => {
        AdManager.registerEvents.injectAd(() => {});
        expect(spy.mock.calls[0]).toEqual([events.INJECT_AD_SLOT, expect.any(Function)]);
      });

      it('registerRefreshAdEvent', () => {
        AdManager.registerEvents.refreshAd(() => {});
        expect(spy.mock.calls[1]).toEqual([events.REFRESH_AD_SLOT, expect.any(Function)]);
      });
    });

    describe('manageAds', () => {
      it('refreshAdSlot', () => {
        AdManager.manageAds.refreshAdSlot('1234');
        expect(createEvent).toHaveBeenCalledWith(global.googletag, events.REFRESH_AD_SLOT, { slotId: '1234' });
      });

      it('injectAdSlot', () => {
        AdManager.manageAds.injectAdSlot('slotA', 'placement', true, true, true, true, 'should not be ignored !');
        expect(createEvent.mock.calls[1]).toEqual([
          global.googletag,
          AdManager.enums.events.INJECT_AD_SLOT,
          {
            adSlotType: 'slotA',
            isNoDesktop: true,
            isNoMobile: true,
            isNoTablet: true,
            placementId: 'placement',
          },
        ]);
      });
    });

    describe('googlePublisherTag', () => {
      it('getInstance', () => {
        expect(AdManager.googlePublisherTag.getInstance()).toEqual(global.googletag);
      });
    });

    it('defaultSlotsConfig', () => {
      expect(AdManager.defaultSlotsConfig).toEqual(defaultSlotsConfig);
    });
  });
});
