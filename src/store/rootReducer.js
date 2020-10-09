import { combineReducers } from 'redux';
import todosReducer from './TodosReducer';
import usersReducer from './UsersReducer';

export default combineReducers({
  users: usersReducer,
  todos: todosReducer
});