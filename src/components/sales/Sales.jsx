import React, { useEffect } from 'react'

import s from './Sales.module.css'
import ProductList from '../productList/ProductList'
import { fetchProductList } from '../../requests/requests'
import { useDispatch, useSelector } from 'react-redux'

export default function Sales() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductList())
  }, [])


  const products = useSelector(store => store.products)
  console.log(products)

  // const randomCategories = new Array(4).fill('').map(() => {
  //   const randomNumber = Math.floor(Math.random() * props.categories.length)
  //   return props.categories[randomNumber]
  // })
  return <div className={s.sales}>
    <ProductList products={products}/>
    </div>
}
