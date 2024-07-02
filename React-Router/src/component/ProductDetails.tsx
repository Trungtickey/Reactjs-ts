import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetails = () => {
    // Sử dụng useParams để lấy ra tham số trên đường dẫn dộng
    // const {id, name} = useParams();
    // const {id} = useParams();
    let id = useParams().id;
    let name = useParams().name;
  return (
    <div>
      Detail : {id} + Name : {name}
    </div>
  )
}

export default ProductDetails
