export function addTodo (todo) {
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