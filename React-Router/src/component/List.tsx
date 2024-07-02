import React from 'react'
import { useNavigate } from 'react-router-dom'

const List = () => {
    const navigate = useNavigate();
  return (
    <div>
      <p>Danh sách sản phẩm</p>
      <button onClick={()=>{
        navigate("/product-details/10/TrungTickey")
      }}>Chuyển sang trang detail</button>
    </div>
  )
}

export default List
