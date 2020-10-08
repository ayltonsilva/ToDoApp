export function addUser (email) {
  return {
    type: 'ADD_USER',
    email: email,
  }
}

export function verifyUser(email) {
  return {
    type: 'VERIFY_USER',
    email: email,
  }
}

