import axios from 'axios'
// const BASE_URL = `http://localhost:3000/products`

export const getProductData = async (query = '') => {
  try {
    const response = await axios.get(`/api/products?${query}`)
    return response.data
  } catch (error) {
    console.log('ProductData', error)
    throw error
  }
}

export const getProductById = async id => {
  try {
    const response = await axios.get(`/api/products/${id}`)
    return response.data
  } catch (error) {
    console.log('ProductById', error)
    throw error
  }
}
export const getProductByCategory = async (category, limit = 10) => {
  try {
    const response = await axios.get(`/api/products/`, {
      params: {
        category,
        _limit: limit,
      },
    })
    return response.data
  } catch (error) {
    console.log('ProductByCategory', error)
    throw error
  }
}
