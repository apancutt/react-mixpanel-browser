'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var _extends = require('@babel/runtime/helpers/extends');
var React = require('react');
var mixpanel = require('mixpanel-browser');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var _extends__default = /*#__PURE__*/_interopDefaultLegacy(_extends);
var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var mixpanel__default = /*#__PURE__*/_interopDefaultLegacy(mixpanel);

const context = /*#__PURE__*/React.createContext(null);
const Consumer = context.Consumer;
const Provider = context.Provider;
const useMixpanel = () => React.useContext(context);
const withMixpanel = Component => props => /*#__PURE__*/React__default["default"].createElement(Consumer, null, mixpanel => /*#__PURE__*/React__default["default"].createElement(Component, _extends__default["default"]({
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
  mixpanel__default["default"].init(token, config, name);
  return /*#__PURE__*/React__default["default"].createElement(Provider, {
    value: mixpanel__default["default"]
  }, children);
};

exports.MixpanelProvider = MixpanelProvider;
exports.useMixpanel = useMixpanel;
exports.withMixpanel = withMixpanel;
