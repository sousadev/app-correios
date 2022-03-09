import React from 'react';
import styled from 'styled-components/native';
import { colors } from '../../../themes';

interface TrackingTitleProps {
  text: string;
}

export const TrackingPage = styled.SafeAreaView`
  flex: 1;
  background-color: ${colors.secondary};
  padding: 0 10px;
`;

const TrackingTitleStyled = styled.Text`
  font-size: 22px;
  color: ${colors.primary};
  font-weight: 700;
  align-self: center;
  margin-bottom: 20px;
`;

export const TrackingTitle: React.FC<TrackingTitleProps> = ({ text }) => {
  return <TrackingTitleStyled>{text}</TrackingTitleStyled>;
};
