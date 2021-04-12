import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";

const { Navigator, Screen } = createStackNavigator();

import WebViews from '../screens/WebViews';

const WebViewNavigator = () => (
  <Navigator 
    initialRouteName="WebViews"
    screenOptions={{
      headerStyle: {
        backgroundColor: "#eee",
        height: 80,
      },
      headerTintColor: "skyblue",
    }}>
    <Screen name="WebView"  component={WebViews} />
  </Navigator>
)

export const WebViewStack = () => {
  return (
    <WebViewNavigator />
  )
}
