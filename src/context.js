import { createContext } from 'react';
import mixpanel from 'mixpanel-browser';

const enabled = !!process.env.REACT_APP_MIXPANEL_TOKEN;
if (enabled) {
  mixpanel.init(process.env.REACT_APP_MIXPANEL_TOKEN);
}

export default createContext(enabled ? mixpanel : null);
