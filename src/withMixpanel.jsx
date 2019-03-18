import React from 'react';
import MixpanelContext from './context'

const withMixpanel = (Component) => (props) => (
  <MixpanelContext.Consumer>
    {(mixpanel) => (
      <Component mixpanel={mixpanel} {...props} />
    )}
  </MixpanelContext.Consumer>
);

export default withMixpanel;
