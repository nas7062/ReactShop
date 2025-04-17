import React from 'react'
import css from './CardSkeleton.module.css'

const CardSkeleton = () => {
  return (
    <div className={css.skeleton}>
      <div className={css.imgWrap}></div>
      <div className={css.textWrap}>
        <div className={css.title}></div>
        <div className={css.price}></div>
      </div>
    </div>
  )
}

export default CardSkeleton
