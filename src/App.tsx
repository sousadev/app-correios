import React, { useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import { colors } from './themes';

// import { Container } from './styles';

const App: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  return isLogged ? <Dashboard /> : <Login />;
};

export default App;
