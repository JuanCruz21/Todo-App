import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-ionicons'
import Login from '../pages/Login/Login';
import Register from '../pages/Login/Register';
import LogOut from '../pages/Login/LogOut';
import useToken from '../Services/zustand';

import HomePage from '../pages/Home';
function HomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} headerMode="none" headerShown={false} />
      <Stack.Screen name="LogOut" component={LogOut} headerMode="none" headerShown={false} />
    </Stack.Navigator>
  );
}

function UserScreen() {
  return (
    <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} headerMode="none" headerShown={false} />
      <Stack.Screen name="Register" component={Register} headerMode="none" headerShown={false} />
    </Stack.Navigator>
  );
}

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
    const {token, setToken} = useToken();

  return (
    <>
    {token ? (
      <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home" component={HomeScreen} tabBarIcon={<Icon name="home"/>} options={{ tabBarLabel: 'Home' }} />
        <Tab.Screen name="LogOut" component={LogOut} tabBarIcon={<Icon name="log-out"/>} options={{ tabBarLabel: 'LogOut' }} />
      </Tab.Navigator>
    </NavigationContainer>
    ): (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="UserScreen" screenOptions={{ headerShown: false }}>
          <Stack.Screen name="UserScreen" component={UserScreen} tabBarIcon={<Icon name="home"/>} options={{ tabBarLabel: 'Home' }} />
        </Stack.Navigator>
    </NavigationContainer>
  )}
  </>
  );
}

export default App;