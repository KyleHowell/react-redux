import {handleActions} from 'redux-actions';
import {createTodo, toggleTodoStatus} from '../actions/todo';

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
      items: [...state.items, action.payload],
    }),
    [toggleTodoStatus]: (state, action) => ({
      ...state,
      items: state.items.map(
        item =>
          item.text === action.payload.text
            ? {text: item.text, status: !item.status}
            : item
      ),
    }),
  },
  initialState
);

export default todoReducer;
