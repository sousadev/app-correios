import React, { useContext, useEffect, useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { color } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import styled from 'styled-components/native';
import { H1 } from '../../components/Texts';
import { TopHeader } from '../../components/TopHeader';
import { colors } from '../../themes';
import Logo from '../../assets/images/correios-logo.png';

import { InputPassword, InputStandard } from '../../components/Inputs';
import { ButtonSecondary, ButtonWhite } from '../../components/Buttons';
import AuthContext from '../../contexts/auth';
import { useNavigation } from '@react-navigation/native';

// import { Container } from './styles';

const SignUp: React.FC = () => {
  const { signUp } = useContext(AuthContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  function handleClick(route: string) {
    navigation.navigate(route);
  }

  useEffect(() => {}, []);
  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.whiteCorreios,
        flex: 1,
        alignItems: 'stretch',
      }}>
      <TopHeader>
        <Image source={Logo} style={styles.image} />
      </TopHeader>

      <KeyboardAvoidingView
        style={styles.section}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <View style={styles.box}>
          <H1 isDark text='Cadastre-se' />
        </View>
        <InputStandard
          onChangeText={(text: string) => setName(text)}
          text='Nome'
        />
        <InputStandard
          onChangeText={(text: string) => setEmail(text)}
          text='e-Mail'
        />
        <InputPassword
          onChangeText={(text: string) => setPassword(text)}
          text='Senha'
        />

        <ButtonSecondary
          isDark
          text='REGISTRAR'
          onPress={() => {
            const response = signUp({
              email: email,
              password: password,
              name: name,
            });
            if (response) {
              Alert.alert('Registrado com sucesso!');
              handleClick('Login');
            }
          }}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  section: {
    flex: 2,
    backgroundColor: 'transparent',
    padding: 10,
  },
  box: {
    backgroundColor: 'transparent',
    padding: 3,
  },
  image: {
    width: 146,
    height: 100,
  },
  footer: {
    borderTopColor: colors.whiteCorreios,
    position: 'relative',

    // padding: 10,
    paddingTop: 10,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
});

export default SignUp;
