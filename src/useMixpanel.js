import { useContext } from 'react';
import context from './context';

const useMixpanel = () => useContext(context);

export default useMixpanel;
