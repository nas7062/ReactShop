import React from 'react'
import styles from './Pagenation.module.css'
import { useSearchParams } from 'react-router-dom'
const Pagenation = ({ data }) => {
  const [searchParams, setSearchParmas] = useSearchParams()
  const params = new URLSearchParams(searchParams)
  const { last, first, prev, next, pages } = data.products
  const currentPage = Number(params.get('_page') || 1)

  const handlePageChange = page => {
    const params = new URLSearchParams(searchParams)
    params.set('_page', page)
    setSearchParmas(params)
  }

  const getPageNumber = () => {
    const maxPageNumber = 10
    // 전체 페이지가  최대 페이지 보다 작으면 모든 페이지 보여줌
    if (pages <= maxPageNumber) {
      return Array.from({ length: pages }, (_, i) => i + 1)
    }
    // 페이지가 많을 경우 현재 페이지를 기준으로 하여 주변 번호 생성
    // 예) 현재 페이지 15 => 10~20 페이지 보여줘야함.
    let startPage = Math.max(1, currentPage - Math.floor(maxPageNumber / 2))
    let endPage = Math.min(pages, startPage + maxPageNumber - 1)
    startPage = Math.max(1, endPage - maxPageNumber + 1)

    return Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
  }
  const pageNumbers = getPageNumber()
  return (
    <div className={styles.paginationArea}>
      <button
        onClick={() => handlePageChange(first)}
        disabled={currentPage === first}
        className={currentPage === first ? styles.disabled : ''}
      >
        처음으로
      </button>

      <button
        onClick={() => handlePageChange(prev)}
        disabled={prev === null || currentPage === first}
        className={currentPage === first ? styles.disabled : ''}
      >
        <i className="bi bi-chevron-left"></i>
      </button>
      {pageNumbers.map(num => (
        <button
          className={num === currentPage ? styles.active : ''}
          onClick={() => handlePageChange(num)}
          key={num}
        >
          {num}
        </button>
      ))}
      <button
        onClick={() => handlePageChange(next)}
        disabled={next === null || currentPage === last}
        className={currentPage === last ? styles.disabled : ''}
      >
        <i className="bi bi-chevron-right"></i>
      </button>
      <button
        onClick={() => handlePageChange(last)}
        disabled={currentPage === last}
        className={currentPage === last ? styles.disabled : ''}
      >
        마지막으로
      </button>
    </div>
  )
}

export default Pagenation
