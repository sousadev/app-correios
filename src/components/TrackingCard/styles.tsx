import React from 'react';

import styled from 'styled-components/native';
import { colors } from '../../themes';

export const TCardContainer = styled.View`
  /* flex: 1; */
  width: 100%;
  background-color: ${colors.whiteCorreios};
  border-left-width: 12px;
  border-left-color: ${colors.primary};

  border-radius: 9px;
  height: 125px;
  padding: 10px 15px;
  margin-bottom: 15px;
`;

export const TCardTopSection = styled.View`
  width: 100%;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;

export const TCardBottom = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  align-content: center;
  flex-direction: row;
  background-color: ${colors.soft};
  border-radius: 10px;
  margin-top: 5px;
  padding: 15px;
`;
