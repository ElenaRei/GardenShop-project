import React, { useEffect, useState } from 'react'
import arrow from '../../assets/vector_right.svg'

import { Link, useNavigate } from 'react-router-dom'

import s from './Cart.module.css'
import CartItem from '../../components/cartItem/CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { clearCartAction, totalSumAction } from '../../store/cartReducer'
import emtyCart from '../../assets/cartEmty.png'
import { fetchOrderPost } from '../../requests/requests'

export default function Cart() {
  const [value, setValue] = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { products, totalCart, totalAmount } = useSelector(
    (store) => store.cart,
  )

  useEffect(() => {
    dispatch(totalSumAction)
  }, [])

  const onBack = () => {
    navigate(-1)
  }

  const handleChange = (event) => {
    if (/[0-9]/.test(Number(event.target.value))) {
      setValue(event.target.value)
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    dispatch(
      fetchOrderPost({
        tel: value,
        totalSum: totalCart,
        totalAmount: totalAmount,
        products: products,
      }),
    )
    setValue('')
    dispatch(clearCartAction)
  }

  return (
    <div className={s.cart}>
      <h1>Shopping cart</h1>

      <div className={s.go_back} onClick={onBack}>
        <Link>
          Back to the store <img src={arrow} />
        </Link>
      </div>

      <div className={s.cartContent}>
        <div className={s.cartItems}>
          {products.length > 0 &&
            products.map((product) => {
              return <CartItem key={product.id} {...product} />
            })}

          {totalAmount === 0 && (
            <img
            src={emtyCart}
            alt="empty cart"
            style={{ width: '100%', height: 400 }}
          />
          )}
        </div>

        <div className={s.cartForm}>
          <h2 className={s.formTitle}>Order details</h2>
          <div className={s.formTotal}>
            <p>
              <span className={s.totalTitle}>Total</span>
              <span>
                <span className={s.total}>{totalCart}</span> $
              </span>
            </p>
          </div>
          <form className={s.cartFormBtns} onSubmit={handleSubmit}>
            <input
              onChange={handleChange}
              type="text"
              className={s.formInput}
              value={value}
              placeholder="Phone number"
            />
            <input
              type="submit"
              className={s.formBtn}
              value="Order"
              disabled={
                value.toString().trim().length <= 0 || totalAmount === 0
              }
            />
          </form>
        </div>
      </div>
    </div>
  )
}
