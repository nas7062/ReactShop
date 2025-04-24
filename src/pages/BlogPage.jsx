import Counter from '@/components/Counter'
import { decrement, increment, reset } from '@/store/counterSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

const BlogPage = () => {
  const dispatch = useDispatch()
  const increase = num => {
    dispatch(increment(num))
  }
  const decrease = () => {
    dispatch(decrement())
  }
  const Reset = () => {
    dispatch(reset())
  }
  return (
    <main>
      <h2>BlogPage</h2>
      <Counter />
      <Counter />
      <Counter />
      <button onClick={() => increase(1)}>증가하기</button>
      <button onClick={() => decrease()}>감소하기</button>
      <button onClick={() => increase(10)}>10증가하기</button>
      <button onClick={Reset}>초기화하기</button>
    </main>
  )
}

export default BlogPage
