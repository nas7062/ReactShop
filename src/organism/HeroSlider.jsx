import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import styles from './HeroSlider.module.css'
import { Link } from 'react-router-dom'
const HeroSlider = () => {
  return (
    <section>
      <h2 hidden>EventBanner</h2>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} className={styles.mainSlider}>
        <SwiperSlide>
          <div className={styles.imgWrap}>
            <img src="https://picsum.photos/seed/picsum/800/350" alt="" />
          </div>
          <div className={styles.textWrap}>
            <p className={styles.title}>슬라이드 제목</p>
            <p className={styles.desc}>슬라이드 내용</p>
            <Link to={'/shop'} className={styles.more}>
              View Product
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.imgWrap}>
            <img src="https://picsum.photos/seed/picsum/800/350" alt="" />
          </div>
          <div className={styles.textWrap}>
            <p className={styles.title}>슬라이드 제목</p>
            <p className={styles.desc}>슬라이드 내용</p>
            <Link to={'/shop'} className={styles.more}>
              View Product
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  )
}

export default HeroSlider
