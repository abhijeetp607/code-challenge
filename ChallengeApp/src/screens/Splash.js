import React, { useEffect, useState } from 'react';
import {
  Alert,
  Image, SafeAreaView, StyleSheet, Text, View
} from 'react-native';
import { StackActions } from '@react-navigation/native';


const Splash = ({navigation}) => {

  useEffect(()=>{
    goToNextPage()
  },[])
  const goToNextPage = () => {
    setTimeout(() => {
      _navigation('HomeScreen');
    }, 2000);
  }
  const _navigation = (router, params) => {
    navigation.dispatch(StackActions.replace(router, params));
  };
  return (
    <View style={styles.container}>
                      <Image
                  source={require('../assets/image/tradetronlogo.png')}
                  ></Image>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  text: {
    fontSize: 16,
    color: "black",
    marginBottom: 10
  },
  image: {
    alignSelf: "cover",
    height: 100,
    width: 100

  },
});
export default Splash;
