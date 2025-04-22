import React from 'react'
import styles from './CategoryButton.module.css'

const CategoryButton = ({ cate, label, handleCategoryFilter, cuurentCategory }) => {
  // 추가
  const isActive = (cate === '' && cuurentCategory === null) || cate === cuurentCategory

  return (
    <button
      onClick={() => {
        handleCategoryFilter(cate)
      }}
      className={isActive ? `${styles.active} ${styles.btn}` : `${styles.btn}`}
    >
      {label}
    </button>
  )
}

export default CategoryButton
