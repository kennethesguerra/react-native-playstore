import React, {useState} from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import Drawer from './routes/Drawer';
import { HomeStack } from './routes/HomeStack';
import { NavigationContainer } from '@react-navigation/native';

const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./assets/fonts/Nunito-Regular.ttf'), 
  'nunito-bold': require('./assets/fonts/Nunito-Bold.ttf')
}); 

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return (
      <AppLoading
        startAsync={getFonts}
        onFinish={() => setFontsLoaded(true)}
        onError={console.warn} />
    )
  }
 
  return (
    <NavigationContainer>
      <Drawer />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
