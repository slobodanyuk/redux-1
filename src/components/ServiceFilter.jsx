import { useSelector, useDispatch } from 'react-redux'
import { changeFilterService, resetFilterService } from '../actions/actionCreators'

export default function ServiceFilter() {
  const filter = useSelector(state => state.serviceFilter)
  const dispatch = useDispatch()
  const handleChange = evt => {
    const { value } = evt.target
    dispatch(changeFilterService(value))
  }

  const handleCancel = () => {
    dispatch(resetFilterService())
  }

  return (
    <div className="row">
      <input name="filter" onChange={handleChange} value={filter} />
      {filter && (
        <button type="button" onClick={handleCancel}>
          Cancel
        </button>
      )}
    </div>
  )
}
