import React from 'react';

const getDisplayName = WrappedComponent => WrappedComponent.displayName || WrappedComponent.name || 'Component';

const withMatchMedia = (mediaQueryString, injectedProp = 'breakpointMatched') => Component =>
  class Decorated extends React.Component {
    state = {
      matches: false,
    };

    static displayName = `withMatchMedia(${getDisplayName(Component)})`;

    componentDidMount() {
      this.mediaQueryList = window.matchMedia(mediaQueryString);
      this.onMediaChange(this.mediaQueryList);
      this.mediaQueryList.addListener(this.onMediaChange);
    }

    componentWillUnmount() {
      this.mediaQueryList.removeListener(this.onMediaChange);
    }

    onMediaChange = mql => this.setState({ matches: mql.matches });

    render() {
      const { matches } = this.state;
      const props = {
        ...this.props,
        [injectedProp]: matches,
      };

      return <Component {...props} />;
    }
  };

export default withMatchMedia;
