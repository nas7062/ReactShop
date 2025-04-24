import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    count: 0,
    label: '카운터',
  },
  reducers: {
    increment: (state, action) => {
      state.count += action.payload
    },
    decrement: state => {
      state.count > 0 ? (state.count -= 1) : state.count
    },
    reset: state => {
      state.count = 0
    },
  },
})

export const { increment, decrement, reset } = counterSlice.actions
