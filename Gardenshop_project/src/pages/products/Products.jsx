import React from 'react'

import s from './Products.module.css'
import ProductList from '../../components/productList/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductList } from '../../requests/requests'
import Filter from '../../components/filter/Filter'

export default function Products() {
  const dispatch = useDispatch()
  const { products, category, filteredProducts } = useSelector(
    (store) => store.products,
  )

  useEffect(() => {
    if (filteredProducts.length <= 0) dispatch(fetchProductList())
  }, [])

  return (
    <div className={s.products}>
      <h1
        style={{
          fontWeight: 700,
          fontSize: '40px',
          color: '#000000',
          marginBottom: 60,
        }}
      >
        {category.title}
      </h1>

      <Filter sale={true} />
      
      <ProductList products={filteredProducts} />
    </div>
  )
}
