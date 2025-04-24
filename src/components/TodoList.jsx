import { fetchTodos } from '@/store/todoSlice'
import { useEffect } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { useDispatch, useSelector } from 'react-redux'
const TodoList = () => {
  const { todos, status, error } = useSelector(state => state.todos)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])
  console.log(todos, status, error)

  return todos.length === 0 ? (
    <div>비어있음.</div>
  ) : (
    <ListGroup>
      {todos.map(todo => (
        <ListGroup.Item
          className="mt-2 d-flex justify-content-between align-items-center"
          key={todo.id}
        >
          <p className=" flex-grow-1">{todo.todosDesc}</p>
          <p>{todo.createAt}</p>
          <i className="bi bi-trash"></i>
        </ListGroup.Item>
      ))}{' '}
    </ListGroup>
  )
}

export default TodoList
