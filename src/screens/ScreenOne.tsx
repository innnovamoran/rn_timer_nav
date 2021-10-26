import {useNavigation} from '@react-navigation/core';
import React, {FC, useCallback, useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Timer from '../components/Timer';
import useTimer from '../hooks/useTimer';
import PickerIOS from '../components/PickerIOS';
const ScreenOne: FC = (): JSX.Element => {
  const {navigate, goBack} = useNavigation();
  const {lectureTimer} = useTimer();
  const [selectItem, setSelectedItem] = useState(0);

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
      {PickerIOS({
        data: [
          {id: 1, label: 'a1'},
          {id: 2, label: 'a2'},
          {id: 3, label: 'a3'},
          {id: 4, label: 'a4'},
          {id: 5, label: 'a5'},
        ],
        onValueChange: setSelectedItem,
        selected: selectItem,
      })}
    </SafeAreaView>
  );
};

export default ScreenOne;
