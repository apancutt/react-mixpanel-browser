# react-mixpanel-browser

Thin wrapper for [mixpanel-browser](https://www.npmjs.com/package/mixpanel-browser) for use in React apps.

## Installation

1. Install the package using NPM or Yarn:

        npm install --save react-mixpanel-browser
        # or
        # yarn add react-mixpanel-browser

## Usage

1. Create a project in Mixpanel then add the token to `./.env`:

        REACT_APP_MIXPANEL_TOKEN=<token>

2. Intialize Mixpanel with any custom configuration in `./src/index.jsx`:

        import React from 'react';
        import ReactDOM from 'react-dom';
        import { init as initMixpanel } from 'react-mixpanel-browser';
        import App from './App';

        initMixpanel({/* custom configuration */});

        ReactDOM.render(<App />, document.getElementById('root'));

3. Import the instance into your components where required:

        import React from 'react';
        import mixpanel from 'react-mixpanel-browser';

        const App = (props) = {

          // Note that mixpanel will be null if a token has not been configured

          mixpanel && mixpanel.track('My Event', {
            my_custom_prop: 'foo',
          });

          return <div>This page was tracked in Mixpanel</div>;

        };

        export default App;
