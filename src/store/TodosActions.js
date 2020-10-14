export function addTodoSuccess (todo) {
  return {
    type: 'ADD_TODO',
    todo: todo,
  }
}

export function removeTodoSuccess (id) {
  return {
    type: 'REMOVE_TODO',
    id: id,
  }
}

export function showTodosSuccess (todos){
  return {
    type: 'SHOW_TODOS',
    todos: todos,
  }
}

export const addTodo = (text) => async (dispatch) => {
  const URL = 'http://localhost:3000/todos';
  const body = { todo: { text } }
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }

  const response = await fetch(URL, options);
  const dataJSON = await response.json();

  if(response.ok){
    console.log(dataJSON);
    return dispatch(addTodoSuccess(dataJSON));
  }
}

export const removeTodo = (id) => async (dispatch) => {
  const URL = `http://localhost:3000/todos/${id}`;

  const options = {
    method: 'DELETE',
  }

  const response = await fetch(URL, options);
  const dataJSON = await response.json();

  if(response.ok){
    return dispatch(removeTodoSuccess(dataJSON.id));
  }
}

export const showTodos = () => async (dispatch) => {
  const URL = 'http://localhost:3000/todos';

  const options = {
    method: 'GET',
  }

  const response = await fetch(URL, options);
  const dataJSON = await response.json();

  if(response.ok){
    return dispatch(showTodosSuccess(dataJSON));
  }
}