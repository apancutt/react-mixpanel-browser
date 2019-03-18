# react-mixpanel-browser

React providers for [mixpanel-browser](https://www.npmjs.com/package/mixpanel-browser) using the [Context API](https://reactjs.org/docs/context.html).

## Installation

1. Install the package from NPM or Yarn:

        npm install --save react-mixpanel-browser
        # or
        # yarn add react-mixpanel-browser

## Usage

1. Create a project in Mixpanel then add the token to `.env`:

        REACT_APP_MIXPANEL_TOKEN=<token>

2. Consume the context either using the `useContext()` hook (stateless components only) or the `withMixpanel()` High-Order Component. The value provided will be either a pre-initialized instance of [MixpanelLib](https://developer.mixpanel.com/docs/javascript-full-api-reference) or `null` if a token was not provided; useful for non-tracked environments.

## Examples

### `useContext()` Hook ###

    import React, { useContext } from 'react';
    import { context as mixpanelContext } from 'react-mixpanel-browser';

    const App = (props) = {

      const mixpanel = useContext(mixpanelContext);

      // Note that mixpanel will be null if a token has not been configured

      mixpanel && mixpanel.track('My Event', {
        my_custom_prop: 'foo',
      });

      return <div>This page was tracked in Mixpanel</div>;

    };

    export default App;

### `withMixpanel()` High-Order Component

    import React from 'react';
    import { withMixpanel } from 'react-mixpanel-browser';

    class App extends Component {

      render() {

        const { mixpanel } = this.props;

        // Note that mixpanel will be null if a token has not been configured

        mixpanel && mixpanel.track('My Event', {
          my_custom_prop: 'foo',
        });

        return <div>This page was tracked in Mixpanel</div>;

      }

    }

    export default withMixpanel(App);
