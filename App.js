import React from "react";
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Navigator from './src/routes/drawer';


export default function App() { 
  return (
      <Navigator />
    )
  } 