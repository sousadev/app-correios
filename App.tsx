import React from 'react';
import { View } from 'react-native';
import App from './src/App';
import { NavigationContainer } from '@react-navigation/native';
// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <NavigationContainer>
      <App />
    </NavigationContainer>
  );
};

export default Main;
