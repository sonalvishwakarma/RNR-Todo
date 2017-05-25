import React, { Component } from 'react';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import {  addToTodoList } from '../actions';

mapStateToProps = (state) => state;

mapDispatchToProps = (dispatch) => ({
  addTodoItem: (todoItem) => {
    dispatch(addToTodoList(todoItem));
    alert('added Todo')
  },
});

class Lists extends Component {
  state = {
    todoItem: '',
  }
  render() {
    const { addTodoItem } = this.props;
    const { todoItem } = this.state;
    return(
      <View style={styles.container}>
        <TextInput style={styles.textInput} placeholder="Add todo item" onChangeText={(text) => this.setState({todoItem: text})} />                
        <TouchableHighlight style={styles.button} onPress={() => { addTodoItem(todoItem); }}>
          <Text style={styles.buttonText}>Add Todo</Text>
        </TouchableHighlight>
        <TouchableHighlight style={styles.button} onPress={() => { Actions.tab2(); }}>
          <Text style={styles.buttonText}>View ToDoList</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Lists);

const styles = {
  container: {
    marginTop: 80,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    maxHeight: 400,
    alignItems: 'center',
  },
  textInput: {
    alignSelf: 'stretch'
  },
  button: {
    padding: 5,
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'green'
  },
  buttonText: {
    color: 'white',
  }
};
