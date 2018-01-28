import React, { Component } from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { Image, Alert, Button, AsyncStorage, Platform, StyleSheet, Text, View } from 'react-native';

class App extends Component {
  render() {
    return (
      <View style={style.container}>
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
  pretty: {flex: 3, alignItems: 'center', justifyContent: 'center' },

})

// TABS 

import { TabNavigator } from 'react-navigation';

const HomeScreen = () => (
  <View style={style.pretty}>
    <Text>Buy Bulk Buddy
    </Text>
    <View>
        <Image 
        style={{width: 300, height: 300}}
        source={require('./my-icon.png')}
        />
    </View>
  </View>
);

const SearchScreen = () => (
  <View style={style.pretty}>
    <Text>What can your Bulk Buddy order for you today?</Text>
    <Button
      onPress={() => {
      Alert.alert('Try again buddy!');
      }}
    title="Search"
    />
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
    screen: ConnectScreen
  },
  History: {
    screen: HistoryScreen
  },
});

export default RootTabs;



// FACEBOOK LOGIN


//skip this line if using Create React Native App
//AppRegistry.registerComponent('AwesomeProject', () => HelloWorldApp);
