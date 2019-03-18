import mixpanel from 'mixpanel-browser';

export default process.env.REACT_APP_MIXPANEL_TOKEN ? mixpanel : null;
