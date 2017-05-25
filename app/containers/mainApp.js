import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Provider, connect } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import { Actions, Router, Scene } from 'react-native-router-flux';
import Lists from '../components/lists';
import TodoList from '../components/todoList';
import { todoReducer } from '../reducers/todoReducer';

export const appReducer = combineReducers({
  todoReducer
});

const Scenes = Actions.create(
  <Scene key="root">
    <Scene key="tab1" component={Lists} title="Add todo" />
    <Scene key="tab2" component={TodoList} title="Todo list"/>
  </Scene>
);

const ConnectedRouter = connect()(Router);
const store = createStore(appReducer);

export default class App extends Component {
  render(){
    return (  
      <Provider store={store}>
        <ConnectedRouter scenes={Scenes} />
      </Provider>
    );
  }
}

