import React, { useEffect } from 'react'

import s from './Product.module.css'
import Button from '../../components/button/Button'

import { useNavigate, useParams } from 'react-router-dom'
import { base_url, fetchProduct } from '../../requests/requests'
import { useDispatch, useSelector } from 'react-redux'
import { addProductAction, totalAmountAction } from '../../store/cartReducer'


export default function Product() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const product = useSelector((store) => {
    return store.product
  })

  useEffect(() => {
    dispatch(fetchProduct(productId))
  }, [])

  if (!product) {
    return null
  }

  const percentagePrice = Math.floor(
    ((product.price - product.discont_price) / product.price) * 100,
  )

  const onGoBack = () => {
    navigate(-1)
  }

  const addToCart = () => {
    const someProduct = {
      id: product.id,
      image: product.image,
      title: product.title,
      forTotal: product.discont_price ?? product.price,
      discont_price: product.discont_price,
      price: product.price,
      count: 0,
    }
    dispatch(addProductAction(someProduct))
    dispatch(totalAmountAction)
  }

  return (
    <div className={s.product}>
      <div className={s.productTitle}>
        <h2>{product.title}</h2>
        <button onClick={onGoBack}>Go back</button>
      </div>
      <div className={s.productItem}>
        <div className={s.productPhoto}>
          <img src={base_url + product.image} />
        </div>
        <div className={s.productInfo}>
          <div className={s.productPrice}>
            <span className={s.dollar}>
              <span className={s.salePrice}>{product.price}</span>$
            </span>
            {product.discont_price && (
              <span className={s.regularPrice}>{product.discont_price}$</span>
            )}
            {product.discont_price && (
              <span className={s.discount}>{percentagePrice}%</span>
            )}
          </div>
          <Button className={s.productButton} onClick={addToCart}>
            To cart
          </Button>
          <div className={s.productDescription}>
            <h3>Description</h3>
            <p className={s.descriptionText}>{product.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
