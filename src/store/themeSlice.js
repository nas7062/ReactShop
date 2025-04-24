import { createSlice } from '@reduxjs/toolkit'

const savedItme = localStorage.getItem('theme')
const isDark = savedItme !== null ? JSON.parse(savedItme) : false

export const themSlice = createSlice({
  name: 'theme',
  initialState: {
    isDark,
  },
  reducers: {
    toggleTheme: state => {
      state.isDark = !state.isDark
    },
  },
})

export const { toggleTheme } = themSlice.actions
