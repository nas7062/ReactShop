import React from 'react'
import styles from './SortItem.module.css'
const SortItem = ({ option, handleSort, currentSort, label }) => {
  // currentSort가 없거나 null이면 'id'를 기본값으로 사용
  const isActive = currentSort === option || (!currentSort && option === 'id')

  return (
    <li
      onClick={() => {
        handleSort(option)
      }}
      className={isActive ? `${styles.active} ${styles.list}` : `${styles.list}`}
    >
      {label}
    </li>
  )
}

export default SortItem
