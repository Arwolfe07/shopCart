const gameDetailsReducer = (state = null , action) => {
    switch (action.type) {
        case 'GET_ONE':
            // console.log(action.payload)
            return action.payload;
        default:
            return state;
    }
}

export default gameDetailsReducer;