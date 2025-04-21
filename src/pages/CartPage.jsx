import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import styles from './CartPage.module.css'
import { formmatCurrency } from '@/utils/features'
import { removeFromCart, updateCartItemCout } from '@/api/cartApi'
const CartPage = () => {
  const carItems = useLoaderData()
  const [items, setItems] = useState(Array.isArray(carItems) ? carItems : [])

  const totalCount = items.reduce((acc, cur) => acc + cur.count, 0)
  const totalPrice = items.reduce(
    (acc, cur) => acc + Math.floor(cur.price * cur.count * (1 - cur.discount / 100)),
    0
  )
  const increase = id => {
    setItems(prev => prev.map(item => (item.id === id ? { ...item, count: item.count++ } : item)))

    const newCount = items.find(item => item.id === id).count + 1
    updateCartItemCout(id, newCount)
  }

  const decrease = id => {
    setItems(prev =>
      prev.map(item => (item.id === id && item.count > 1 ? { ...item, count: item.count-- } : item))
    )
    const newCount = items.find(item => item.id === id).count - 1
    if (newCount >= 1) updateCartItemCout(id, newCount)
  }
  const handleDelete = id => {
    if (window.confirm('삭제 하시겠습니까')) {
      setItems(prev => prev.filter(item => item.id !== id))
      removeFromCart(id)
    } else return
  }
  console.log(carItems)

  return (
    <main>
      <h2>Shopping Cart</h2>
      {items.length > 0 && (
        <p>
          your have {items.length} item in your cart total Item Count {totalCount}
        </p>
      )}
      {items.length === 0 ? (
        <p>No Item in your cart</p>
      ) : (
        <>
          <ul className={styles.cartList}>
            {items.map(item => (
              <li className={styles.cartItem} key={item.id}>
                <div className={styles.cartImg}>
                  <img src={`/public/img/${item.img}`} alt={item.title} />
                </div>
                <div className={styles.title}>{item.title}</div>
                <div className={styles.price}>{formmatCurrency(item.price)}</div>
                <div className={styles.btnArea}>
                  <button onClick={() => decrease(item.id)}>-</button>
                  <span>{item.count}</span>
                  <button onClick={() => increase(item.id)}>+</button>
                </div>
                <div className={styles.sum}>{formmatCurrency(item.price * item.count)}</div>
                <div className={styles.deleteBtn} onClick={() => handleDelete(item.id)}>
                  <i className="bi bi-trash3"></i>
                </div>
              </li>
            ))}
          </ul>
          <div className={styles.totalArea}>총 금액 :{formmatCurrency(totalPrice)}</div>
        </>
      )}
    </main>
  )
}

export default CartPage
