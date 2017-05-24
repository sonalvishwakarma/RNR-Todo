import ACTION_TYPES from '../actions/actionTypes';

const initialState = {
  count: 0
};

export default function counterReducer(state = initialState, action = {}) {
  switch (action.type) {
    case ACTION_TYPES.INCREMENT:
      return {
        ...state,
        count: state.count + 5
      };
    case ACTION_TYPES.DECREMENT:
      return {
        ...state,
        count: state.count - 5
      };
    default:
      return state;
  }
}
