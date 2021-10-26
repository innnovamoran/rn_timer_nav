import {useNavigation} from '@react-navigation/core';
import React, {FC, useCallback} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Timer from '../components/Timer';
import useTimer from '../hooks/useTimer';

const ScreenTwo: FC = (): JSX.Element => {
  const {goBack} = useNavigation();
  const {lectureTimer} = useTimer();

  const handleRenderTimer = useCallback(
    () => Timer({time: lectureTimer}),
    [lectureTimer],
  );
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen two</Text>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>volver</Text>
      </TouchableOpacity>
      {handleRenderTimer()}
    </SafeAreaView>
  );
};

export default ScreenTwo;
