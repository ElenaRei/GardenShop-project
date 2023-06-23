import { useEffect } from 'react'

import s from './Sales.module.css'
import { fetchProductList } from '../../requests/requests'
import { useDispatch, useSelector } from 'react-redux'
import ProductItem from '../../components/productItem/ProductItem'
import Filter from '../../components/filter/Filter'
import { filteredProducts } from '../../store/productsReducer'

export default function Sales() {
  
  const dispatch = useDispatch()
  const { filters, fromTo, sort } = useSelector((store) => store.filters)
  const products = useSelector((store) =>
    filteredProducts(store, filters, fromTo, sort),
  )

  useEffect(() => {
    dispatch(fetchProductList())
  }, [])

  const saleProducts = products.filter((product) => product.discont_price)

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
