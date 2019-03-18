import mixpanel from './mixpanel';

const defaults = {
  // Mixpanel cookies get big; avoid bloating request headers by using local storage instead
  persistence: 'localStorage',
  // Rarely makes sense to track page views in React apps
  track_pageview: false,
};

export default (config = {}, name = undefined) => mixpanel && mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN, Object.assign({}, defaults, config), name);
