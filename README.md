# react-mixpanel-browser

Wrapper of [mixpanel-browser](https://www.npmjs.com/package/mixpanel-browser) for use in React apps.

Provides a `Mixpanel` instance via the context API.

If you would like to contribute, please run e.g. `npm husky install` after cloning the repo to install hooks.

## Installation

### NPM

```sh
npm install --save react-mixpanel-browser
```

### Yarn

```sh
yarn add react-mixpanel-browser
```

## Usage

### `MixpanelProvider`

Wrap your application with the `<MixpanelProvider />` component:

```ts
import { MixpanelProvider } from 'react-mixpanel-browser';

// [OPTIONAL] Set your Mixpanel token. It is up to you how this token is obtained (e.g. via env
// var). If `token` is `undefined` or otherwise falsey then `useMixpanel()` will return
// `undefined` which can be useful for environments where Mixpanel integration is not desired.
const MIXPANEL_TOKEN = 'MyToken';

// [OPTIONAL] Custom options to pass to `mixpanel.init()`.
const MIXPANEL_CONFIG = {
  // track_pageview: true, // Set to `false` by default
};

const App = (props) => (
  <MixpanelProvider config={MIXPANEL_CONFIG} token={MIXPANEL_TOKEN}>
    {/* ... */}
  </MixpanelProvider>
);

export default App;
```

### `useMixpanel()`

Call the `useMixpanel()` hook when you need to interact with Mixpanel:

```ts
import { useMixpanel } from 'react-mixpanel-browser';

const Dashboard = (props) => {
  const mixpanel = useMixpanel();

  useEffect(() => {
    if (!mixpanel) {
      // Will be `undefined` if a token was not provided to `MixpanelProvider`
      return;
    }

    mixpanel.track('DashboadView', {
      my_custom_prop: 'foo',
    });
  }, [mixpanel]);

  return <div>Dashboard</div>;
};

export default Dashboard;
```
