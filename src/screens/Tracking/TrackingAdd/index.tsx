import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Alert, Text, View } from 'react-native';
import { ButtonPrimary, ButtonSecondary } from '../../../components/Buttons';
import { InputStandard, InputTrackingCode } from '../../../components/Inputs';
import { TrackingPage, TrackingTitle } from '../TrackingList/styles';

// import { Container } from './styles';

export const TrackingAdd: React.FC<any> = () => {
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  function handleSaveTrackingCode() {
    setLoading(true);
    console.log('loading');
    setTimeout(() => {}, 3000);
    setLoading(false);
  }

  useEffect(() => {}, [loading]);

  return (
    <TrackingPage>
      <TrackingTitle text='Cadastrar Código de Rastreio' />

      <InputStandard text='Dê um apelido...' />
      <InputTrackingCode placeholder='Código de Rastreio' action={() => {}} />
      <ButtonPrimary text='Salvar' onPress={() => handleSaveTrackingCode()} />
    </TrackingPage>
  );
};
