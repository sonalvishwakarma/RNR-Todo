import React, { Component } from 'react';
import {StyleSheet,Text,View} from 'react-native';

import { Provider, connect } from 'react-redux';
import { createStore } from 'redux';
import { Actions, ActionConst, Router, Scene } from 'react-native-router-flux';

import { appReducer } from '../reducers';
import CounterApp from './counterApp';

import Lists from '../components/lists';
import TodoList from '../components/todoList';

class TabIcon extends Component {
  render(){
    return (
      <Text style={{color: this.props.selected ? 'red' :'black'}}>{this.props.title}</Text>
    );
  }
}

const Scenes = Actions.create(
  <Scene key='root'>
    <Scene key='lists' tabs={true} hideNavBar type={ActionConst.REPLACE}>
      <Scene key='tab1' title='Counter' component={CounterApp} icon={TabIcon}></Scene>
      <Scene key='tab2' title='Add Todo' component={Lists} icon={TabIcon}></Scene>
      <Scene key='tab3' title='To Do List' component={TodoList} icon={TabIcon}></Scene>
    </Scene>
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

