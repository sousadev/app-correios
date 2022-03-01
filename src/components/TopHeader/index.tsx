import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../../themes';

// import { Container } from './styles';

export const TopHeader = styled.View`
  flex: 1;
  height: 250px;
  width: 100%;
  background-color: ${colors.secondary};
  border-bottom-left-radius: 25px;
  border-bottom-right-radius: 25px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const DashboardHeaderStyled = styled.View`
  /* flex: 1; */
  width: auto;
  margin-top: 10px;
  margin-bottom: 15px;
  height: 1000px;
  padding: 10px;
  background-color: ${colors.whiteCorreios};
`;

export const UserHeader = styled.View`
  /* flex: 1; */
  flex-direction: row;
  margin: 5px;
  background-color: ${colors.soft};
  height: 50px;
  padding-left: 8px;
  align-items: center;
  justify-content: flex-start;
  border-radius: 8px;
`;
