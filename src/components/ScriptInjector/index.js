import React from 'react';
import PropTypes from 'prop-types';

class ScriptInjector extends React.Component {
  componentDidMount() {
    const { isServer, src, innerHTML, injectPlace, async, id, onLoad } = this.props;

    if (isServer) return;

    if (id && document.getElementById(id) !== null) return;

    this.script = document.createElement('script');

    if (src) {
      this.script.src = src;
    }

    if (onLoad) {
      this.script.onload = () => onLoad();
    }

    if (async) {
      this.script.async = true;
    }

    if (id) {
      this.script.id = id;
    }

    this.script.innerHTML = innerHTML;

    document[injectPlace].appendChild(this.script);
  }

  componentWillUnmount() {
    const { injectPlace } = this.props;

    if (this.script) {
      document[injectPlace].removeChild(this.script);
    }
  }

  render() {
    const { id, src, async, isServer, innerHTML } = this.props;

    if (isServer) {
      const ssrProps = {
        dangerouslySetInnerHTML: innerHTML ? { __html: innerHTML } : undefined,
        src,
        async,
        id,
      };
      return <script {...ssrProps} />;
    }
    return null;
  }
}

ScriptInjector.defaultProps = {
  src: '',
  innerHTML: '',
  async: false,
  injectPlace: 'head',
  id: undefined,
  onLoad: undefined,
};

ScriptInjector.propTypes = {
  isServer: PropTypes.bool.isRequired,
  id: PropTypes.string,
  src: PropTypes.string,
  innerHTML: PropTypes.string,
  injectPlace: PropTypes.oneOf(['head', 'body']),
  async: PropTypes.bool,
  onLoad: PropTypes.func,
};

export default ScriptInjector;
