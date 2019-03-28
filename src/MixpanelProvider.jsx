import mixpanel from 'mixpanel-browser';
import React from 'react';
import { Provider } from './contexts/mixpanel';

const defaults = {
  track_pageview: false, // Rarely makes sense to track page views in React apps
};

const MixpanelProvider = ({ children, config, name, token }) => {

  config = Object.assign({}, defaults, config);

  mixpanel.init(token || process.env.REACT_APP_MIXPANEL_TOKEN, config, name);

  return (
    <Provider value={mixpanel}>
      {children}
    </Provider>
  );

};

export default MixpanelProvider;
