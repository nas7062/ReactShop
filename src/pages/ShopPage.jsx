import React, { useState } from 'react'
import styles from './ShopPage.module.css'
const ShopPage = () => {
  const [isActive, setIsActive] = useState(false)

  return (
    <main className={styles.shopPage}>
      <h2>Shop All</h2>
      <div className={styles.searchContainer}>
        <div className={styles.category}>
          <button className={styles.active}>전체상품</button>
          <button>신상품(new)</button>
          <button>인기상품(top)</button>
        </div>
        <div className={`${styles.sort} ${isActive ? styles.active : ''}`}>
          <div className={styles.sortHeader} onClick={() => setIsActive(!isActive)}>
            <p>등록순</p>
            <i className={`bi bi-chevron-${isActive ? 'up' : 'down'}`}></i>
          </div>
          <ul>
            <li>등록순</li>
            <li className={styles.active}>높은 가격순</li>
            <li>낮은 가격순</li>
            <li>높은 할인순</li>
            <li>낮은 할인순</li>
          </ul>
        </div>
      </div>
      <div className={styles.productList}>
        <ul className={styles.list}>
          <li>상품리스트</li>
          <li>상품리스트</li>
          <li>상품리스트</li>
          <li>상품리스트</li>
          <li>상품리스트</li>
        </ul>
        <div className={styles.paginationArea}>
          <button>
            <i className="bi bi-chevron-left"></i>
          </button>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <button>4</button>
          <button>5</button>
          <button>
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>
      </div>
    </main>
  )
}

export default ShopPage
