import { createBrowserRouter } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Default from './layout/Default'
import NotFound from './pages/NotFound'
import DetailPage from './pages/DetailPage'
import { detailPageLoader, shopPageLoader } from './loaders/productsLoader'
import { cartPageLoader } from './loaders/cartsLoader'

const MainPage = lazy(() => import('./pages/MainPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ShopPage = lazy(() => import('./pages/ShopPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const CartPage = lazy(() => import('./pages/CartPage'))

// 더 나은 로딩 컴포넌트 정의

const router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    errorElement: <NotFound />,
    children: [
      { path: '', element: <MainPage /> },
      { path: '/shop', element: <ShopPage />, loader: shopPageLoader },
      { path: '/about', element: <AboutPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/cart', element: <CartPage />, loader: cartPageLoader },
      {
        path: '/detail/:productId',
        element: <DetailPage />,
        loader: detailPageLoader,
      },
    ],
  },
])
export default router
