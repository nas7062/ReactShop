import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'
import { themSlice } from './themeSlice'

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themSlice.reducer,
  },
})
