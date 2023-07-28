import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../views/Login/Login';
import Home from '../views/Home/Home';
import About from '../views/QuickTour/About';
import { NavigationContainer } from '@react-navigation/native';

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



