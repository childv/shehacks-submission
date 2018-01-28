import React, { Component } from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { AsyncStorage, Platform, StyleSheet, Text, View, TextInput } from 'react-native';
import { TabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

//import SearchHandler from './SearchHandler';
import SearchScreen from './searchscreen';



class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
        text: '',
        cut: false
    };
  }
  // render() {
  //   // BELOW RETURN WILL SHOW ON SCREEN
  //   return (
  //   );
  // }
}

/*
      <View style={style.container}>
        <TextInput
          style={{height: 60}}
          placeholder="What are you looking for?"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={style.descrption}>
        </Text>
      </View>
*/

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
})

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
    screen: SearchScreen,
  },
  Profile: {
    screen: ProfileScreen,
  }
});

export default RootTabs;
