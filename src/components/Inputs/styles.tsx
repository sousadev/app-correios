import styled from 'styled-components/native';
import { colors } from '../../themes';

export const InputStandardStyled = styled.TextInput`
  width: auto;
  height: 60px;
  font-family: Poppins-Regular;
  font-size: 14px;
  background-color: ${colors.white};
  color: ${colors.blueHard};
  border-radius: 8px;

  padding: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const InputPasswordStyled = styled.TextInput`
  width: auto;
  height: 60px;
  font-family: Poppins-Regular;
  font-size: 14px;
  background-color: ${colors.white};
  color: ${colors.blueHard};
  border-radius: 8px;

  padding: 15px;
  margin-top: 5px;
  margin-bottom: 10px;
`;
