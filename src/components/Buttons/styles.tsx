import styled from 'styled-components/native';
import { colors } from '../../themes';

export const ButtonSecondaryStyled = styled.TouchableHighlight`
  width: auto;
  height: 60px;
  border-radius: 8px;
  border: 1px;
  border-color: ${colors.primary};
  color: ${colors.primary};
  background-color: ${colors.yellow};
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 10px;
`;
export const ButtonWhiteStyled = styled.TouchableOpacity`
  width: 100%;
  height: 60px;
  border-radius: 8px;
  border: 1px;
  border-color: ${colors.primary};
  color: ${colors.primary};
  background-color: ${colors.whiteCorreios};
  align-items: center;
  justify-content: center;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const ButtonCardServicesStyled = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  height: 110px;
  border-radius: 11px;
  padding: 10px;
  margin: 4px;
  align-items: flex-end;
  background-color: ${colors.secondary};
  color: ${colors.primary};
`;
