import { type Mixpanel } from 'mixpanel-browser';
import { createContext } from 'react';

export type MixpanelContext = Mixpanel | undefined;

export const mixpanelContext = createContext<MixpanelContext>(undefined);
