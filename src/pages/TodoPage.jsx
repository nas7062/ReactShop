import TodoInput from '@/components/TodoInput'
import TodoList from '@/components/TodoList'
import TodoSearch from '@/components/TodoSearch'
import React from 'react'

const TodoPage = () => {
  return (
    <main>
      <h2>todoList</h2>
      <TodoSearch />
      <TodoInput />
      <TodoList />
    </main>
  )
}

export default TodoPage
