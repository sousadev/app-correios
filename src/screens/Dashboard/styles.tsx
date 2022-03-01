import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../themes';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { DashboardHeaderStyled, UserHeader } from '../../components/TopHeader';

import LogoRet from '../../assets/images/logo-ret.png';

export const TextDashboard = styled.Text`
  font-family: 'Dosis-Regular';
  font-size: 16px;
  color: ${colors.blueMedium};
`;
export const TextDashboardBold = styled.Text`
  font-family: 'Dosis-Bold';
  font-size: 16px;
  color: ${colors.blueMedium};
`;

export const LogoutButtonStyled = styled.TouchableHighlight`
  padding: 10px;
`;

export const LogoutButton = ({ onPress }: any) => {
  return (
    <LogoutButtonStyled onPress={onPress}>
      <Icon name='logout' size={24} color={colors.blueMedium} />
    </LogoutButtonStyled>
  );
};

export const DashboardHeader = ({ text }: any) => {
  return (
    <DashboardHeaderStyled>
      <View style={styles.section}>
        <View
          style={{
            flex: 1,
            marginBottom: 15,
            marginLeft: 10,
            flexDirection: 'row',
            alignContent: 'space-between',
          }}>
          <Image source={LogoRet} style={{ width: 145, height: 30 }} />
        </View>
      </View>

      <UserHeader>
        <View style={{ flexDirection: 'row', flex: 1 }}>
          <TextDashboard>Olá, </TextDashboard>
          <TextDashboardBold>{text.toUpperCase()}</TextDashboardBold>
        </View>
        <LogoutButton />
      </UserHeader>
    </DashboardHeaderStyled>
  );
};

const styles = StyleSheet.create({
  section: {
    width: '100%',
    flexDirection: 'row',
  },
});
