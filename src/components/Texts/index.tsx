import React from 'react';
import { View } from 'react-native';
import { H1Styled, H2Styled } from './styles';

// import { Container } from './styles';

interface H1Props {
  text: string;
}

export const H1: React.FC<H1Props> = ({ text }) => {
  return <H1Styled>{text}</H1Styled>;
};
export const H2: React.FC<H1Props> = ({ text }) => {
  return <H2Styled>{text}</H2Styled>;
};
