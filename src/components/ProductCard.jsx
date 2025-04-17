import React from 'react'
import styles from './ProductCard.module.css'
import { Link } from 'react-router-dom'
import { formmatCurrency } from '../utils/features'
const ProductCard = ({ product }) => {
  return (
    <div className={styles.card}>
      <div className={styles.imgWrap}>
        <img src={`/public/img/${product.img}`} alt={product.title} />
        <span className={styles.cate}>{product.category ? product.category : ''}</span>
        {product.discount > 0 && <span className={styles.discount}>{product.discount + '%'}</span>}
      </div>
      <div className={styles.textWrap}>
        <strong className={styles.title}>{product.title}</strong>
        <span className={styles.price}>{formmatCurrency(product.price)}</span>
      </div>
      <Link to={`/detail/${product.id}`} className={styles.btnGoDetail}>
        View Details
      </Link>
    </div>
  )
}

export default ProductCard
