import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './counterSlice'
import { themSlice } from './themeSlice'
import { todoSlice } from './todoSlice'

export default configureStore({
  reducer: {
    counter: counterSlice.reducer,
    theme: themSlice.reducer,
    todos: todoSlice.reducer,
  },
})
