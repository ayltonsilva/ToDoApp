import { combineReducers } from 'redux';

const INITIAL_STATE = {
  current: ["Ay", "Ya"],
  possible: [
    'Alice',
    'Bob',
    'Sammy',
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

    default:
      return state
  }
};

export default combineReducers({
  users: usersReducer
});
