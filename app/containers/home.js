import React, { Component } from 'react';
import {AppRegistry,StyleSheet,Text,View, TouchableHighlight} from 'react-native';
import { Actions } from 'react-native-router-flux';
import App from '../containers/mainApp';

export default class Home extends Component {
  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native Redux!
        </Text>
        <Text style={styles.instructions}>
         <TouchableHighlight style={styles.button} onPress={() => { Actions.tab1(); }}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableHighlight>
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
