// Lấy danh sách sản phẩm về

import { instance } from ".."

import { ProductType } from "../../config/interfaces"

export const getAllProduct = () => {
    return instance.get("products");
}

// thêm mới 
export const addNewProduct = (data : ProductType)=>{
    return instance.post('products', data)
}
// Sửa 

export const editProduct = (id: number, data: ProductType)=>{
    return instance.put(`products/${id}`, data);
}

// Xóa 
export const deleteProduct = (id: number) =>{
    return instance.delete(`product/${id}`);
}