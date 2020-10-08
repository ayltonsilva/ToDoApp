import { combineReducers } from 'redux';
import usersReducer from './UsersReducer';

export default combineReducers({
  users: usersReducer
});