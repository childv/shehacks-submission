'use strict';
import React, { Component } from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { Image, Alert, Button, AsyncStorage, Platform, StyleSheet, Text, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { TabNavigator, StackNavigator } from 'react-navigation';

import SearchHandler from './SearchHandler';
import SearchScreen from './searchscreen';
import SearchPage from './SearchPage';

// const App = StackNavigator({
// 		Home: { screen: SearchPage },
// 	});

// export default App;


class App extends Component {
  render() {
    return (
      <RootTabs/>
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
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name="ion-home"
          type="ionicon"
          size={20}
          color={focused ? "#0B5091" : "#d3d3d3"}
        />
      ),
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarLabel: 'Search',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name="ion-search"
          type="ionicon"
          size={20}
          color={focused ? "#0B5091" : "#d3d3d3"}
        />
      ),
    }
  },
  Connect: {
    screen: ConnectScreen,
    navigationOptions: {
      tabBarLabel: 'Connect',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name="ion-ios-people"
          type="ionicon"
          size={20}
          color={focused ? "#0B5091" : "#d3d3d3"}
        />
      ),
    }
  },
  History: {
    screen: HistoryScreen,
    navigationOptions: {
      tabBarLabel: 'History',
      tabBarIcon: ({ tintColor, focused }) => (
        <Icon
          name="ion-ios-book"
          type="ionicon"
          size={20}
          color={focused ? "#0B5091" : "#d3d3d3"}
        />
      ),
    }
  },
});

export default App;



// FACEBOOK LOGIN