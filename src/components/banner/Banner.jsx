import React from 'react'
import { Link } from 'react-router-dom'


import plant_banner from '../../assets/plant_banner.png'
import Button from '../button/Button'

import s from './Banner.module.css'

export default function Banner() {
  return (
    <div className={s.banner}>
      <div className={s.banner_text}>
        <h1>Sale</h1>
        <h2>New Season</h2>
        <Link to="sales">
          <Button className={s.banner_button}>Sale</Button>
        </Link>
      </div>

      <img src={plant_banner} alt="Plant" />
    </div>
  )
}
