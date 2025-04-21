import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import styles from './DetailPage.module.css'
import { formmatCurrency } from '../utils/features'
import DetailTabInfo from '@/organism/DetailTabInfo'
import SimilarProducts from '@/organism/SimilarProducts'
import Modal from '@/components/Modal'

const DetailPage = () => {
  const { product, filteredRelatedProducts } = useLoaderData()
  const [isLoading, setIsLoading] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [count, setCount] = useState(1)
  useEffect(() => {
    setIsLoading(true)
    if (product && product.id) {
      const timer = setTimeout(() => {
        setIsLoading(false)
      }, 300)
      return () => clearTimeout(timer)
    }
  }, [product])
  if (isLoading) {
    return <div>Loading..</div>
  }
  const addToCart = () => {
    setIsModalOpen(true)
  }
  const increase = () => {
    setCount(prev => prev + 1)
  }

  const decrease = () => {
    setCount(prev => (prev > 1 ? prev - 1 : 1))
  }
  const closeModal = () => {
    setIsModalOpen(false)
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
              <button onClick={decrease}>-</button>
              <span>{count}</span>
              <button onClick={increase}>+</button>
            </div>
            <button className={styles.addBtn} onClick={addToCart}>
              Add To Cart
            </button>
          </div>
        </div>
      </div>
      <DetailTabInfo />
      <SimilarProducts products={filteredRelatedProducts} />
      {isModalOpen && <Modal product={product} count={count} onClose={closeModal} />}
    </main>
  )
}

export default DetailPage
