import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from './router.jsx'
import { Provider } from 'react-redux'
import store from './store/store.js'
// Bootstrap 가져오기
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} fallbackElement={<div>로딩중...</div>} />
    </Provider>
  </StrictMode>
)
