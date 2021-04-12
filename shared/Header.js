import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Header({
  title
}) {

  const navigation = useNavigation();

  const openMenu = () => {  
    navigation.openDrawer();
  }

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={styles.header}>
      <TouchableOpacity style={styles.icon} onPress={openMenu}>
        <MaterialIcons name='menu' size={28} />
      </TouchableOpacity>
      <View style={styles.headerTitle}>
        <Image style={styles.headerImage} source={require('../assets/heart_logo.png')} />
        <Text style={styles.headerText}>{title}</Text>
      </View> 
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  header: {      
    width: Dimensions.get('screen').width,
    height: '125%',
    marginLeft:-15,
    flexDirection: 'row',
    flex:1,
    alignItems: 'center',
  },
  headerText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    marginTop:15,
    letterSpacing: 1,
  },
  icon: {
    position: 'relative',
    flexDirection:'column',
    flex:0.44,
    marginTop:15,
    marginLeft:10 
  },
  headerImage:{
    width: 26,
    height: 26,
    marginHorizontal:10,
    marginTop:15,
  },
  headerTitle: {
    flexDirection:'row'
  }
});