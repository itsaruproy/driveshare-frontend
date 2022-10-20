import { FETCH_LINKS, ADD_NEW_TARGET, DELETE_TARGET } from '../actions/types'
const INITIAL_STATE = {}

const omit = (key, state) => {
    const newState = { ...state }
    delete newState[key]

    return { ...newState }
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_LINKS:
            return { ...state, ...action.payload }
        case ADD_NEW_TARGET:
            return state
        case DELETE_TARGET:
            return omit(action.payload, state)
        default:
            return state
    }
}
