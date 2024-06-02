"use strict";
// Khai báo 3 biến, 2 biến có kiểu dữ liệu undefined và number, 1 biến không có kiểu dữ liệu. in 3 biến đã khai báo ra màn hình, kiểm tra kết quả và giải thích.
// Khai báo các biến
let var1; // Biến có kiểu dữ liệu là undefined
let var2 = 42; // Biến có kiểu dữ liệu là number
let var3; // Biến không có kiểu dữ liệu, TypeScript sẽ tự suy luận là any
// Định nghĩa hàm generic để in các biến
function printVariables(a, b, c) {
    console.log('var1:', a);
    console.log('var2:', b);
    console.log('var3:', c);
}
// Gọi hàm để in các biến
printVariables(var1, var2, var3);
