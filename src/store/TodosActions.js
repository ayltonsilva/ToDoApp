export function addTodoSuccess (todo) {
  return {
    type: 'ADD_TODO',
    todo: todo,
  }
}

export function removeTodo (index) {
  return {
    type: 'REMOVE_TODO',
    index: index,
  }
}

export function showTodosSuccess (todos){
  return {
    type: 'SHOW_TODOS',
    todos: todos,
  }
}

export const addTodo = (text) => async (dispatch) => {
  const URL = 'http://localhost:3000/addTodo';
  const body = { todo: { text } }
  const options = {
    method: 'POST',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }

  const response = await fetch(URL, options);
  const dataJSON = await response.json();

  if(response.ok){
    return dispatch(addTodoSuccess(dataJSON.text));
  }
}

export const removingTodo = (text) => async (dispatch) => {
  const URL = 'http://localhost:3000/removeTodo';
  const body = { todo: { text } }
  const options = {
    method: 'DELETE',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }

  const response = await fetch(URL, options);
  const dataJSON = await response.json();

  if(response.ok){
    return dispatch(removeTodoSuccess(dataJSON.text));
  }
}

export const showTodos = () => async (dispatch) => {
  const URL = 'http://localhost:3000/todos';
  const body = { todo: { text } }
  const options = {
    method: 'GET',
    body: JSON.stringify(body),
    headers: { 'Content-Type': 'application/json' }
  }

  const response = await fetch(URL, options);
  const dataJSON = await response.json();

  if(response.ok){
    return dispatch(removeTodoSuccess(dataJSON.text));
  }
  else{
    console.log("Failed");
  }
}