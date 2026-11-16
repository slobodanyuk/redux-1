import {
  ADD_SERVICE,
  REMOVE_SERVICE,
  CHANGE_SERVICE_FIELD,
  START_EDITING_SERVICE,
  UPDATE_SERVICE,
  RESET_SERVICE_FORM,
  CHANGE_FILTER,
  RESET_FILTER,
} from './actionTypes'
export function addService(name, price) {
  return { type: ADD_SERVICE, payload: { name, price } }
}
export function removeService(id) {
  return { type: REMOVE_SERVICE, payload: { id } }
}

export function changeServiceField(name, value) {
  return { type: CHANGE_SERVICE_FIELD, payload: { name, value } }
}

export function startEditingService(service) {
  return { type: START_EDITING_SERVICE, payload: { service } }
}

export function updateService(id, name, price) {
  return { type: UPDATE_SERVICE, payload: { id, name, price } }
}

export function resetServiceForm() {
  return { type: RESET_SERVICE_FORM }
}

export function changeFilterService(filter) {
  return { type: CHANGE_FILTER, payload: { filter } }
}

export function resetFilterService() {
  return { type: RESET_FILTER }
}
