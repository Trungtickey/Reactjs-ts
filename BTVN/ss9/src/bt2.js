"use strict";
// Khởi tạo một biến kiểu Tuple chứa 3 giá trị kiểu number, string và bolean và gán giá trị cho biến đó. Sử dụng toán tử spread để lấy 3 giá trị trong đó ra và gán chúng cho 3 biến phân biệt.
let kieuDuLieu;
kieuDuLieu = [10, "hi", true];
const [numValue, stringValue, boolValue] = kieuDuLieu;
console.log("Number value:", numValue);
console.log("String value:", stringValue);
console.log("Boolean value:", boolValue);
