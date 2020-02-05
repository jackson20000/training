const users = [{ username: 'jackson', password: 'password', user_id: 1 },
{ username: 'supriya', password: 'password', user_id: 2 },
{ username: 'suriya', password: 'password', user_id: 3 },
{ username: 'mohanlal', password: 'password', user_id: 4 },
{ username: 'surya', password: 'password', user_id: 4 },
{ username: 'vijay', password: 'password', user_id: 5 },
]
export default (state = users, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state
      };
    default:
      return state;
  }
};