"use strict";
console.log("Lô ní");
// const print=()=>{
// }
// Hàm in ra tên
// const printName = (name: string, callback: Function)=>{
//     // in ra sau 1 khoảng tgian ngẫu nhiên
//     let randomTime = Math.random()*5+1;
//     setTimeout(()=>{
//        console.log(name);
//        callback();
//     }, randomTime*1000)
// }
// Gọi hàm
// printName("Sang");
// printName("Trung");
// printName("Thành");
// printName("Liên");
// printName("Vương");
// Đây là ví dụ của bất đồng bộ. 
// Xử lis bất đồng bộ
//1. callBack: 1 hàm làm tham số của hàm khác
// printName("An", () => {
//     printName("Nhiên", () => {
//         printName("Hằng", () => {
//             console.log("Finished!");
//         })
//     })
// })
//2. Asyn / await
//3. promise
// tạo promise
let promise = new Promise((resolve, reject) => {
    //resolve("Cristiano Ronaldo")// Thành công
    reject("Tâm em");
});
// sử dụng promise 
promise.then((name) => {
    console.log("name " + name);
}).catch(err => {
    console.log(err);
});
console.log("Kết thúc");
