// import { useEffect, useState, type CSSProperties } from 'react'
// import './Clock.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  removeService,
  resetServiceForm,
  startEditingService,
} from '../actions/actionCreators'

export default function ServiceList() {
  const items = useSelector(state => state.serviceList)
  const editingId = useSelector(state => state.serviceAdd.editingId)
  const dispatch = useDispatch()

  const handleEdit = service => {
    dispatch(startEditingService(service))
  }

  const handleRemove = id => {
    if (id === editingId) {
      dispatch(resetServiceForm())
    }
    dispatch(removeService(id))
  }

  return (
    <ul>
      {items.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button
            type="button"
            aria-label={`Редактировать ${o.name}`}
            onClick={() => handleEdit(o)}
          >
            ✎
          </button>
          <button type="button" onClick={() => handleRemove(o.id)}>
            ✕
          </button>
        </li>
      ))}
    </ul>
  )
}
