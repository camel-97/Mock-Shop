import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  HashRouter,
  Routes,
  Route
} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="cart" element={<Cart />} />
        </Route>
      </Routes>
    </HashRouter>
  </StrictMode>,
)
