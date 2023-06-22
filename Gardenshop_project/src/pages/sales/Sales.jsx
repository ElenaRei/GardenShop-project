import { useEffect } from 'react'

import s from './Sales.module.css'
import { fetchProductList } from '../../requests/requests'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/productItem/ProductItem'
import Filter from '../../components/filter/Filter'

export default function Sales() {
  const { products, filteredProducts } = useSelector((store) => store.products)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchProductList())
  }, [])

  const saleProducts = filteredProducts.filter(
    (product) => product.discont_price,
  )

  return (
    <div className={s.sales}>
      <h1
        style={{
          fontWeight: 700,
          fontSize: '35px',
          color: '#000000',
          marginBottom: 50,
        }}
      >
        Products with sale
      </h1>

      <Filter sale={false} />

      <div className={s.content}>
        {saleProducts &&
          saleProducts.map((product) => {
            return (
              <ProductItem {...product} key={product.id} link={'products/'} />
            )
          })}
      </div>
    </div>
  )
}
