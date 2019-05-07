export const mqMobile = '(max-width: 899px)';
export const mqTablet = '(min-width: 900px) and (max-width: 1279px)';
export const mqDesktop = '(min-width: 1280px)';

export default () =>
  (window.matchMedia(mqMobile).matches && 'mobile-web') ||
  (window.matchMedia(mqTablet).matches && 'tablet-web') ||
  (window.matchMedia(mqDesktop).matches && 'desktop');
