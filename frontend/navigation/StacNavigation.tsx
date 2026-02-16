import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen';
import Onboarding from '../onboarding/Onboarding';
import AccountTypeSelection from '../screens/accountTypeSelection/AccountTypeSelection';
import Signup from '../screens/auth/Signup';
import Login from '../screens/auth/Login';
import HomeFeed from '../screens/homeFeed/homeFeed';
import Chatbot from '../screens/chatbot/Chatbot';
import Profile from '../screens/profile/Profile';
import EdithProfile from '../screens/profile/EdithProfile';
import Orders from '../screens/orders/Order';

export type RootStackParamList = {
  Splash: undefined;
  Onboarding: undefined;
  AccountTypeSelection: undefined;
  Auth: { accountType: 'client' | 'business' };
  Login: undefined;
  HomeFeed: undefined;
  Signup: undefined;
  Chatbot: undefined;
  Profile: undefined;
  EdithProfile: undefined;
  Orders: undefined;

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
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="HomeFeed" component={HomeFeed} />
        <Stack.Screen name="Chatbot" component={Chatbot} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EdithProfile" component={EdithProfile} />
        <Stack.Screen name="Orders" component={Orders} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}