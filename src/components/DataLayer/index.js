import React from 'react';
import PropTypes from 'prop-types';

class DataLayer extends React.Component {
  componentDidMount() {
    const { dataLayer } = this.props;
    if (dataLayer) {
      this.dataLayerScript = document.createElement('script');
      this.dataLayerScript.innerHTML = `window.dataLayer = window.dataLayer || []; window.dataLayer.push(${JSON.stringify(
        dataLayer
      )});`;
      document.body.appendChild(this.dataLayerScript);
    }
  }

  componentWillUnmount() {
    if (this.dataLayerScript) {
      document.body.removeChild(this.dataLayerScript);
    }
  }

  render() {
    return null;
  }
}

DataLayer.defaultProps = {
  dataLayer: null,
};

DataLayer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataLayer: PropTypes.object,
};

export default DataLayer;
