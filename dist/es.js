import _extends from '@babel/runtime/helpers/extends';
import React, { useContext, createContext } from 'react';
import mixpanel from 'mixpanel-browser';

const context = /*#__PURE__*/createContext(null);
const Consumer = context.Consumer;
const Provider = context.Provider;
const useMixpanel = () => useContext(context);
const withMixpanel = Component => props => /*#__PURE__*/React.createElement(Consumer, null, mixpanel => /*#__PURE__*/React.createElement(Component, _extends({
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
  return /*#__PURE__*/React.createElement(Provider, {
    value: mixpanel
  }, children);
};

export { MixpanelProvider, useMixpanel, withMixpanel };
