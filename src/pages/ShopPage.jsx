import React, { useState } from 'react'
import styles from './ShopPage.module.css'
import { useLoaderData, useNavigate, useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import Pagenation from '@/components/Pagenation'
const ShopPage = () => {
  const [isActive, setIsActive] = useState(false)
  const [searchParams] = useSearchParams()
  const initProductData = useLoaderData()
  const navigate = useNavigate()
  const { products, per_page } = initProductData
  const data = products.data

  const currentCategory = searchParams.get('category')

  const handleCategoryFilter = category => {
    const params = new URLSearchParams(searchParams) // 현재 파라미터 정보 유지
    console.log(params)
    params.set('_page', 1)
    params.set('_per_page', per_page)
    category ? params.set('category', category) : params.delete('category')
    navigate(`/shop/?${params}`)
  }

  const handleSort = sortOption => {
    const params = new URLSearchParams(searchParams)
    params.set('_page', 1)
    params.set('_sort', sortOption)
    setIsActive(false)
    navigate(`/shop/?${params}`)
  }

  const sortCase = searchParams.get('_sort')
  const sortTextMap = {
    id: '등록순',
    price: '낮은 가격순',
    '-price': '높은 가격순',
    discount: '낮은 할인순',
    '-discount': '높은 할인순',
  }
  const getSortText = () => {
    return sortTextMap[sortCase] || '등록순'
  }

  return (
    <main className={styles.shopPage}>
      <h2>Shop All</h2>
      <div className={styles.searchContainer}>
        <div className={styles.category}>
          <button
            onClick={() => {
              handleCategoryFilter(``)
            }}
            className={`${currentCategory === null ? styles.active : ''}`}
          >
            전체상품
          </button>
          <button
            onClick={() => {
              handleCategoryFilter('new')
            }}
            className={`${currentCategory === 'new' ? styles.active : ''}`}
          >
            신상품(new)
          </button>
          <button
            onClick={() => {
              handleCategoryFilter('top')
            }}
            className={`${currentCategory === 'top' ? styles.active : ''}`}
          >
            인기상품(top)
          </button>
        </div>
        <div className={`${styles.sort} ${isActive ? styles.active : ''}`}>
          <div className={styles.sortHeader} onClick={() => setIsActive(!isActive)}>
            <p>{getSortText()}</p>
            <i className={`bi bi-chevron-${isActive ? 'up' : 'down'}`}></i>
          </div>
          <ul>
            <li
              onClick={() => {
                handleSort('id')
              }}
              className={`${sortCase === 'id' ? styles.active : ''}`}
            >
              등록순
            </li>
            <li
              onClick={() => {
                handleSort('price')
              }}
              className={`${sortCase === 'price' ? styles.active : ''}`}
            >
              높은 가격순
            </li>
            <li
              onClick={() => {
                handleSort('-price')
              }}
              className={`${sortCase === '-price' ? styles.active : ''}`}
            >
              낮은 가격순
            </li>
            <li
              onClick={() => {
                handleSort('discount')
              }}
              className={`${sortCase === 'discount' ? styles.active : ''}`}
            >
              높은 할인순
            </li>
            <li
              onClick={() => {
                handleSort('-discount')
              }}
              className={`${sortCase === '-discount' ? styles.active : ''}`}
            >
              낮은 할인순
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.productList}>
        <ul className={styles.list}>
          {data.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </ul>
        <Pagenation data={initProductData} />
      </div>
    </main>
  )
}

export default ShopPage
