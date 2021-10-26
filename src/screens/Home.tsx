import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

const ScreenHome: FC = (): JSX.Element => {
  const {navigate} = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen Home</Text>
      <TouchableOpacity onPress={() => navigate('screenone' as never)}>
        <Text>Navegar a one</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ScreenHome;
