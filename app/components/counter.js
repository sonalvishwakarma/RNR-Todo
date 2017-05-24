import React, {Component} from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

export default class Counter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { counter, increment, decrement } = this.props;

    return (
      <View  style={styles.container}>
        <Text style={styles.head}>Counter app</Text>

        <Text style={styles.head}>{counter}</Text>
        <TouchableOpacity onPress={increment} style={styles.button}>
          <Text>Up</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={decrement} style={styles.button}>
          <Text>Down</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container : {
    alignItems: 'center',
    justifyContent: 'center' 
  },
  head : {
    fontSize : 29,
    marginBottom : 20,
    backgroundColor: 'lightgray'
  },
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
});