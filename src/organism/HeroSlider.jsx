import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import styles from './HeroSlider.module.css'
import { Link } from 'react-router-dom'
import { getBannerData } from '../api/BannerApi'

const delay = ms => new Promise(resolve => setTimeout(resolve, ms))

const HeroSlider = () => {
  const [banner, setBanner] = useState([])
  const [Loading, setLoading] = useState(false)
  useEffect(() => {
    // 배너 데이터를 가져오기 전에 미리 첫 번째 이미지 프리로드
    const preloadFirstImage = () => {
      const img = new Image()
      img.src = '/public/vite.svg' // 첫 번째 이미지 경로를 알고 있다면 직접 지정
    }
    preloadFirstImage()
    const fetchBanner = async () => {
      try {
        setLoading(true)
        const data = await getBannerData()
        await delay(1000)
        setBanner(data)
        setLoading(false)
      } catch (err) {
        console.log('err----', err)
        setLoading(false)
      }
    }
    fetchBanner()
  }, [])
  return (
    <section>
      <h2 hidden>EventBanner</h2>
      <Swiper pagination={{ clickable: true }} modules={[Pagination]} className={styles.mainSlider}>
        {Loading ? (
          <SwiperSlide>
            <div className={`${styles.skletion} ${styles.imgWrap}`}></div>
          </SwiperSlide>
        ) : (
          banner.map(ban => (
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
          ))
        )}
      </Swiper>
    </section>
  )
}

export default HeroSlider
