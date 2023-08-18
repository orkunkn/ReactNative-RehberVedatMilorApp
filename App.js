import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Cities } from './src/screens/Cities';
import { City } from './src/screens/City'
import { Restaurant } from './src/screens/Restaurant'
import Map from './src/screens/Map';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Cities'>
        <Stack.Screen
          name="Cities"
          component={Cities}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="City"
          component={City}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Restaurant"
          component={Restaurant}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Map"
          component={Map}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;