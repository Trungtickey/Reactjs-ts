"use strict";
// Viết một hàm divideNumbers() với tham số truyền vào là hai số và thực hiện phép chia giữa chúng.
// Sử dụng try-catch-finally để xử lý trường hợp ngoại lệ khi số bị chia cho 0 và đảm bảo rằng phần finally luôn được thực thi để thông báo kết thúc hàm.
const divideNumbers = (a, b) => {
    if (b === 0) {
        throw new Error("loi roi m dung nhap 0");
    }
    return a / b;
};
try {
    console.log(divideNumbers(5, 0));
}
catch (error) {
    console.log(error);
}
finally {
    console.log("ket thuc ham");
}
console.log(divideNumbers(6, 8));
//// <==3 ^.^
