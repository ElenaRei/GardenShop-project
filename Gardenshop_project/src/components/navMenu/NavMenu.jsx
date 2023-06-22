import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import s from './NavMenu.module.css'
import { useDispatch } from 'react-redux'
import { fetchProductList } from '../../requests/requests'

export default function NavMenu() {
  const dispatch = useDispatch()

  return (
    <div className={s.nav_menu}>
      <Link to="/">Main Page</Link>
      <Link to="products" onClick={() => dispatch(fetchProductList())}>
        All Products
      </Link>
      <Link to="sales">All sales</Link>
    </div>
  )
}
