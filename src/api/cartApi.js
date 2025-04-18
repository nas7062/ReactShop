import axios from 'axios'

export const getCartData = async () => {
  try {
    const response = await axios.get(`/api/cart/`)
    return response.data
  } catch (error) {
    console.log('getCartData', error)
    throw error
  }
}

export const addCartData = async cartItem => {
  try {
    const cart = await getCartData()
    const existingItem = cart.find(item => item.id === cartItem.id)
    if (existingItem) {
      const updateItem = {
        ...existingItem,
        count: existingItem.count + cartItem.count,
      }
      const response = await axios.put(`/api/cart/${existingItem.id}`, updateItem)
      return response.data
    } else {
      const response = await axios.post(`/api/cart/`, cartItem)
      return response.data
    }
  } catch (error) {
    console.log('getCartData', error)
    throw error
  }
}
