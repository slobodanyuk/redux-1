import { useSelector, useDispatch } from 'react-redux'
import { removeService, resetServiceForm, startEditingService } from '../actions/actionCreators'

export default function ServiceList() {
  const items = useSelector(state => state.serviceList)
  const filter = useSelector(state => state.serviceFilter)
  const editingId = useSelector(state => state.serviceAdd.editingId)
  const dispatch = useDispatch()

  const visibleServices = items.filter(service => service.name.toLowerCase().includes(filter.trim().toLowerCase()))

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
      {visibleServices.map(o => (
        <li key={o.id}>
          {o.name} {o.price}
          <button type="button" aria-label={`Редактировать ${o.name}`} onClick={() => handleEdit(o)}>
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
