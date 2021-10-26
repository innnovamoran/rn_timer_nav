import {useNavigation} from '@react-navigation/core';
import React, {FC, useCallback} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Timer from '../components/Timer';
import useTimer from '../hooks/useTimer';

const ScreenOne: FC = (): JSX.Element => {
  const {navigate, goBack} = useNavigation();
  const {lectureTimer} = useTimer();

  const handleRenderTimer = useCallback(
    () => Timer({time: lectureTimer}),
    [lectureTimer],
  );
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen One</Text>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>volver</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigate('screentwo' as never)}>
        <Text>Navegar a two</Text>
      </TouchableOpacity>
      {handleRenderTimer()}
    </SafeAreaView>
  );
};

export default ScreenOne;
