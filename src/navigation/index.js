import {View, Text} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SignInScreen from '../screens/SignInScreen';
import HomeScreen from '../screens/HomeScreen';
import ForgotPasswordScreen from '../screens/ForgotPasswordScreen';
import ActivateAccountScreen from '../screens/ActivateAccountScreen';
import NewPasswordScreen from '../screens/NewPasswordScreen';
import CodeConfirmationScreen from '../screens/CodeConfirmationScreen';

const Stack = createNativeStackNavigator();

const Navigaton = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="SignIn" component={SignInScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPasswordScreen} />
        <Stack.Screen
          name="ActivateAccount"
          component={ActivateAccountScreen}
        />
        <Stack.Screen name="NewPassword" component={NewPasswordScreen} />
        <Stack.Screen
          name="CodeConfirmation"
          component={CodeConfirmationScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigaton;
