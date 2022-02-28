import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import AuthContext from '../../contexts/auth';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <View>
      <Text>
        Olá, {user.name} - Email: {user.email}
      </Text>
    </View>
  );
};

export default Dashboard;
