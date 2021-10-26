import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

const ScreenOne: FC = (): JSX.Element => {
  const {navigate, goBack} = useNavigation();
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
    </SafeAreaView>
  );
};

export default ScreenOne;
