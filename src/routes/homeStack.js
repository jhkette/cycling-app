import React from "react";

import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Results from '../screens/Details';

const screens = {
  
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
  }

  const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
      headerTintColor: '#444',
      headerStyle: { backgroundColor: '#eee', height: 90 }
    }
  });
  
  export default HomeStack