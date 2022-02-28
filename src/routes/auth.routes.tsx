import React, { useState } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';
import { colors } from '../themes';

const AuthStack = createNativeStackNavigator();

const AuthRoute: React.FC = () => {
  return (
    <AuthStack.Navigator initialRouteName='Login'>
      <AuthStack.Screen
        name='Login'
        component={Login}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name='SignUp'
        component={SignUp}
        options={{
          headerShown: true,
          headerTintColor: colors.primary,
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthRoute;
