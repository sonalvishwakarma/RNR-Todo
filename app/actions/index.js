import ACTION_TYPES from './actionTypes';

export const addToTodoList = (item) => {
  return { type: 'ADD_TODO', item };
}

export const removeFromTodoList = (id) => {
  return { type: 'REMOVE_TODO', id };
}


