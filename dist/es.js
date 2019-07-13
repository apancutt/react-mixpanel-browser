import React, { createContext, useContext } from 'react';
import mixpanel from 'mixpanel-browser';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

const context = createContext(null);
const Consumer = context.Consumer;
const Provider = context.Provider;
const useMixpanel = () => useContext(context);
const withMixpanel = Component => props => React.createElement(Consumer, null, mixpanel => React.createElement(Component, _extends({
  mixpanel: mixpanel
}, props)));

const defaults = {
  track_pageview: false // Rarely makes sense to track page views in React apps

};

const MixpanelProvider = ({
  children,
  config,
  name,
  token
}) => {
  config = Object.assign({}, defaults, config);
  mixpanel.init(token || process.env.REACT_APP_MIXPANEL_TOKEN, config, name);
  return React.createElement(Provider, {
    value: mixpanel
  }, children);
};

export { MixpanelProvider, useMixpanel, withMixpanel };
