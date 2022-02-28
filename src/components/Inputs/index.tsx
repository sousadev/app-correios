import React from 'react';
import { View } from 'react-native';
import { InputPasswordStyled, InputStandardStyled } from './styles';

// import { Container } from './styles';

interface InputStandardProps {
  text: string;
  onChangeText?: any;
}

export const InputStandard: React.FC<InputStandardProps> = ({
  text,
  onChangeText,
}) => {
  return <InputStandardStyled onChangeText={onChangeText} placeholder={text} />;
};
export const InputPassword: React.FC<InputStandardProps> = ({
  text,
  onChangeText,
}) => {
  return (
    <InputPasswordStyled
      onChangeText={onChangeText}
      secureTextEntry={true}
      placeholder={text}
    />
  );
};
