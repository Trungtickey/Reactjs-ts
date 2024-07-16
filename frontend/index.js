

// // lấy danh sách sản phẩm
// fetch("http://localhost:9999/products")// Mặc định trả về promise
// .then(res=>{
//     console.log(res);
//     return res.json();
// })
// .then(data=>{
//     console.log(data);
//     // Tiến hành xử lí dữ liệu
// })

// Xóa
const dataFake ={
    "name": "Áo dài dây",
    "price": 15,
    "stock": 10,
    "description": "nothing",
    "createAt":"2024-07-09"
}
fetch("http://localhost:9999/products/1",{
    method: "POST",
    headers:{
     'Accept': 'application/json',
    'Content-Type': 'application/json'
    },
    body: JSON.stringify(dataFake),
}).then((res)=>res.json())
.then(data=>{
    console.log(data);
    // Xử lí giao diện sau khi đã xóa
})