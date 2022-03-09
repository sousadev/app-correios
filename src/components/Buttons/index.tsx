import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { StyleSheet, Text, View } from 'react-native';
import { H1, H2 } from '../Texts';
import {
  ButtonCardServicesStyled,
  ButtonPrimaryStyled,
  ButtonSecondaryStyled,
  ButtonWhiteStyled,
} from './styles';
import { colors } from '../../themes';

interface ButtonSecondaryProps {
  text: string;
  isDark?: boolean;
  onPress?: () => void;
}

interface ButtonCardServicesProps {
  text1: string;
  text2: string;
  onPress?: any;
  icon: string;
  number?: any;
}

export const ButtonPrimary: React.FC<ButtonSecondaryProps> = ({
  text,
  isDark,
  onPress,
}) => {
  return (
    <ButtonPrimaryStyled onPress={onPress}>
      <H2 isDark={isDark} text={text} />
    </ButtonPrimaryStyled>
  );
};

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({
  text,
  isDark,
  onPress,
}) => {
  return (
    <ButtonSecondaryStyled onPress={onPress}>
      <H2 isDark={isDark} text={text} />
    </ButtonSecondaryStyled>
  );
};

export const ButtonWhite: React.FC<ButtonSecondaryProps> = ({
  text,
  onPress,
}) => {
  return (
    <ButtonWhiteStyled onPress={onPress}>
      <H2 isDark text={text} />
    </ButtonWhiteStyled>
  );
};

export const ButtonCardServices: React.FC<ButtonCardServicesProps> = ({
  text1,
  text2,
  onPress,
  icon,
  number,
}) => {
  return (
    <ButtonCardServicesStyled onPress={onPress}>
      <View style={{ flex: 1 }}>
        <Icon name={icon} size={40} color={colors.primary} />
        <Text style={styles.text1}>{text1.toUpperCase()}</Text>
        <Text style={styles.text2}>{text2.toUpperCase()}</Text>
      </View>
      <View style={styles.numberBox}>
        <Text style={styles.textNumber}>{number}</Text>
      </View>
    </ButtonCardServicesStyled>
  );
};

const styles = StyleSheet.create({
  text1: {
    fontFamily: 'Dosis-Bold',
    fontSize: 18,
    // fontWeight: 'bold',
    color: colors.primary,
  },
  text2: {
    fontSize: 14,
    fontFamily: 'Dosis-Regular',
    color: colors.primary,
  },
  textNumber: {
    fontFamily: 'Dosis-ExtraBold',
    fontSize: 38,
    // fontWeight: 'bold',
    color: colors.primary,
  },
  numberBox: {
    alignItems: 'stretch',
  },
});
