import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { AddButton } from '../../../components/Buttons/AddButton';
import TrackingCard from '../../../components/TrackingCard';
import { TrackingPage, TrackingTitle } from './styles';

// import { Container } from './styles';

const TrackingList: React.FC = (): any => {
  const navigation = useNavigation();

  function handleNavigation(page: string) {
    navigation.navigate(page);
  }
  return (
    <TrackingPage>
      <TrackingTitle text='Rastreamento de Pacotes' />
      <ScrollView>
        <TrackingCard />
        <TrackingCard />
        <TrackingCard />
        <TrackingCard />
        <TrackingCard />
        <TrackingCard />
      </ScrollView>
      <AddButton onPress={() => handleNavigation('TrackingAdd')} />
    </TrackingPage>
  );
};

export default TrackingList;
