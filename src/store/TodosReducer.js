const INITIAL_STATE = {
  todos: [ "Get groceries", "Take Bob to school", "Play some music"],
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

    default:
      return state
  }
};

export default todosReducer;