const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ASSIGNED_USERNAME':
            state = { ...state, name: action.name }
            break;
        case 'PUT_ALL_NAMES_TO_REDUCER':
            state = { ...state, names: action.names }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;