import styled from 'styled-components/native';
import { colors } from '../../themes';

export const ButtonSecondaryStyled = styled.TouchableOpacity`
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
  width: auto;
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
