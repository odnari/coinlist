import React from 'react';
import {MarketsProvider} from './markets';

export default function AppProviders({children}) {
  return <MarketsProvider>{children}</MarketsProvider>;
}
