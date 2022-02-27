import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../themes';

// import { Container } from './styles';

export const TopHeader = styled.View`
  /* flex: 1; */
  height: 250px;
  width: 100%;
  background-color: ${colors.secondary};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;
