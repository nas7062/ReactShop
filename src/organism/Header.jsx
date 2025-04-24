import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import css from './Header.module.css'
import Logo from '../components/Logo'
import { throttle } from '../utils/features'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from '@/store/themeSlice'
const Header = () => {
  const [isOn, setIsOn] = useState(false)
  const location = useLocation()
  const dispatch = useDispatch()

  const addClassOn = () => {
    setIsOn(!isOn)
  }

  useEffect(() => {
    setIsOn(false)
  }, [location.pathname])

  const handleResize = throttle(() => {
    if (window.innerWidth > 1100) {
      setIsOn(false)
    }
  }, 1000)

  useEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [handleResize])
  // const [isDark, setIsDart] = useState(false)
  // useEffect(() => {
  //   const saveTheme = localStorage.getItem('theme')
  //   if (saveTheme !== null) {
  //     const parsedTheme = JSON.parse(saveTheme)
  //     setIsDart(parsedTheme)
  //     document.body.classList.toggle('dark-mode', parsedTheme)
  //   }
  // }, [isDark])
  // const handleThemeToggle = () => {
  //   const newTheme = !isDark
  //   setIsDart(newTheme)
  //   localStorage.setItem('theme', JSON.stringify(newTheme))
  // }
  const { isDark } = useSelector(state => state.theme)

  const handleThemeToggle = () => {
    dispatch(toggleTheme())
  }

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(isDark))
    if (isDark) {
      document.body.classList.add('dark-mode')
    } else {
      document.body.classList.remove('dark-mode')
    }
  }, [isDark])
  return (
    <header className={css.hd}>
      <div className={css.con}>
        <h1 className={css.logo}>
          <Link to={'/'}>
            <Logo />
          </Link>
        </h1>
        <div className={isOn ? `${css.gnb} ${css.on}` : css.gnb}>
          <nav>
            <CustomNavLink to={'/shop'} label={'shop'} />
            <CustomNavLink to={'/about'} label={'about'} />
            <CustomNavLink to={'/blog'} label={'blog'} />
            <CustomNavLink to={'/todo'} label={'todo'} />
          </nav>
          <div className={css.icon}>
            <CustomIconLink to={'/search'} icon={'bi-search'} />
            <CustomIconLink to={'/mypage'} icon={'bi-person-circle'} />
            <CustomIconLink to={'/cart'} icon={'bi-basket'} />
            <i
              className={`p-2 bi bi-${isDark ? 'moon' : 'sun'}`}
              style={{ cursor: 'pointer' }}
              onClick={handleThemeToggle}
            ></i>
          </div>
        </div>
        <i className={`${css.ham} bi bi-list`} title="전체메뉴 보기버튼" onClick={addClassOn}></i>
      </div>
    </header>
  )
}

const CustomNavLink = ({ to, label }) => (
  <NavLink className={({ isActive }) => (isActive ? `${css.active}` : '')} to={to}>
    {label}
  </NavLink>
)
const CustomIconLink = ({ to, icon }) => (
  <NavLink className={({ isActive }) => (isActive ? `${css.active}` : '')} to={to}>
    <i className={`bi ${icon}`}></i>
  </NavLink>
)

export default Header
