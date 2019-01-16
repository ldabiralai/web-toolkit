import { ReactComponent as EComponent } from '../../assets/channels/E.svg';
import { ReactComponent as E1Component } from '../../assets/channels/E1.svg';
import { ReactComponent as E2Component } from '../../assets/channels/E2.svg';
import { ReactComponent as E2GRComponent } from '../../assets/channels/E2GR.svg';
import { ReactComponent as E2NOComponent } from '../../assets/channels/E2NO.svg';
import { ReactComponent as E2RUGComponent } from '../../assets/channels/E2RUG.svg';

export const icons = {
  E2GR: {
    altText: 'Eurosport 2',
    widthRatio: 3.5,
    component: E2GRComponent,
  },
  E2NO: {
    altText: 'Eurosport 2',
    widthRatio: 2.06,
    component: E2NOComponent,
  },
  E2RUG: {
    altText: 'Eurosport 2',
    widthRatio: 4,
    component: E2RUGComponent,
  },
  E1: {
    altText: 'Eurosport 1',
    widthRatio: 1.42,
    component: E1Component,
  },
  E2: {
    altText: 'Eurosport 2',
    widthRatio: 1.66,
    component: E2Component,
  },
  E: {
    altText: 'Eurosport',
    widthRatio: 0.87,
    component: EComponent,
  },
};

export default callsign => {
  if (callsign === 'E2GR') {
    return icons.E2GR;
  }

  if (callsign === 'E2NO') {
    return icons.E2NO;
  }

  if (callsign === 'E2RUG') {
    return icons.E2RUG;
  }

  if (callsign.startsWith('E1')) {
    return icons.E1;
  }

  if (callsign.startsWith('E2')) {
    return icons.E2;
  }
  return icons.E;
};
