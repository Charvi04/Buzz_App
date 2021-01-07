import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import Home from './Screens/Home';
import FaceBook from "./Screens/FaceBook";
import Instagram from "./Screens/Instagram";

export default class App extends React.Component {
  render() {
   return <AppContainer/>
  
  }
}

const TabNavigator = createBottomTabNavigator({
  Home: { screen: Home },
  Facebook: { screen: FaceBook },
  Instagram: { screen: Instagram },
});

const AppContainer = createAppContainer(TabNavigator);