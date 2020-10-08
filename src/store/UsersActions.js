export function addUser (email) {
  return {
    type: 'ADD_USER',
    email: email,
  }
}

export function setUser(email) {
  return {
    type: 'SET_USER',
    email: email,
  }
}

