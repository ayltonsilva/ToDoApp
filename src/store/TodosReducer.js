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
        todos: todos.map(todo => todo.text),
      }
    case 'REMOVE_TODO':
      return {
          todos: state.todos.filter((todo, index) => index !== action.index)
      }

    default:
      return state
  }
};

export default todosReducer;
