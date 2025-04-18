import React, { useEffect, useState } from 'react'
import styles from './Modal.module.css'
import { formmatCurrency } from '@/utils/features'
import { useNavigate } from 'react-router-dom'
import { addCartData } from '@/api/cartApi'
const Modal = ({ product, count, onClose }) => {
  const [isActive, setIsActive] = useState(false)
  const navigate = useNavigate()
  // 마운트 직 후 active 클래스를 추가해야함 그래야 애니메이션 적용(?)
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsActive(true)
      document.body.style.overflow = 'hidden'
    }, 1000)

    return () => {
      clearTimeout(timer)
      document.body.style.overflow = 'auto'
    }
  }, [])
  const handleClose = () => {
    setIsActive(false)
    setTimeout(onClose, 300)
  }
  const handleAddToCart = async () => {
    try {
      const cartItem = {
        id: product.id,
        title: product.title,
        img: product.img,
        price: product.price,
        category: product.category,
        discount: product.discount,
        count: count,
      }
      await addCartData(cartItem)
      handleClose()
      navigate('/cart')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className={`${styles.modal} ${isActive ? styles.active : ''}`}>
      <div className={`${styles.container} `}>
        <h2>cart</h2>
        <div className={styles.content}>
          <div className={styles.imgWrap}>
            <img src={`/public/img/${product.img}`} alt={product.title} />
          </div>
          <div className={styles.infoWrap}>
            <p>{product.title}</p>
            <p>{formmatCurrency(product.price)}</p>
            {product.discount > 0 && <p>{product.discount} %</p>}
            <p>{count}개</p>
            <p>총가격 : {formmatCurrency(product.price * count)}</p>
          </div>
        </div>
        <div className={styles.btnArea}>
          <button onClick={handleClose}>취소</button>
          <button onClick={handleAddToCart}>장바구니 담기</button>
        </div>
        <button className={styles.btnClose} onClick={handleClose}>
          <i className="bi bi-x-lg"></i>
        </button>
      </div>
    </div>
  )
}

export default Modal
