import React from 'react'
import ProductItem from '../productItem/ProductItem'

export default function ProductList({products}) {
  return (
    <div>
        {products.map(elem=><ProductItem {...elem} key={elem.id}/>)}
    </div>
  )
}
