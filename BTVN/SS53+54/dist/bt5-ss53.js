"use strict";
function checkCondition(condition, callback) {
    setInterval(() => {
        callback(condition);
    }, 1000);
}
// Ví dụ sử dụng:
const display = (result) => {
    console.log('Điều kiện trả về:', result);
};
checkCondition(true, display); // In ra "Điều kiện trả về: true" sau mỗi 1 giây
checkCondition(false, display); // In ra "Điều kiện trả về: false" sau mỗi 1 giây
