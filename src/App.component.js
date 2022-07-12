import React from 'react';
import * as eva from '@eva-design/eva';
import {ApplicationProvider} from '@ui-kitten/components';
import AppNavigator from './App.navigator';

const App = () => {
  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <AppNavigator />
    </ApplicationProvider>
  );
};

export default App;
