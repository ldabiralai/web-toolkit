import E from '../../assets/channels/E.svg';
import E1 from '../../assets/channels/E1.svg';
import E2 from '../../assets/channels/E2.svg';
import E2GR from '../../assets/channels/E2GR.svg';
import E2NO from '../../assets/channels/E2NO.svg';
import E2RUG from '../../assets/channels/E2RUG.svg';

export const icons = {
  E2GR: {
    src: E2GR,
    altText: 'Eurosport 2',
    widthRatio: 3.5,
  },
  E2NO: {
    src: E2NO,
    altText: 'Eurosport 2',
    widthRatio: 2.06,
  },
  E2RUG: {
    src: E2RUG,
    altText: 'Eurosport 2',
    widthRatio: 4,
  },
  E1: {
    src: E1,
    altText: 'Eurosport 1',
    widthRatio: 1.42,
  },
  E2: {
    src: E2,
    altText: 'Eurosport 2',
    widthRatio: 1.66,
  },
  E: {
    src: E,
    altText: 'Eurosport',
    widthRatio: 0.87,
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
