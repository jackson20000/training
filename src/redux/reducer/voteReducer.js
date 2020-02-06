const vote = { javascript: 0, java: 0, php: 0, python: 0, go: 0 }
export default (state = vote, action) => {
    switch (action.type) {
        case "VOTE":
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
};