import { Link } from 'react-router-dom'
import s from '../categories/Categories.module.css'
import { base_url, fetchProductListByCategory } from '../../requests/requests'
import { useDispatch } from 'react-redux'

const CategoryItem = ({ id, image, title }) => {
  const dispatch = useDispatch()

  const categoryId = isFinite(id) ? id.toString() : 'all'

  return (
    <Link className={s.category} to={'/categories/' + id.toString()}>
      <div
        className={s.categoryImg}
        onClick={() => {
          dispatch(fetchProductListByCategory(categoryId))
        }}
      >
        <img src={image.includes('https') ? image : base_url + image} />
      </div>
      <p>{title}</p>
    </Link>
  )
}

export default CategoryItem