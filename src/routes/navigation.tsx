import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
} from '@react-navigation/native-stack';

import {RouteProp, ParamListBase} from '@react-navigation/core';
import ScreenHome from '../screens/Home';
import ScreenOne from '../screens/ScreenOne';
import ScreenTwo from '../screens/ScreenTwo';

type StackNavigationType = {
  component: FC;
  name: string;
  options?:
    | NativeStackNavigationOptions
    | ((props: {
        route: RouteProp<ParamListBase, ''>;
        navigation: any;
      }) => NativeStackNavigationOptions)
    | undefined;
};

const stackOne: StackNavigationType[] = [
  {
    component: ScreenHome,
    name: 'home',
  },
  {
    component: ScreenOne,
    name: 'screenone',
  },
  {
    component: ScreenTwo,
    name: 'screentwo',
  },
];

const {Navigator, Screen} = createNativeStackNavigator();

const deckNavigator = (): JSX.Element[] =>
  stackOne.map(
    ({component, name, options}: StackNavigationType, index: number) => (
      <Screen
        key={index.toString()}
        name={name as any}
        component={component}
        options={options}
      />
    ),
  );

const Navigation = () => (
  <NavigationContainer>
    <Navigator>{deckNavigator()}</Navigator>
  </NavigationContainer>
);
export default Navigation;
