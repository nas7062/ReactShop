import React, { useState } from 'react'
import styles from './ShopPage.module.css'
import { useLoaderData, useSearchParams } from 'react-router-dom'
import ProductCard from '@/components/ProductCard'
import Pagenation from '@/components/Pagenation'
import CategoryButton from '@/components/CategoryButton'
import SortItem from '@/components/SortItem'
const ShopPage = () => {
  const [isActive, setIsActive] = useState(false)
  const [searchParams, setSearchParams] = useSearchParams()
  const initProductData = useLoaderData()
  const { products, per_page } = initProductData
  const data = products.data
  const sortCase = searchParams.get('_sort')
  const currentCategory = searchParams.get('category')

  const handleCategoryFilter = category => {
    const params = new URLSearchParams(searchParams) // 현재 파라미터 정보 유지
    console.log(params)
    params.set('_page', 1)
    params.set('_per_page', per_page)
    category ? params.set('category', category) : params.delete('category')
    params.set('_sort', 'id') // sort 초기화
    setSearchParams(params)
  }

  const handleSort = sortOption => {
    const params = new URLSearchParams(searchParams)
    params.set('_page', 1)
    params.set('_sort', sortOption)
    setIsActive(false)
    setSearchParams(params)
  }

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

  const sortOptions = [
    { option: 'id', label: '등록순' },
    { option: 'price', label: '낮은 가격순' },
    { option: '-price', label: '높은 가격순' },
    { option: 'discount', label: '낮은 할인순' },
    { option: '-discount', label: '높은 할인순' },
  ]

  const categories = [
    { id: '', label: '전체상품' },
    { id: 'new', label: '신상품(new)' },
    { id: 'top', label: '인기상품(top)' },
  ]
  return (
    <main className={styles.shopPage}>
      <h2>Shop All</h2>
      <div className={styles.searchContainer}>
        <div className={styles.category}>
          {categories.map(cate => (
            <CategoryButton
              key={cate.id}
              cate={cate.id}
              handleCategoryFilter={handleCategoryFilter}
              cuurentCategory={currentCategory === null && cate.id === '' ? null : currentCategory}
              label={cate.label}
            />
          ))}
        </div>
        <div className={`${styles.sort} ${isActive ? styles.active : ''}`}>
          <div className={styles.sortHeader} onClick={() => setIsActive(!isActive)}>
            <p>{getSortText()}</p>
            <i className={`bi bi-chevron-${isActive ? 'up' : 'down'}`}></i>
          </div>
          <ul>
            {sortOptions.map(sortOpt => (
              <SortItem
                key={sortOpt.option}
                option={sortOpt.option}
                handleSort={handleSort}
                currentSort={sortCase}
                label={sortOpt.label}
              />
            ))}
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
