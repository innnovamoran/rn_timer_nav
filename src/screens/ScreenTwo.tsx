import {useNavigation} from '@react-navigation/core';
import React, {FC} from 'react';
import {Text, SafeAreaView, TouchableOpacity} from 'react-native';

const ScreenTwo: FC = (): JSX.Element => {
  const {goBack} = useNavigation();
  return (
    <SafeAreaView
      style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Screen two</Text>
      <TouchableOpacity onPress={() => goBack()}>
        <Text>volver</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ScreenTwo;
