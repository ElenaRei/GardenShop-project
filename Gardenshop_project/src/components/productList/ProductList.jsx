import React from 'react'
import ProductItem from '../productItem/ProductItem'
import s from './ProductList.module.css'

export default function ProductList({ products }) {
  if (products.length === 0) return null
  return (
    <div className={s.productList_container}>
      {products.map((elem) => (
        <ProductItem {...elem} key={elem.id} />
      ))}
    </div>
  )
}
