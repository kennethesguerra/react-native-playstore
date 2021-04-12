import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import About from '../screens/About';
import Header from '../shared/Header';

const { Navigator, Screen } = createStackNavigator();

const AboutNavigator = () => (
  <Navigator 
    initialRouteName="About"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        height: 80,
      },
      headerTintColor: "skyblue",
    }}>
    <Screen name="About" component={About} options={
      { 
        headerTitle: () => <Header title="About PlayStore" />
      } 
    } />
  </Navigator>
)

export const AboutStack = () => (
  <AboutNavigator />
);