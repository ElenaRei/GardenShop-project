import { Link } from 'react-router-dom'
import s from './Categories.module.css'

const Categories = (props) => {

  return <div className={s.categories}>
    <h2 className={s.categoryTitle}>Categories</h2>
    <div className={s.categoryContent}>
      {
        props.categories.map( (item) => {
          return <Link className={s.category} key={item.id}>
          <div className={s.categoryImg}>
            <img src={'http://localhost:3333' + item.image}/>
          </div>
          <p>{item.title}</p>
        </Link>
         }  )
      }
      
    </div>
  </div>
}

export default Categories
