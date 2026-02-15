import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Onboarding from '../onboarding/Onboarding';
import AccountTypeSelection from '../screens/accountTypeSelection/AccountTypeSelection';
import Auth from '../screens/auth/Auth';
import Login from '../screens/auth/Login';
import HomeFeed from '../screens/homeFeed/homeFeed';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  AccountTypeSelection: undefined;
  Auth: { accountType: 'client' | 'business' };
  Login: undefined;
  HomeFeed: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function StackNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{
          headerShown: false,
          animation: 'slide_from_right',
        }}
      >
        <Stack.Screen name="Splash" component={SplashScreen} />
        <Stack.Screen name="Onboarding" component={Onboarding} />
        <Stack.Screen 
          name="AccountTypeSelection" 
          component={AccountTypeSelection}
          options={{ animation: 'fade' }}
        />
        <Stack.Screen name="Auth" component={Auth} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeFeed" component={HomeFeed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}