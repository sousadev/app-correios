import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome5';
import { colors } from '../../../themes';
import LottieView from 'lottie-react-native';
import AddButtonIcon from '../../../assets/lotties/add.json';

// import { Container } from './styles';

interface AddButtonProps {
  onPress: any;
}
export const AddButton: React.FC<AddButtonProps> = ({ onPress }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        alignItems: 'flex-end',
        bottom: 30,
        right: 30,
        left: 0,
        top: 0,
        zIndex: 2,
        marginTop: -48,
      }}>
      <LottieView
        source={AddButtonIcon}
        style={{
          width: 110,
          height: 110,
        }}
        autoPlay
        autoSize
      />
    </TouchableOpacity>
  );
};
