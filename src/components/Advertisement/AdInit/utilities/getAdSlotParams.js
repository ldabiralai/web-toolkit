export default function(adPlacements, slotId, adUnitPath, device) {
  const defineSlotArgs = [];

  Object.keys(adPlacements).forEach(key => {
    const placement = adPlacements[key];
    const sizes = placement.creative.sizes[device];
    if (sizes === null) return;

    if (placement.count > 1) {
      for (let i = 1; i <= placement.count; i += 1) {
        defineSlotArgs.push({
          name: placement.creative.name,
          adUnitPath: `/${slotId}/${adUnitPath}/${key}`,
          size: sizes,
          optDiv: `ad-${key}-${i}-${device[0]}`,
        });
      }
    } else {
      defineSlotArgs.push({
        name: placement.creative.name,
        adUnitPath: `/${slotId}/${adUnitPath}/${key}`,
        size: sizes,
        optDiv: `ad-${key}-${device[0]}`,
      });
    }
  });

  return defineSlotArgs;
}
