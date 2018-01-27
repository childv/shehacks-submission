import React, { Component } from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { AsyncStorage, Platform, StyleSheet, Text, View } from 'react-native';

export default class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.descrption}>Hello world!</Text>
      </View>
    );
  }
}

const style = StyleSheet.create({
    header: {
        ...Platform.select({
           android: {
           backgroundColor: '#e1e8ee',
           }
        })
    },
    indicator: {
        backgroundColor: '#0B5091'
    },
    container: {
      ...StyleSheet.absoluteFillObject,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    description: {
      fontSize: 18,
      textAlign: 'center',
      color: '#656565',
      marginTop: 65,
  },
})

//skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
