import React from 'react';
import PropTypes from 'prop-types';

class GoogleTagManager extends React.Component {
  componentDidMount() {
    const { googleTagManagerId } = this.props;
    if (googleTagManagerId) {
      // eslint-disable-next-line no-param-reassign
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        'gtm.start': new Date().getTime(),
        event: 'gtm.js',
      });
      const f = document.getElementsByTagName('script')[0];
      const j = document.createElement('script');
      j.async = true;
      j.id = 'gtmscript';
      j.src = `https://www.googletagmanager.com/gtm.js?id=${googleTagManagerId}`;
      f.parentNode.insertBefore(j, f);
    }
  }

  componentWillUnmount() {
    const element = document.getElementById('gtmscript');
    element.parentNode.removeChild(element);
  }

  render() {
    return null;
  }
}

GoogleTagManager.defaultProps = {
  googleTagManagerId: null,
};

GoogleTagManager.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  googleTagManagerId: PropTypes.string,
};

export default GoogleTagManager;
