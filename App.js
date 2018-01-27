import React, { Component } from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { AsyncStorage, Platform, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.description}>Hello Janis!</Text>
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
      fontSize: 38,
      textAlign: 'center',
      color: 'navy',
      marginTop: 10,
  },
})


//start JANIS HAS NO IDEA WHAT SHE'S DOING

import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HomeScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>You had me at Hello World.</Text>
  </View>
);

const ProfileScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>History</Text>
  </View>
);

const AnotherScreen = () => (
  <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Text>History</Text>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Profile: {
    screen: ProfileScreen,
  },
  Profile: {
    screen: AnotherScreen,
  }
});

export default RootTabs;

//skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
