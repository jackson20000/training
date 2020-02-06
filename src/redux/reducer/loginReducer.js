
export default (state = {token: ''}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
        token: action.payload
      };
    default:
      return state;
  }
};