import React, { Component } from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { Image, Alert, Button, AsyncStorage, Platform, StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import SearchHandler from './SearchHandler';
import SearchScreen from './searchscreen';


class App extends Component {
  render() {
    return (
      <View style={style.container}>
      </View>
    );
  }
}


const style = StyleSheet.create({
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
  pretty: {
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center'
  },
})

// TABS 
const HomeScreen = () => (
  <View style={style.pretty}>
    <Text>
    Buy Bulk Buddy</Text>
    <View>
      <Image
        source={require('./my-icon.png')}
        style={{width: 300, height: 250}}
      />
    </View>
  </View>
);

const ConnectScreen = () => (
  <View style={style.pretty}>
    <Text>Connect with others ordering the same item.</Text>
  </View>
);

const HistoryScreen = () => (
  <View style={style.pretty}>
    <Text>Order History</Text>
  </View>
);

const RootTabs = TabNavigator({
  Home: {
    screen: HomeScreen,
  },
  Search: {
    screen: SearchScreen,
  },
  Connect: {
    screen: ConnectScreen,
  },
  History: {
    screen: HistoryScreen
  },
});

export default RootTabs;



// FACEBOOK LOGIN