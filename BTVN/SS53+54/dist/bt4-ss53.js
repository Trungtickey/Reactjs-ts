"use strict";
function displayNumbers1(callback, delay) {
    let num = 1;
    const intervalId = setInterval(() => {
        callback(num);
        num += 1;
    }, delay);
}
// Ví dụ sử dụng:
const printNumber1 = (num) => {
    console.log(num);
};
displayNumbers1(printNumber1, 1000); // In ra sau khoảng tgian đã set
