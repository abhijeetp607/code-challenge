import React, {useState, useEffect} from 'react';
import {Text, Image, StyleSheet,Platform, View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import HomeScreen from '../screens/HomeScreen';

const Stack = createNativeStackNavigator();




const MyStack = () => {
  return (
//     <View style={styles.container}>
//     <Text style={styles.text}>Welcome to splash screen</Text>
   
//   </View>
    <Stack.Navigator
      initialRouteName="Splash"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};

const AppNavigator = () => {

  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};



export default AppNavigator;
