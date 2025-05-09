import { getProductByCategory, getProductById, getProductData } from '../api/ProductApi '

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

export const shopPageLoader = async ({ request }) => {
  const url = new URL(request.url)
  const page = url.searchParams.get('_page') || 1
  const per_page = url.searchParams.get('_per_page') || 12
  const category = url.searchParams.get('category') || ''
  const sort = url.searchParams.get('_sort') || ''
  let queryString = `_page=${page}&_per_page=${per_page}`
  if (category) queryString += `&category=${category}`
  if (sort) queryString += `&_sort=${sort}`

  try {
    const products = await getProductData(queryString)
    return { products, per_page }
  } catch (error) {
    console.log('shopPageData', error)
  }
}
