import { getCartData } from '@/api/cartApi'

export const cartPageLoader = async () => {
  try {
    const cartItems = await getCartData()

    if (!cartItems || cartItems.length === 0) {
      return { cartItems: [] }
    }
    return cartItems
  } catch (error) {
    console.log('[ERROR] 카트 데이터 가져오는 중 오류')
    throw new Response('[ERROR] 카트 데이터 가져오는 중 오류', {
      status: error.status || 500,
    })
  }
}
