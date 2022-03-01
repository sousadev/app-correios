import React, { useContext } from 'react';
import { Text, View, SafeAreaView } from 'react-native';
import { ButtonCardServices } from '../../components/Buttons';

import { UserHeader } from '../../components/TopHeader';
import AuthContext from '../../contexts/auth';
import { colors } from '../../themes';
import { LogoutButton, TextDashboard, DashboardHeader } from './styles';

// import { Container } from './styles';

const Dashboard: React.FC = () => {
  const { user } = useContext(AuthContext);

  return (
    <SafeAreaView style={{ backgroundColor: colors.white }}>
      <View style={{ flex: 1, marginBottom: 140 }}>
        <DashboardHeader text={user.name} />
      </View>

      <View style={{ flexDirection: 'row', padding: 5 }}>
        <ButtonCardServices
          icon='package-variant-closed'
          text1='RASTREIOS'
          text2='de encomendas'
          number={12}
        />
        <ButtonCardServices
          icon='currency-usd'
          text1='Cotações'
          text2='Preços e prazos'
        />
      </View>
      <View style={{ flexDirection: 'row', padding: 5 }}>
        <ButtonCardServices
          icon='magnify-expand'
          text1='Buscar'
          text2='endereço por CEP'
        />
        <ButtonCardServices
          icon='map-marker'
          text1='Endereços'
          text2='Cadastrados'
          number={4}
        />
      </View>
    </SafeAreaView>
  );
};

export default Dashboard;
