import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Home from './src/screens/Home';
import Results from './src/screens/Details';

const navigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        title: 'Cycling guide',
      }
    },
    Results: {
      screen: Results,
      navigationOptions: {
        title: 'Cycling Details',
      }
    },
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      title: 'Cycling search'
    }
  }
);
export default createAppContainer(navigator);