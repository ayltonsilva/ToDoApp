export function addTodo (todo) {
  return {
    type: 'ADD_TODO',
    todo: todo,
  }
}

export function removeTodo (todo) {
  return {
    type: 'REMOVE_TODO',
    todo: todo,
  }
}