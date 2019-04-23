const reducer = (state = {}, action) => {
    switch (action.type) {
        case 'ASSIGNED_USERNAME':
            state = { ...state, name: action.name }
            break;
        case 'PUT_ALL_NAMES_TO_REDUCER':
            console.log(state, action)
            state = { ...state, names: action.names }
            break;
        case 'CURRENT_POT_TO_REDUCER':
            state = { ...state, pot: action.pot }
            break;
        default:
            break;
    }
    return state;
}

export default reducer;