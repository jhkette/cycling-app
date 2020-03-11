import React from "react";

import { createStackNavigator } from 'react-navigation-stack';
import Home from '../screens/Home';
import Results from '../screens/Details';
import Header from '../shared/Header';

const screens = {
  
  Home: {
    screen: Home,
    // 'navigationOptions' can return a function
    // destrcuture navigation and add it to header title
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='Home' navigation={navigation} />
      }
    },
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