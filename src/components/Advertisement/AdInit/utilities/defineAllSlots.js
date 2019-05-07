/* eslint-disable no-undef,no-param-reassign */
export default (gptInstance, defineSlotArgs, outOfPageSlotName) =>
  defineSlotArgs
    .map(defineSlotParam => {
      let slot;

      if (defineSlotParam.size) {
        if (defineSlotParam.name === outOfPageSlotName) {
          slot = gptInstance
            .defineOutOfPageSlot(defineSlotParam.adUnitPath, defineSlotParam.optDiv)
            .addService(gptInstance.pubads());
        } else {
          slot = gptInstance
            .defineSlot(defineSlotParam.adUnitPath, defineSlotParam.size, defineSlotParam.optDiv)
            .addService(gptInstance.pubads());
        }
      }

      if (slot) {
        return {
          key: defineSlotParam.optDiv,
          slot,
        };
      }

      return false;
    })
    .filter(Boolean);
