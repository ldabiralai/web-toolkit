import { injectGlobal } from 'react-emotion';
import globalResetStyles from './globalReset';
import { styles as typographyStyles } from './typography';

export default () => {
  injectGlobal(globalResetStyles);
  injectGlobal(typographyStyles);
};
