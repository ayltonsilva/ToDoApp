
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
     
      const addedUser = action.email;

      // And put user in users.available
      available.push(addedUser);

      // Finally, update the redux state
      return {
        ...state, 
          current: {email: action.email}
      }
    case 'VERIFY_USER':
      let i;
      for(i in available){
        if(available[i] == action.email)
          return {
            ...state, 
              current: {email: action.email}
          }
      }
      return state

    default:
      return state
  }
};

export default usersReducer;
