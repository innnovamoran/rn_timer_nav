import React, {FC} from 'react';
import {Text, SafeAreaView} from 'react-native';

const ScreenOne: FC = (): JSX.Element => (
  <SafeAreaView
    style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text>Screen One</Text>
  </SafeAreaView>
);

export default ScreenOne;
