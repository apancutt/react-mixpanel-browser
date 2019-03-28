# react-mixpanel-browser

Wrapper of [mixpanel-browser](https://www.npmjs.com/package/mixpanel-browser) for use in React apps.

Provides a `MixpanelLib` instance via the context API.

## Installation

Install the package using NPM or Yarn:

        npm install --save react-mixpanel-browser
        # or
        # yarn add react-mixpanel-browser

Add your Mixpanel token to `./.env`:

        REACT_APP_MIXPANEL_TOKEN=<token>

## Usage

### `MixpanelProvider` Component

    import React from 'react';
    import { MixpanelProvider } from 'react-mixpanel-browser';

    const App = (props) => (
      <MixpanelProvider>
        ...
      </MixpanelProvider>
    );

    export default App;

### `useMixpanel` Hook

    import React from 'react';
    import { useMixpanel } from 'react-mixpanel-browser';

    const Dashboard = (props) => {

      const mixpanel = useMixpanel();

      if (mixpanel.config.token) { // Check that a token was provided (useful if you have environments without Mixpanel)
        mixpanel.track('My Event', {
          my_custom_prop: 'foo',
        });
      }

      return (
        <>
          ...
        </>
      );

    };

    export default Dashboard;

### `withMixpanel` High-Order Component

    import React, { Component } from 'react';
    import { withMixpanel } from 'react-mixpanel-browser';

    class Dashboard extends Component {

      render() {

        const { mixpanel } = this.props;

        if (mixpanel.config.token) { // Check that a token was provided (useful if you have environments without Mixpanel)
          mixpanel.track('My Event', {
            my_custom_prop: 'foo',
          });
        }

        return (
          <>
            ...
          </>
        );

      }

    }

    export default withMixpanel(Dashboard);
