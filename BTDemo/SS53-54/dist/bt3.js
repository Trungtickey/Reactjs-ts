"use strict";
// Viết một hàm processArray() nhận tham số truyền vào là một mảng các số nguyên và một callback function.
// Hàm processArray() sẽ duyệt qua mảng và gọi callback function với từng phần tử của mảng được in ra sau một khoảng thời gian.
function processArray(array, callbackFn) {
    // hàm duyệt mảng
    array.forEach((item, index) => {
        setTimeout(() => {
            callbackFn(item);
        }, index * 1000); // khoảng tgian giữa các phần tử là 1s
    });
}
const processElement = (element, callback) => {
    // Hàm in ra từng phần tử
};
// Sử dụng hàm processArray với một mảng số nguyên và callback function
const numbers = [1, 2, 3, 4, 5];
processArray(numbers, printItem);
