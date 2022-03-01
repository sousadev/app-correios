import React, { useContext, useState } from 'react';
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
import { useNavigation } from '@react-navigation/native';
import AuthContext from '../../contexts/auth';

// import { Container } from './styles';

const Login: React.FC = () => {
  const navigation = useNavigation();

  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function handleClick(route: string) {
    navigation.navigate(route);
  }

  async function handleLogin(email, password) {
    if (!email || !password) {
      Alert.alert('Erro no preenchimento');
    } else {
      const response = await login({ email, password });
    }
  }

  return (
    <SafeAreaView
      style={{
        backgroundColor: colors.primary,
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
          <H1 text='Entrar' />
        </View>
        <InputStandard
          onChangeText={(text: string) => setEmail(text)}
          text='E-mail de usuário'
        />
        <InputPassword
          onChangeText={(text: string) => setPassword(text)}
          text='Senha'
        />
        <ButtonSecondary
          onPress={() => handleLogin(email, password)}
          isDark
          text='ENTRAR'
        />
      </KeyboardAvoidingView>

      <View style={styles.footer}>
        <ButtonWhite
          onPress={() => handleClick('SignUp')}
          isDark
          text='Cadastre-se'
        />
        <Text
          style={{
            fontSize: 14,
            fontWeight: 'bold',
            paddingVertical: 3,
            color: colors.yellow,
          }}>
          Caso não tenha conta crie uma...
        </Text>
      </View>
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
    borderTopWidth: 1,
    border: '1px',
    // padding: 10,
    paddingTop: 10,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'column-reverse',
  },
});

export default Login;
