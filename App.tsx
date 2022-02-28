import React from 'react';
import { View } from 'react-native';
import App from './src/App';
import { NavigationContainer } from '@react-navigation/native';
import { AuthProvider } from './src/contexts/auth';
// import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <NavigationContainer>
      <AuthProvider>
        <App />
      </AuthProvider>
    </NavigationContainer>
  );
};

export default Main;
