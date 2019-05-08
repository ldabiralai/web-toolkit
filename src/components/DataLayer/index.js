import React from 'react';
import PropTypes from 'prop-types';
import ScriptInjector from '../ScriptInjector';

const DataLayer = ({ dataLayer }) => (
  <ScriptInjector
    isServer={false}
    injectPlace="body"
    innerHTML={`window.dataLayer = window.dataLayer || []; window.dataLayer.push(${JSON.stringify(dataLayer)});`}
  />
);

DataLayer.defaultProps = {
  dataLayer: null,
};

DataLayer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  dataLayer: PropTypes.object,
};

export default DataLayer;
