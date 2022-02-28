import React, { useContext, useState } from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import styled from 'styled-components/native';
import AuthContext, { AuthProvider } from './contexts/auth';

import AuthRoute from './routes/auth.routes';
import Dashboard from './screens/Dashboard';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import { colors } from './themes';

// import { Container } from './styles';

const App: React.FC = () => {
  const [isLogged, setIsLogged] = useState(false);
  const { signed } = useContext(AuthContext);
  return signed ? <Dashboard /> : <AuthRoute />;
};

export default App;
