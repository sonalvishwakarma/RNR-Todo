import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View} from 'react-native';

import App from './app/containers/mainApp';

export default class RNRedux extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Redux!
        </Text>
        <Text style={styles.instructions}>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('RNRedux', () => App);
