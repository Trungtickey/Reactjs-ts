"use strict";
// Xây dựng một hàm đặt tên là sumWithPromise() với tham số truyền vào là một mảng các số nguyên
// Sử dụng Promise để tính tổng các số trong mảng và trả về giá trị cho hàm
// Triển khai hàm và in kết quả ra màn hình console
function sumWithPromise(number) {
    return new Promise((resolve, reject) => {
        // Kiểm tra mảngj có rỗng hay không
        if (number.length === 0) {
            recject("Mảng rỗng");
        }
        // Kiểm tra tất cả các phần tử trong mảng có phải số nguyên hay không
        for (const number of numbers) {
            if (typeof number !== 'number' || !Number.isInteger(number)) {
                reject('Array must contain only integers');
            }
        }
        // Tính tổng các số trong mảng
        const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        resolve(sum);
    });
}
// Sử dụng hàm và in kết quả ra màn hình console
sumWithPromise([1, 2, 3, 4, 5])
    .then(result => console.log(`Sum: ${result}`))
    .catch(error => console.error(`Error: ${error}`));
// Kiểm tra với mảng rỗng
sumWithPromise([])
    .then(result => console.log(`Sum: ${result}`))
    .catch(error => console.error(`Error: ${error}`));
// Kiểm tra với mảng chứa giá trị không phải là số nguyên
sumWithPromise([1, 2, '3', 4])
    .then(result => console.log(`Sum: ${result}`))
    .catch(error => console.error(`Error: ${error}`));
