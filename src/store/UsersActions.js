export const addUser = usersIndex => (
  {
    type: 'ADD_USER',
    payload: usersIndex,
  }
);

export const verifyUser = user => (
  {
    type: 'VERIFY_USER',
    user: user,
  }
);
