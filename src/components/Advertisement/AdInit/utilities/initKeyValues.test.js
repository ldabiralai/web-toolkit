import initKeyValues from './initKeyValues';

describe('initKeyValues', () => {
  it('targets given keyValues', () => {
    const keyValues = {
      sport: 34,
      recurringEvent: 123,
    };

    const gptInstance = {
      storedKeyValues: [],
      pubads: () => gptInstance,
      setTargeting: (...args) => gptInstance.storedKeyValues.push(args),
    };

    initKeyValues(gptInstance, keyValues);
    expect(gptInstance.storedKeyValues).toEqual([['sport', '34'], ['recurringEvent', '123']]);
  });
});
