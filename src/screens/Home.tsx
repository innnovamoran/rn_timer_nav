import {useNavigation} from '@react-navigation/core';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Timer from '../components/Timer';
import useTimer from '../hooks/useTimer';
import PickerIOS from '../components/PickerIOS';

const ScreenHome: FC = (): JSX.Element => {
  const {navigate} = useNavigation();
  const [title, setTitle] = useState('Screen Home');
  const [selectItem, setSelectedItem] = useState(0);
  const {lectureTimer} = useTimer();

  const handleRenderTimer = useCallback(
    () => Timer({time: lectureTimer}),
    [lectureTimer],
  );

  const titleScreen = useCallback(() => {
    console.log('render title');
    return <Text>{title}</Text>;
  }, [title]);

  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      {titleScreen()}
      <TouchableOpacity onPress={() => navigate('screenone' as never)}>
        <Text>Navegar a one</Text>
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

export default ScreenHome;
