import React from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../themes';

// import { Container } from './styles';

export const H1Styled = styled.Text`
  font-family: 'WorkSans-VariableFont_wght';
  font-size: 32px;
  font-weight: bold;
  color: ${colors.primary};
  background-color: transparent;
`;

export const H2Styled = styled.Text`
  font-family: 'WorkSans-VariableFont_wght';
  font-size: 20px;
  font-weight: bold;
  color: ${colors.primary};
  background-color: transparent;
`;
