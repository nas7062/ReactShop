import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './LatestList.module.css'
import ProductCard from '../components/ProductCard'
import { getProductData } from '../api/ProductApi '
import CardSkeleton from '../components/CardSkeleton'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const LatestList = () => {
  const [products, setProducts] = useState([])
  const [loading, setLoding] = useState(false)
  const [limit, setLimit] = useState(6)
  const arr = new Array(limit).fill(0)
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoding(true)
        const data = await getProductData(`category=new&_limit=${limit}`)
        await delay(1000)
        setProducts(data)
        setLoding(false)
      } catch (error) {
        console.log('getProducts', error)
        setLoding(false)
      }
    }
    fetchData()
  }, [limit])
  const changeLimit = e => {
    setLimit(Number(e.target.value))
  }

  return (
    <section className={styles.listContainer}>
      <h2>Shop The Latest</h2>
      <div className={styles.selectList}>
        <Link to={'/shop'} className={styles.more}>
          View All
        </Link>
        <select name="Limit" id="Limit" value={limit} onChange={changeLimit}>
          <option value="3">3개</option>
          <option value="6">6개</option>
          <option value="9">9개</option>
          <option value="12">12개</option>
          <option value="15">15개</option>
          <option value="18">18개</option>
        </select>
      </div>

      <ul className={styles.list}>
        {loading
          ? arr.map((_, idx) => (
              <li key={idx}>
                <CardSkeleton />
              </li>
            ))
          : products.map(product => (
              <li key={product.id}>
                <ProductCard product={product} />
              </li>
            ))}
        {}
      </ul>
    </section>
  )
}

export default LatestList
