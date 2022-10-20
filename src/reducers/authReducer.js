import { SIGN_IN, SIGN_OUT } from '../actions/types'

const INITIAL_STATE = {
  Token: localStorage.getItem('auth-token'),
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN:
      return { ...state, Token: action.payload }
    case SIGN_OUT:
      return { ...state, Token: action.payload }
    default:
      return state
  }
}
