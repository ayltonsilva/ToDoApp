const INITIAL_STATE = {
  todos: [],
};

const todosReducer = (state = INITIAL_STATE, action) => {
  const {
    todos,
  } = state;
  switch (action.type) {
    case 'ADD_TODO':
      return {
          todos: [...todos, action.todo],
      }
    case 'SHOW_TODOS':
      return {
        todos: action.todos,
      }
    case 'EDIT_TODO':
      return {
        todos: state.todos.map(todo => todo.id == action.id ? todo:action )
      }
    case 'REMOVE_TODO':
      return {
          todos: state.todos.filter(todo => todo.id != action.id)
      }

    default:
      return state
  }
};

export default todosReducer;
