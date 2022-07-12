import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MarketsList from './stacks/Markets/List';
import Details from './stacks/Markets/Details';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="MarketsList"
          component={MarketsList}
          options={{title: 'Markets'}}
        />
        <Stack.Screen
          name="MarketsDetails"
          component={Details}
          options={{title: 'Details'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
