import React from 'react';
import PropTypes from 'prop-types';

class ScriptInjector extends React.Component {
  componentDidMount() {
    const { src, onLoad } = this.props;

    // TODO : Check if script is already loaded (with an id)

    const script = document.createElement('script');
    if (onLoad) {
      script.onload = () => onLoad();
    }
    script.src = src;

    const head = document.getElementsByTagName('head')[0];
    head.appendChild(script);
  }

  render() {
    return null;
  }
}

ScriptInjector.defaultProps = {
  onLoad: () => {},
};

ScriptInjector.propTypes = {
  src: PropTypes.string.isRequired,
  onLoad: PropTypes.func,
};

export default ScriptInjector;
