import appReducer from './app';
import todoReducer from './todo';
import {combineReducers} from 'redux';

export default combineReducers({app: appReducer, todo: todoReducer});
