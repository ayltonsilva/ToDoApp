
const INITIAL_STATE = {
  current: {
    email: "",
  },
  available: [ "alice@gmail.com", "bob@gmail.com", "sammy@gmail.com"],
};

const usersReducer = (state = INITIAL_STATE, action) => {
  const {
    current,
    available,
  } = state;
  switch (action.type) {
    case 'ADD_USER':
      return {
          available: [...available, action.email],
          current: {email: action.email}
      }
    case 'SET_USER':
      return { ...state, 
        current: {email: action.email}
      }

    default:
      return state
  }
};

export default usersReducer;
