import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { InputPasswordStyled, InputStandardStyled } from './styles';
import { TextInputMask } from 'react-native-masked-text';
import { colors } from '../../themes';

// import { Container } from './styles';

interface InputStandardProps {
  text: string;
  onChangeText?: any;
}

interface InputTrackingCodeProps {
  placeholder: string;
  action: any;
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

export const InputTrackingCode: React.FC<InputTrackingCodeProps> = ({
  placeholder,
  action,
}) => {
  const [text, setText] = useState('');

  return (
    <TextInputMask
      style={styles.input}
      type='custom'
      options={{
        mask: 'AA 999 999 999 AA',
      }}
      value={text}
      placeholder={placeholder}
      onChangeText={(text) => {
        setText(text.toUpperCase());
        action(text);
      }}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    width: 'auto',
    height: 60,
    fontFamily: 'Poppins-Regular',
    fontSize: 14,
    backgroundColor: colors.white,
    color: colors.blueHard,
    borderRadius: 8,

    borderStyle: 'solid',
    padding: 15,
    marginTop: 5,
    marginBottom: 10,
  },
});
