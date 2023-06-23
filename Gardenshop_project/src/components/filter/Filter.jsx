import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  addFromToProductsAction,
  addSortProductsAction,
  deleteFilteredProductsAction,
  setFilteredProductsAction,
} from '../../store/filtersReducer'
import s from './Filter.module.css'

const Filter = ({ sale }) => {
  const [from, setFrom] = useState('')
  const [to, setTo] = useState('')

  const dispatch = useDispatch()

  const onSelect = (e) => {
    dispatch(addSortProductsAction(e.target.value))
  }

  const onForm = (event) => {
    const value = event.target.value
    if (/[0-9]/.test(Number(value))) {
      setFrom(Number(event.target.value))
    }
  }

  const onTo = (event) => {
    const value = event.target.value
    if (/[0-9]/.test(Number(value))) {
      setTo(Number(event.target.value))
    }
  }

  const onBlur = () => {
    if (to >= 1 && from >= 1) {
      dispatch(addFromToProductsAction({ to, from }))
      dispatch(setFilteredProductsAction('fromTo'))
    } else {
      dispatch(addFromToProductsAction({ to: 0, from: 0 }))
      dispatch(deleteFilteredProductsAction('fromTo'))
    }
  }

  const onCheck = (event) => {
    if (event.target.checked) 
    dispatch(setFilteredProductsAction('discount'))
    else 
    dispatch(deleteFilteredProductsAction('discount'))
  }

  return (
    <div className={s.filter}>
      <div className={s.group1}>
        <h3>Price</h3>
        <input
          className={s.group1Input}
          type="text"
          placeholder="from"
          value={from}
          onChange={onForm}
          onBlur={onBlur}
        />
        <input
          className={s.group1Input}
          type="text"
          placeholder="to"
          value={to}
          onChange={onTo}
          onBlur={onBlur}
        />
      </div>

      {sale && (
        <div className={s.group2}>
          <h3>Discounted items</h3>
          <input className={s.group2Input} type="checkbox" onChange={onCheck} />
        </div>
      )}

      <div className={s.group3}>
        <h3>Sorted</h3>
        <select className={s.select} onChange={onSelect}>
          <option value="default" defaultChecked>
            by default
          </option>
          <option value="asc">ascending (Price) </option>
          <option value="desc">descending (Price) </option>
          <option value="title">title (A-Z) </option>
        </select>
      </div>
    </div>
  )
}

export default Filter
