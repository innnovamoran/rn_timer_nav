import React, {FC} from 'react';
import {Text, SafeAreaView} from 'react-native';

const ScreenTwo: FC = (): JSX.Element => (
  <SafeAreaView
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Screen two</Text>
  </SafeAreaView>
);

export default ScreenTwo;
