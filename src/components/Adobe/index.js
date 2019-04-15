import React from 'react';
import PropTypes from 'prop-types';

class AdobeClientInjector extends React.Component {
  constructor(props) {
    super(props);
    const { src } = this.props;
    this.adobeScript = document.createElement('script');
    this.adobeScript.id = 'adobe-script';
    this.adobeScript.src = src;
    this.adobeScript.async = false;

    this.satelliteScript = document.createElement('script');
    this.satelliteScript.id = 'satellite-script';
    this.satelliteScript.type = 'text/javascript';
    this.satelliteScript.async = false;
    this.satelliteScript.innerHTML = `if(typeof(_satellite) != 'undefined'){_satellite.pageBottom();}`;

    document.head.appendChild(this.adobeScript);
    document.body.appendChild(this.satelliteScript);
  }

  componentWillUnmount() {
    if (this.adobeScript) {
      document.head.removeChild(this.adobeScript);
    }
    if (this.satelliteScript) {
      document.body.removeChild(this.satelliteScript);
    }
  }

  render() {
    return null;
  }
}

const AdobeServerInjector = src => (
  <>
    <script id="adobe-script" src={src} />
    <script>
      {`if(typeof(_satellite) != 'undefined'){
             _satellite.pageBottom();}`}
    </script>
  </>
);

const Adobe = ({ src, isServerSide }) =>
  isServerSide ? <AdobeServerInjector src={src} /> : <AdobeClientInjector src={src} />;

Adobe.propTypes = {
  src: PropTypes.string.isRequired,
  isServerSide: PropTypes.bool.isRequired,
};

AdobeClientInjector.propTypes = {
  src: PropTypes.string.isRequired,
};

AdobeServerInjector.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Adobe;
