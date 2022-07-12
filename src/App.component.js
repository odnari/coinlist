import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import AppNavigator from './App.navigator';
import AppProviders from './context';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppProviders>
        <AppNavigator />
      </AppProviders>
    </ApplicationProvider>
  );
};

export default App;
