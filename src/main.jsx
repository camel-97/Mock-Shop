import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router'

import './index.css'

import Layout from './layout/Layout'

import Home from './pages/home'
import Cart from './pages/cart'
import Shop from './pages/shop'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    children: [
      {index: true, element: <Home/>},
      {path: 'shop', element: <Shop/>},
      {path: 'cart', element: <Cart/>}
    ]
  }
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
