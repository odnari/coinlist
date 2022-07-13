import React from 'react';
import {MarketsProvider} from './markets';
import {SettingsProvider} from './settings';

export default function AppProviders({children}) {
  return (
    <SettingsProvider>
      <MarketsProvider>{children}</MarketsProvider>
    </SettingsProvider>
  );
}
