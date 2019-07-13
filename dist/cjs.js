'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);
var mixpanel = _interopDefault(require('mixpanel-browser'));

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

const context = React.createContext(null);
const Consumer = context.Consumer;
const Provider = context.Provider;
const useMixpanel = () => React.useContext(context);
const withMixpanel = Component => props => React__default.createElement(Consumer, null, mixpanel => React__default.createElement(Component, _extends({
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
  return React__default.createElement(Provider, {
    value: mixpanel
  }, children);
};

exports.MixpanelProvider = MixpanelProvider;
exports.useMixpanel = useMixpanel;
exports.withMixpanel = withMixpanel;
