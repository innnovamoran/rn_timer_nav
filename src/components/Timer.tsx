import React, {FC} from 'react';
import {Text} from 'react-native';

type props = {
  time: string;
};

const Timer: FC<props> = ({time = '00 : 00'}): JSX.Element => (
  <Text>{time}</Text>
);

export default Timer;
