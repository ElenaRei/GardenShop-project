import { useState } from 'react'

import s from './ProductItem.module.css'
import { Link } from 'react-router-dom'
import { addProductAction, totalAmountAction } from '../../store/cartReducer'
import { useDispatch, useSelector } from 'react-redux'

const base_url = 'http://localhost:3333'

export default function ProductItem({
  id,
  image,
  title,
  price,
  discont_price,
  link,
}) {
  const [visible, setVisible] = useState(false)
  const dispatch = useDispatch()

  const percentagePrice = Math.floor(((price - discont_price) / price) * 100)

  const someProduct = {
    id,
    image,
    title,
    forTotal: discont_price ?? price,
    discont_price,
    price,
    count: 0,
  }

  const handleAddToCart = () => {
    dispatch(addProductAction(someProduct))
    dispatch(totalAmountAction)
  }

  return (
    <div className={s.productItem}>
      <div
        className={s.productItemImg}
        onMouseOver={() => setVisible(true)}
        onMouseLeave={() => setVisible(false)}
      >
        <Link to={link ? link + id : id.toString()}>
          <img src={base_url + image} />
        </Link>
        {visible && (
          <button className={s.addToCart} onClick={handleAddToCart}>
            Add to cart
          </button>
        )}
      </div>

      <div className={s.wrapper}>
        <p className={s.price}>{discont_price ? discont_price : price}$</p>
        {discont_price && <p className={s.priceDiscont}>{price}$</p>}
        {discont_price && <p className={s.sale}>{`${percentagePrice}%`}</p>}
      </div>

      <h3 className={s.productItemTitle}>{title}</h3>
    </div>
  )
}
