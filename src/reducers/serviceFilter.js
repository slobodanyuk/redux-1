import { CHANGE_FILTER, RESET_FILTER } from '../actions/actionTypes'

const initialState = ''
export default function serviceFiltereducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_FILTER:
      const { filter } = action.payload
      return filter
    case RESET_FILTER:
      return initialState
    default:
      return state
  }
}
