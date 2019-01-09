function fetchUser(state=[], action) {
    switch (action.type) {
      case 'FETCH_USER': {
        return action.users;
      }
      default:
      return state;
    }
  }

  export default fetchUser;