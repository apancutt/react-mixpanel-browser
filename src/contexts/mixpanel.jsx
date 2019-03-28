import mixpanel from 'mixpanel-browser';
import React, { createContext, useContext } from 'react';

const context = createContext(mixpanel);
export default context;

export const Consumer = context.Consumer;
export const Provider = context.Provider;

export const useMixpanel = () => useContext(context);

export const withMixpanel = (Component) => (props) => (
  <Consumer>
    {(mixpanel) => (
      <Component mixpanel={mixpanel} {...props} />
    )}
  </Consumer>
);
