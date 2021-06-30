const initialState = {
edit_to_note:{}
}

const noteReducer= (state = initialState, { type, payload }) => {
    switch (type) {

    case 'edit_note':
        return { ...state, ...payload }

    default:
        return state
    }
}
export default noteReducer
