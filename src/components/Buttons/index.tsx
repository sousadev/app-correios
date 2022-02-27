import React from 'react';
import { Text, View } from 'react-native';
import { H1, H2 } from '../Texts';
import { ButtonSecondaryStyled, ButtonWhiteStyled } from './styles';

interface ButtonSecondaryProps {
  text: string;
}

export const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ text }) => {
  return (
    <ButtonSecondaryStyled>
      <H2 text={text} />
    </ButtonSecondaryStyled>
  );
};
export const ButtonWhite: React.FC<ButtonSecondaryProps> = ({ text }) => {
  return (
    <ButtonWhiteStyled>
      <H2 text={text} />
    </ButtonWhiteStyled>
  );
};
