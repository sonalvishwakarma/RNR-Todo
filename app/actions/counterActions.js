import ACTION_TYPES from './actionTypes';

export function increment() {
  return {
    type: ACTION_TYPES.INCREMENT
  };
}

export function decrement() {
  return {
    type: ACTION_TYPES.DECREMENT
  };
}

