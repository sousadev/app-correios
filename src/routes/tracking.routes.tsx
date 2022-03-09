import React, { useState } from 'react';
import { View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { colors } from '../themes';
import TrackingList from '../screens/Tracking/TrackingList';
import TrackingView from '../screens/Tracking/TrackingView';
import TrackingAdd from '../screens/Tracking/TrackingAdd';

const TrackingStack = createNativeStackNavigator();

const TrackingRoute: React.FC = () => {
  return (
    <TrackingStack.Navigator initialRouteName='TrackingList'>
      <TrackingStack.Screen
        name='TrackingList'
        component={TrackingList}
        options={{ headerShown: false }}
      />
      <TrackingStack.Screen
        name='TrackingView'
        component={TrackingView}
        options={{
          headerShown: true,
          title: 'Rastreio',
          headerTintColor: colors.primary,
        }}
      />
      <TrackingStack.Screen
        name='TrackingAdd'
        component={TrackingAdd}
        options={{
          headerShown: false,
          title: 'Add',
          headerTintColor: colors.primary,
        }}
      />
    </TrackingStack.Navigator>
  );
};

export default TrackingRoute;
