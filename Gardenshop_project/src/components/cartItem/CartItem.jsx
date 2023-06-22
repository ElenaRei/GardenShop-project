import React from 'react'
import deleted from '../../assets/close.svg'
import s from './CartItem.module.css'
import { base_url } from '../../requests/requests'
import { useDispatch } from 'react-redux'
import { decrProductAction, deleteProductAction, incrProductAction, totalAmountAction, totalSumAction } from '../../store/cartReducer'


export default function CartItem({ id, title, image, price, discont_price, count }) {

    const dispatch = useDispatch()

    const handleDeleteProduct = () => {
        dispatch(deleteProductAction(id))
        dispatch(totalSumAction)
        dispatch(totalAmountAction)
    }

    const handleIncrProduct = () => {
        dispatch(incrProductAction(id))
        dispatch(totalSumAction)
        dispatch(totalAmountAction)
      }
    
      const handleDecrProduct = () => {
        dispatch(decrProductAction(id))
        dispatch(totalSumAction)
        dispatch(totalAmountAction)
      }

    return (
        <div className={s.cartItem}>
            <div className={s.cartItemImg}>
                <img src={base_url + image} />
            </div>
            <div className={s.cartItemDesc}>
                <p>{title}</p>
                <div className={s.plusMinusProduct}>
                    <button onClick={handleDecrProduct} disabled={count<2}>-</button> <span>{count}</span>
                    <button onClick={handleIncrProduct}>+</button>
                </div>
            </div>
            <div className={s.cartItemPrice}>
                <span className={s.price} >{discont_price ?? price}</span>$
            </div>
            <div className={s.cartItemSale}>
                {discont_price && <span className={s.sale}>{price}$</span>}
            </div>

           <div className={s.delete}  onClick={handleDeleteProduct} >
           <img src={deleted}/>
           </div>
        </div>
    )
}