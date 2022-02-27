import React from 'react';
import { View } from 'react-native';
import { InputPasswordStyled, InputStandardStyled } from './styles';

// import { Container } from './styles';

interface InputStandardProps {
  text: string;
}

export const InputStandard: React.FC<InputStandardProps> = ({ text }) => {
  return <InputStandardStyled placeholder={text} />;
};
export const InputPassword: React.FC<InputStandardProps> = ({ text }) => {
  return <InputPasswordStyled placeholder={text} />;
};
