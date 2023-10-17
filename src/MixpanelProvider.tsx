import * as MixpanelBrowser from 'mixpanel-browser';
import { type ProviderProps, useMemo } from 'react';
import { type MixpanelContext, mixpanelContext } from './mixpanelContext.js';

type Config = MixpanelBrowser.Config;
const { init } = MixpanelBrowser;

export interface MixpanelProviderProps extends Omit<ProviderProps<MixpanelContext>, 'value'> {
  config?: Partial<Config>;
  name?: string;
  token?: string;
}

export function MixpanelProvider({
  children,
  config: _config,
  name: _name,
  token,
}: MixpanelProviderProps) {
  const name = useMemo(() => _name ?? 'react-mixpanel-browser', [_name]);

  const config = useMemo(
    () => ({
      track_pageview: false, // Rarely makes sense to track page views in React apps
      ..._config,
    }),
    [_config],
  );

  const context = useMemo(
    () => (token ? init(token, config, name) : undefined),
    [config, name, token],
  );

  return <mixpanelContext.Provider value={context}>{children}</mixpanelContext.Provider>;
}
