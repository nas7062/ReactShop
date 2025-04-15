import axios from 'axios'
const BASE_URL = `http://localhost:3000/banners/`

export const getBannerData = async () => {
  try {
    const response = await axios.get(`${BASE_URL}`)
    return response.data
  } catch (error) {
    console.log('bannerData', error)
    throw error
  }
}
