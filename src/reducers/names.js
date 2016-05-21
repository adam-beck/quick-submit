const name = (state, action) => {
  switch (action.type) {
    case 'ADD_NAME':
      return action.name;
    default:
      return state;
  }
};

const names = (state = [], action) => {
  switch (action.type) {
    case 'SET_NAMES':
      return action.users.map(user => user.name);
    case 'ADD_NAME':
      return [
        ...state,
        name(undefined, action)
      ];
    default:
      return state;
  }
};

export default names;
