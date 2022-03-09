import React, { useState } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from '../themes';
import Dashboard from '../screens/Dashboard';
import TrackingRoute from './tracking.routes';

const DashboardStack = createNativeStackNavigator();

const DashboardRoute: React.FC = () => {
  return (
    <DashboardStack.Navigator initialRouteName='Dashboard'>
      <DashboardStack.Screen
        name='Dashboard'
        component={Dashboard}
        options={{ headerShown: false }}
      />
      <DashboardStack.Screen
        name='Tracking'
        component={TrackingRoute}
        options={{
          headerShown: true,
          title: '',
          headerTintColor: colors.primary,
          headerShadowVisible: false,
          headerBackTitleStyle: {
            fontSize: 10,
          },
          headerStyle: {
            backgroundColor: colors.secondary,
          },
        }}
      />
    </DashboardStack.Navigator>
  );
};

export default DashboardRoute;
