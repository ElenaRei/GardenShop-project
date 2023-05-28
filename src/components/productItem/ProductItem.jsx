import React from 'react'

export default function ProductItem({id,image,title,price,discont_price}) {

    const base_url= 'http://localhost:3333'

  return (
    <div>
        <img src={`${base_url}${image}`}/>
        <div>
            <p>{price}</p>
            <p>{discont_price}</p>
        </div>
        <h2>{title}</h2>
    </div>
  )
}
