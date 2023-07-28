import React, { useCallback } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/QuickTour';
import Home from '../screens/Home';
import Login from '../screens/Login';

const Stack = createStackNavigator();

const Navigator = () => {

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} style={{ backgroundColor: "white" }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="About" component={About} />
    </Stack.Navigator>
  );
};

export default Navigator;



