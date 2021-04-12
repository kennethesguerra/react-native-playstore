import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "../screens/Home"
import ReviewDetails from "../screens/ReviewDetails";

import Header from '../shared/Header';

const { Navigator, Screen } = createStackNavigator();

const HomeNavigator = () => (
  <Navigator 
    initialRouteName="Home"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        height: 80,
      },
      headerTintColor: "skyblue",
    }}>
    <Screen name="Home" component={Home} options={
      { 
        headerTitle: () => <Header title="PlayStore" />
      } 
    } />
    <Screen name="ReviewDetails" component={ReviewDetails} options={
      { title: 'Review Details'}
    } />
  </Navigator>
);

export const HomeStack = () => (
  <HomeNavigator />
);