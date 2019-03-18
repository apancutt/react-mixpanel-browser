import React from 'react';
import Mixpanel from './context'

const withMixpanel = (Component) => (props) => (
  <Mixpanel.Consumer>
    {(mixpanel) => (
      <Component mixpanel={mixpanel} {...props} />
    )}
  </Mixpanel.Consumer>
);

export default withMixpanel;
