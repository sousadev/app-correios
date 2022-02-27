import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { H1 } from '../../components/Texts';
import { TopHeader } from '../../components/TopHeader';
import { colors } from '../../themes';
import Logo from '../../assets/images/correios-logo.png';

import { InputStandard } from '../../components/Inputs';
import { ButtonSecondary, ButtonWhite } from '../../components/Buttons';

// import { Container } from './styles';

const Login: React.FC = () => {
  return (
    <SafeAreaView style={{ backgroundColor: colors.primary, flex: 1 }}>
      <TopHeader>
        <Image source={Logo} style={styles.image} />
      </TopHeader>

      <View style={styles.section}>
        <H1 text='Entrar' />
        <InputStandard text='Username' />
        <InputStandard text='Senha' />
        <ButtonSecondary text='ENTRAR' />
      </View>
      <View style={styles.footer}>
        <ButtonWhite text='Cadastre-se' />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 1,
    backgroundColor: 'transparent',
    padding: 10,
  },
  image: {
    width: 146,
    height: 100,
  },
  footer: {
    padding: 10,
  },
});

export default Login;
