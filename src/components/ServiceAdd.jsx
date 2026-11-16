import { useSelector, useDispatch } from 'react-redux'
import {
  addService,
  changeServiceField,
  resetServiceForm,
  updateService,
} from '../actions/actionCreators'
import './ServiceAdd.css'

export default function ServiceAdd() {
  const item = useSelector(state => state.serviceAdd)
  const dispatch = useDispatch()
  const handleChange = evt => {
    const { name, value } = evt.target
    dispatch(changeServiceField(name, value))
  }
  const handleSubmit = evt => {
    evt.preventDefault()

    if (item.editingId) {
      dispatch(updateService(item.editingId, item.name, item.price))
      dispatch(resetServiceForm())
      return
    }

    dispatch(addService(item.name, item.price))
  }

  const handleCancel = () => {
    dispatch(resetServiceForm())
  }

  return (
    <form className="row" onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} value={item.name} />
      <input name="price" onChange={handleChange} value={item.price} />
      <button type="submit">Save</button>
      {item.editingId && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </form>
  )
}
