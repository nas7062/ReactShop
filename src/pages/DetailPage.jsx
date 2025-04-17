import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import styles from './DetailPage.module.css'
import { formmatCurrency } from '../utils/features'
import InfoArea from '@/components/InfoArea'
import InfoAdditional from '@/components/InfoAdditional'
import InfoReviews from '@/components/InfoReviews'
import ProductCard from '@/components/ProductCard'

const DetailPage = () => {
  const { product, relatiedProducts } = useLoaderData()
  const [tabMenu, setTabMenu] = useState('Description')
  const arr = ['Description', 'Aditional information', 'Review']

  console.log(relatiedProducts)
  const selectTab = e => {
    setTabMenu(e.target.innerText)
  }
  return (
    <main>
      <h2>DetailPage</h2>
      <div className={styles.container}>
        <div className={styles.imgWrap}>
          <img src={`/public/img/${product.img}`} alt={product.title} />
          {product.discount && <p className={styles.discount}>{product.discount} %</p>}
        </div>
        <div className={styles.infoWrap}>
          <p className={styles.title}>{product.title}</p>
          <p className={styles.price}>{formmatCurrency(product.price)}</p>
          <p className={styles.category}>{product.category}</p>
          <div className={styles.btnWrap}>
            <div className={styles.counterArea}>
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
            <button className={styles.addBtn}>Add To Cart</button>
          </div>
        </div>
      </div>
      <div>
        <ul className={styles.tabList}>
          {arr.map((item, index) => (
            <li
              className={`${tabMenu === item ? styles.active : ''} `}
              onClick={selectTab}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
        {tabMenu === 'Description' && <InfoArea />}
        {tabMenu === 'Aditional information' && <InfoAdditional />}
        {tabMenu === 'Review' && <InfoReviews />}
      </div>
      <h2>Similar Items</h2>
      <div className={styles.similarList}>
        {relatiedProducts.map(products => (
          <ProductCard product={products} />
        ))}
      </div>
    </main>
  )
}

export default DetailPage
