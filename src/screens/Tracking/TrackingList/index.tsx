import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import TrackingCard from '../../../components/TrackingCard';
import { TrackingPage, TrackingTitle } from './styles';

// import { Container } from './styles';

const TrackingList: React.FC = () => {
  return (
    <TrackingPage>
      <TrackingTitle text='Rasteamento de Pacotes' />

      <TrackingCard />
      <TrackingCard />
      <TrackingCard />
    </TrackingPage>
  );
};

export default TrackingList;
