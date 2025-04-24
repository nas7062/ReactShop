import { getTodosData } from '@/api/todosApi'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk('todos/fetchTodos', async (_, { rejectWithValue }) => {
  try {
    const response = await getTodosData()

    if (!response) {
      return rejectWithValue({ message: '서버 응답 실패' })
    }
    return response
  } catch (error) {
    return rejectWithValue({ message: error.message })
  }
})
export const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    status: 'idle',
    error: null,
  },
  reducers: {
    addTodo: state => {
      this.state = state
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchTodos.pending, state => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload
        state.status = 'succeeded'
        state.error = null
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload.message
      })
  },
})
