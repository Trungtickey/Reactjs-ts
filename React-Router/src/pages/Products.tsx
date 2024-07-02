import React from 'react'
import { Outlet } from 'react-router-dom'

const Products = () => {
  return (
    <div>
      <h1>Trang sản phẩm</h1>
      {/* Sử dụng component Outlet dể chỉ định vị trí component con xuất hiện */}
      <Outlet/>
    </div>
  )
}

export default Products
