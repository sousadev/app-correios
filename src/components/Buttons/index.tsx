import React from 'react';
import { Text, View } from 'react-native';
import { H1, H2 } from '../Texts';
import { ButtonSecondaryStyled, ButtonWhiteStyled } from './styles';

interface ButtonSecondaryProps {
  text: string;
  isDark?: boolean;
  onPress?: () => void;
}

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
