import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import About from '../screens/About';
import Header from '../shared/Header';

// This is the 'about stack' navigation. 
// We create cont screens then add it as a parameter to createStackNavigation
// With options. 
const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='About' navigation={navigation} />
      }
    },
  },
}


const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: '#444',
    headerStyle: { backgroundColor: '#eee', height: 90 }
  }
});

export default AboutStack;