import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import About from '../screens/About';

// This is the 'about stack' navigation. 
// We create cont screens then add it as a parameter to createStackNavigation
// With options. 

const screens = {
  About: {
    screen: About,
      navigationOptions: {
        title: 'Cycling guide',
      }
    },
}


const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 90 }
  }
});

export default AboutStack;