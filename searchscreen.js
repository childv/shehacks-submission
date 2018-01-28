import React, { Component } from 'react';
import { Font, AppLoading, Asset } from 'expo';
import { AsyncStorage, Platform, StyleSheet, Text, View, TextInput } from 'react-native';


export default class SearchScreen extends Component {
	constructor(props) {
      super(props);
      this.state = {
        text: '',
      };
    }

 	render() {
    // BELOW RETURN WILL SHOW ON SCREEN
      return (
        <View style={style.container}>
          <TextInput
            style={{height: 60}}
            placeholder="What are you looking for?"
            onChangeText={(text) => this.setState({text})}
          />
          <Text style={style.descrption}>
          </Text>
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
      fontSize: 18,
      textAlign: 'center',
      color: '#656565',
      marginTop: 65,
  },
})