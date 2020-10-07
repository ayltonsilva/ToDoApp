import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: {
    email: "",
    password: "",
  },
  possible: [
    {
      email: "alice@gmail.com",
      password: "foobar",
    },
    {
      email: "bob@gmail.com",
      password: "foobar",
    },
    {
      email: "sammy@gmail.com",
      password: "foobar",
    },
  ],
};

const usersReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_USER':
      // Pulls current and possible out of previous state
      // We do not want to alter state directly in case
      // another action is altering it at the same time
      const {
        current,
        possible,
      } = state;

      // Pull user out of users.possible
      // Note that action.payload === userIndex
      const addedUser = possible.splice(action.payload, 1);

      // And put user in users.current
      current.push(addedUser);

      // Finally, update the redux state
      const newState = { current, possible };

      return newState;
    case 'VERIFY_USER':
      let i;
      for(i in current){
        if(i[email] == action.user[email] && i[password] == action.user[password]){
          current[email] = action.user[email];
          current[password] = action.user[password];
        }
      }
      newState = { current, possible };
      return newState;

    default:
      return state
  }
};

export default combineReducers({
  users: usersReducer
});
