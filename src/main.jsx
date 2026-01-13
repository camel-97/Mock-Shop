import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  HashRouter as Router,
  Routes,
  Route
} from 'react-router-dom'

import './css/index.css'
import Layout from './layout/Layout.jsx'
import Home from './pages/home.jsx'
import Shop from './pages/shop.jsx'
import Cart from './pages/cart.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
