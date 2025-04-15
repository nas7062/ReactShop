import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import styles from './HeroSlider.module.css'
import { Link } from 'react-router-dom'
import { getBannerData } from '../api/BannerApi'
const HeroSlider = () => {
  const [banner, setBanner] = useState([])

  useEffect(() => {
    const fetchBanner = async () => {
      try {
        const data = await getBannerData()
        setBanner(data)
      } catch (error) {
        console.log('banner data', error)
      }
    }
    fetchBanner()
  }, [])
  console.log(banner)
  return (
    <section>
      <h2 hidden>EventBanner</h2>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} className={styles.mainSlider}>
        {banner.map(ban => (
          <SwiperSlide key={ban.id}>
            <div className={styles.imgWrap}>
              <img src={ban.img} alt={ban.title} />
            </div>
            <div className={styles.textWrap}>
              <p className={styles.title}>{ban.title}</p>
              <p className={styles.desc}>{ban.description}</p>
              <Link to={ban.link} className={styles.more}>
                View Product
              </Link>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSlider
