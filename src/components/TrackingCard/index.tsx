import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Text, View } from 'react-native';
import { colors } from '../../themes';
import { H2, H3 } from '../Texts';
import { TCardBottom, TCardContainer, TCardTopSection } from './styles';

// import { Container } from './styles';

const TrackingCard: React.FC = () => {
  return (
    <TCardContainer>
      <TCardTopSection>
        <H2 text='Celular da Neide' isDark />
      </TCardTopSection>
      <TCardTopSection>
        <H3 text={`Cadastrado em: ${'22/02/2022'}`} isDark />
      </TCardTopSection>
      <TCardBottom>
        <Icon name='shipping-fast' size={20} color={colors.blueHard} />
        <Text
          style={{
            textTransform: 'uppercase',
            color: colors.blueMedium,
            fontSize: 18,
            fontWeight: '600',
          }}>
          OH 222 222 222 BR
        </Text>
      </TCardBottom>
    </TCardContainer>
  );
};

export default TrackingCard;
