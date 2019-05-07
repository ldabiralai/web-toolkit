import defineAllSlots from './defineAllSlots';

describe('defineAllSlots', () => {
  let defineOutOfPageSlotSpy;
  let defineSlotSpy;
  let pubadsSpy;
  let gptInstance;

  beforeEach(() => {
    gptInstance = {};
    gptInstance = {
      defineSlot: () => gptInstance,
      defineOutOfPageSlot: () => gptInstance,
      addService: () => ({ slot: '123' }),
      pubads: () => gptInstance,
    };

    defineOutOfPageSlotSpy = jest.spyOn(gptInstance, 'defineOutOfPageSlot');
    defineSlotSpy = jest.spyOn(gptInstance, 'defineSlot');
    pubadsSpy = jest.spyOn(gptInstance, 'pubads');
  });

  afterEach(() => {
    gptInstance = null;
  });

  it('defines usual slot', () => {
    expect(defineAllSlots(gptInstance, [{ size: [1], adUnitPath: 'path', optDiv: 'slotoptDiv', name: 'mpu' }])).toEqual(
      [{ key: 'slotoptDiv', slot: { slot: '123' } }]
    );

    expect(defineOutOfPageSlotSpy).not.toHaveBeenCalled();
    expect(defineSlotSpy).toHaveBeenCalledWith('path', [1], 'slotoptDiv');
    expect(pubadsSpy).toHaveBeenCalledTimes(1);
  });

  it('defines out of page slot', () => {
    expect(
      defineAllSlots(
        gptInstance,
        [{ size: [1], adUnitPath: 'path', optDiv: 'interstitielSlot', name: 'outOfPageSlot' }],
        'outOfPageSlot'
      )
    ).toEqual([{ key: 'interstitielSlot', slot: { slot: '123' } }]);

    expect(defineSlotSpy).not.toHaveBeenCalled();
    expect(defineOutOfPageSlotSpy).toHaveBeenCalledWith('path', 'interstitielSlot');
    expect(pubadsSpy).toHaveBeenCalledTimes(1);
  });

  it('defines multiple slots with skipping ones without size', () => {
    const slot = { size: [1], adUnitPath: 'path', optDiv: 'slotoptDiv', name: 'interstitiel' };
    const slotWithoutSize = { ...slot, size: null };
    const slots = [slotWithoutSize, slot, { ...slot, name: 'interstitiel', optDiv: 'inter' }];

    expect(defineAllSlots(gptInstance, slots)).toEqual([
      { key: 'slotoptDiv', slot: { slot: '123' } },
      { key: 'inter', slot: { slot: '123' } },
    ]);

    expect(pubadsSpy).toHaveBeenCalledTimes(2);
  });
});
