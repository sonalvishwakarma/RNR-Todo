import React, { Component } from 'react';
import { ScrollView, View, Text, TouchableHighlight } from 'react-native';
import { connect } from 'react-redux';
import { removeFromTodoList } from '../actions';

mapStateToProps = (state) => ({ todoList: state.todoReducer.todoList });

mapDispatchToProps = (dispatch) => ({
  removeTodoItem: (todoItem) => {
    dispatch(removeFromTodoList(todoItem));
    alert('Delete to todoList')
  },
});

class TodoList extends Component {
  render(){
    const { todoList, removeTodoItem } = this.props;
    return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.heading}>To Do List</Text>
        { 
          Object.keys(todoList).map((itemId) => {
            return (
              <TouchableHighlight key={itemId} onPress={() => {removeTodoItem(itemId)}}>
                <Text style={styles.list}>{ todoList[itemId] } {'  '}<Text style={styles.del}>delete</Text></Text> 
              </TouchableHighlight>
            );
          })
        }
      </View>
    </ScrollView>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);

const styles = {
  container: {
    marginTop: 80,
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor : 'white'
  },
  list : {
    marginTop : 20,
    color : 'green',
    fontSize: 15
  },
  heading: {
    fontSize: 20,
    color : 'black'
  },
  del : {
    color : 'red',
    fontSize: 13,
    textAlign : 'right'
  }
};
