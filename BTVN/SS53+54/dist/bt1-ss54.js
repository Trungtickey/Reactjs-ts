"use strict";
// Viết một hàm tính chỉ số BMI (Body Mass Index) có hai tham số nhận vào gồm cân nặng (kg) và chiều cao (m) của một người.
// Sử dụng try-catch để xử lý các trường hợp ngoại lệ như cân nặng hoặc chiều cao không hợp lệ.
// Chiều cao và cân nặng > 0
// Kiểu dữ liệu phải là số
// Khác kiểu NaN
function calculateBMI(weight, height) {
    try {
        // Kiểm tra dữ liệu 
        if (typeof weight !== 'number' || typeof height !== 'number') {
            throw new Error('Weight and height must be numbers.');
        }
        // Kiểm tra giá trị NaN
        if (isNaN(weight) || isNaN(height)) {
            throw new Error('Weight and height cannot be NaN.');
        }
        // Kiểm tra giá trị lớn hơn 0
        if (weight <= 0 || height <= 0) {
            throw new Error('Weight and height must be greater than 0.');
        }
        // Tính BMI
        const bmi = weight / (height * height);
        return bmi;
    }
    catch (error) {
        return `Error: ${error.message}`;
    }
}
// Ví dụ sử dụng hàm
console.log(calculateBMI(70, 1.75)); // 22.857142857142858
console.log(calculateBMI(-70, 1.75)); // Error: Weight and height must be greater than 0.
console.log(calculateBMI(70, '1.75')); // Error: Weight and height must be numbers.
console.log(calculateBMI(70, NaN)); // Error: Weight and height cannot be NaN.
