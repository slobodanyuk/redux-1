import {
  CHANGE_SERVICE_FIELD,
  RESET_SERVICE_FORM,
  START_EDITING_SERVICE,
} from '../actions/actionTypes'

const initialState = { name: '', price: '', editingId: null }
export default function serviceAddReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_SERVICE_FIELD:
      const { name, value } = action.payload
      return { ...state, [name]: value }
    case START_EDITING_SERVICE: {
      const { service } = action.payload
      return {
        name: service.name,
        price: service.price,
        editingId: service.id,
      }
    }
    case RESET_SERVICE_FORM:
      return initialState
    default:
      return state
  }
}
