import React, { useState } from 'react'
import styles from './DetailTabInfo.module.css'
const DetailTabInfo = () => {
  const [activeTab, setActiveTab] = useState(0)
  const tabTitle = ['메뉴1', '메뉴2', '메뉴3']
  return (
    <>
      <div className={styles.tabBtn}>
        {tabTitle.map((title, index) => (
          <button
            className={`${activeTab === index && styles.active}`}
            onClick={() => setActiveTab(index)}
            key={index}
          >
            {title}
          </button>
        ))}
      </div>
      <div className={`${styles.tabContent} ${activeTab === 0 && styles.active}`}>
        <h3>제목</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>
      <div className={`${styles.tabContent} ${activeTab === 1 && styles.active}`}>
        <h3>제목2</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>
      <div className={`${styles.tabContent} ${activeTab === 2 && styles.active}`}>
        <h3>제목3</h3>
        <p>내용</p>
        <p>내용</p>
        <p>내용</p>
      </div>
    </>
  )
}

export default React.memo(DetailTabInfo)
