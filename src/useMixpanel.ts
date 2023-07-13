import { useContext } from 'react';
import { type MixpanelContext, mixpanelContext } from './mixpanelContext.js';

export const useMixpanel = (): MixpanelContext => useContext(mixpanelContext);
