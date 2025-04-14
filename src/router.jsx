import { createBrowserRouter } from 'react-router-dom'
import Default from './layout/Default'
import MainPage from './pages/MainPage'
import AboutPage from './pages/AboutPage'
import ShopPage from './pages/ShopPage'
import BlogPage from './pages/BlogPage'
import NotFound from './pages/NotFound'
import CartPage from './pages/CartPage'

let router = createBrowserRouter([
  {
    path: '/',
    element: <Default />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      { path: '/about', element: <AboutPage /> },
      { path: '/shop', element: <ShopPage /> },
      { path: '/blog', element: <BlogPage /> },
      { path: '/cart', element: <CartPage /> },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
])

export default router
