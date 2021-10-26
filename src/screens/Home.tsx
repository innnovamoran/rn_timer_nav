import {useNavigation} from '@react-navigation/core';
import React, {FC, useCallback, useEffect, useState} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';
import Timer from '../components/Timer';
import useTimer from '../hooks/useTimer';

const ScreenHome: FC = (): JSX.Element => {
  const {navigate} = useNavigation();
  const [title, setTitle] = useState('Screen Home');

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
    </SafeAreaView>
  );
};

export default ScreenHome;
