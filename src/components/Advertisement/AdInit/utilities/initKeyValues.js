export default (gptInstance, keyValues) => {
  Object.keys(keyValues).forEach(key => {
    // eslint-disable-next-line no-undef
    gptInstance.pubads().setTargeting(key, keyValues[key].toString());
  });
};
