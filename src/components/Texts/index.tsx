import React from 'react';
import { View } from 'react-native';
import { colors } from '../../themes';
import { H1Styled, H2Styled } from './styles';

// import { Container } from './styles';

interface H1Props {
  text: string;
  isDark?: boolean;
}

export const H1: React.FC<H1Props> = ({ text, isDark }) => {
  const colorText = isDark ? colors.primary : colors.secondary;
  return <H1Styled style={{ color: colorText }}>{text}</H1Styled>;
};

export const H2: React.FC<H1Props> = ({ text, isDark }) => {
  const colorText = isDark ? colors.blueDark : colors.white;
  return <H2Styled style={{ color: colorText }}>{text}</H2Styled>;
};
