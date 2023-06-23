import React from 'react'

import s from './Products.module.css'
import ProductList from '../../components/productList/ProductList'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchProductList } from '../../requests/requests'
import { filteredProducts } from '../../store/productsReducer'
import Filter from '../../components/filter/Filter'

export default function Products() {
  const dispatch = useDispatch()
  const { filters, fromTo, sort } = useSelector((store) => store.filters)

  const { category } = useSelector((store) => store.products)

  const products = useSelector((store) =>
    filteredProducts(store, filters, fromTo, sort),
  )

  useEffect(() => {
    if (products.length === 0) dispatch(fetchProductList())
  }, [])

  return (
    <div className={s.products}>
      <h1 className={s.h1}>{category.title}</h1>

      <Filter sale={true} />
      
      <ProductList products={products} />
    </div>
  )
}
