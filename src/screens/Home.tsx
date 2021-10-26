import React, {FC} from 'react';
import {Text, SafeAreaView} from 'react-native';

const ScreenHome: FC = (): JSX.Element => (
  <SafeAreaView
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Screen Home</Text>
  </SafeAreaView>
);

export default ScreenHome;
