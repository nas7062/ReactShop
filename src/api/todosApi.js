import axios from 'axios'

export const getTodosData = async () => {
  try {
    const response = await axios.get(`/api/todos`)
    return response.data
  } catch (error) {
    console.log('get Todo', error)
    throw new Error('getTodoData')
  }
}
