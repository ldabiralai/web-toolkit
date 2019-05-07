import * as events from './ad-events';

export default (getGooglePublisherTagInstance, type, detail) => {
  let event;

  switch (type) {
    case events.INJECT_AD_SLOT:
      event = new CustomEvent(events.INJECT_AD_SLOT, { detail });
      break;
    case events.REFRESH_AD_SLOT:
      event = new CustomEvent(events.REFRESH_AD_SLOT, { detail });
      break;
    default:
      break;
  }

  if (!event) return;

  const fn = () => setTimeout(() => window.dispatchEvent(event), 0);

  if (getGooglePublisherTagInstance.apiReady) {
    fn();
  } else {
    // using GPT queue to start emiting window events
    getGooglePublisherTagInstance.cmd.push(fn);
  }
};
