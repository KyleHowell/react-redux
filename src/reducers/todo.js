import {handleActions} from 'redux-actions';
import {createTodo} from '../actions/todo';

const initialState = {
  items: [
    {
      text: 'Complete this assignment',
      status: false,
    },
  ],
};

const todoReducer = handleActions(
  {
    [createTodo]: (state, action) => ({
      ...state,
      items: state.items.push(action.payload),
    }),
  },
  initialState
);

export default todoReducer;
