import React, { useEffect } from 'react'
import Form from '../../components/form/Form'
import Banner from '../../components/banner/Banner'

import s from './Home.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProductList } from '../../requests/requests'
//import ProductList from '../../components/productList/ProductList'
import Sales from '../../components/sales/Sales'
//import Categories from '../categories/Categories'

export default function Home(props) {
  
  

  return (
    <div className={s.home}>
      <Banner />
      
      {/* <Categories/> */}
      <Form />
      <Sales/>
    </div>
  )
}
