import React, { memo, useState } from 'react'
import dwarf from '../../assets/dwarf.png'
import Button from '../button/Button'
import { useDispatch } from 'react-redux'
import { fetchSalePost } from '../../requests/requests'
import s from './Form.module.css'

function Form() {
  const [inputValue, setInputValue] = useState('+49')
  const dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(fetchSalePost(inputValue))
    setInputValue('+49')
  }

  const handleChange = (event) => {
    const value = event.target.value
    if (/[0-9]/.test(Number(value))) {
      setInputValue(value)
    }
  }

  return (
    <div className={s.form}>
      <div className={s.dwarf}>
        <img src={dwarf} alt="dwarf" />
      </div>
      <div className={s.form_input}>
      <h1 className={s.h1}>5% off</h1>
        <h2 className={s.h2}>on the first order</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="tel"
            value={inputValue}
            onChange={handleChange}
            name="input"
            className={s.input}
          />
          <Button className={s.form_button} type="submit">
            Get a discount
          </Button>
        </form>
      </div>
    </div>
  )
}

export default memo(Form)