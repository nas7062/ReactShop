import { getProductByCategory, getProductById } from '../api/ProductApi '

export const detailPageLoader = async info => {
  try {
    console.log('loader : ', info)
    // 상품 id에 해당하는 정보
    const product = await getProductById(info.params.productId)

    if (!product) {
      throw new Response('[ERROR] 상품 존재하지 않음 ', {
        status: 404,
      })
    }

    const relatiedProducts = await getProductByCategory(product.category, 10)
    if (!relatiedProducts) {
      throw new Response('[ERROR] 상품 카테고리 에러 ', {
        status: 404,
      })
    }
    const filteredRelatedProducts = relatiedProducts.filter(p => p.id !== product.id)

    return { product, filteredRelatedProducts }
  } catch (error) {
    console.log('[ERROR] 상품 데이터 가져오는 중 오류')
    throw new Response('[ERROR] 상품 데이터 가져오는 중 오류', {
      status: error.status || 500,
    })
  }
}
