"use strict";
// Type Tuple : mảng cố định
var _a;
let arrNotChangeLength;
arrNotChangeLength = [1, "nam", true];
console.log(arrNotChangeLength);
// console.log("3",arrNotChangeLength[3]);
// option readonly 
let number = [10]; // khi báo ngầm định / literals 
;
// từ khóa  : class 
class UserClass {
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
}
let user1 = {
    id: 1,
    name: undefined,
    age: 19
};
// Type guard 
// typeof
// instance of (kiểm tra kiểu dữ liệu của 1 instance (đối tượng) có phải interface hoặc class hay không)
let userClass = new UserClass(1, "Khánh", 15);
let userClass1 = new UserClass(2, "Tam anh", 16);
let userFake = {
    id: 1,
    name: "HÙng",
    age: 19
};
let userCopy = userClass; // gán địa chỉ tham chiếu 
userClass.name = "tâm anh";
console.log(userClass);
console.log(userCopy);
function printName(user) {
    user.name = "hung";
    console.log(user.name);
}
printName(userClass);
console.log(userClass);
// toán tử in : kiểm tra xem 1 thuộc tính có tồn tại trong 1 object hay ko
console.log("id" in userClass);
console.log("sex" in userClass);
if ("name" in userClass) {
    console.log(userClass.name);
}
// Type casting
// toán tử as : như là 
let myFunction = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return String(a) + String(b);
    }
};
// let result = myFunction(1,2) as string;
// console.log(typeof result);
// sử dụng <> : phổ biến hơn
let result = myFunction(1, 2);
// toán tử Optional chaining "?."
// let username = userFake?.name1; // nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó 
// nếu ko thì trả về undefined
// console.log("username",username);
let userTest = {
    id: 1,
    name: userClass,
    age: 19
};
let username = (_a = userTest === null || userTest === void 0 ? void 0 : userTest.name) === null || _a === void 0 ? void 0 : _a.name; // nếu tồn tại thuộc tính name thì trả về giá trị thuộc tính đó
console.log(username);
// toán tử Nullish coalescing "??"
let fullName = undefined !== null && undefined !== void 0 ? undefined : "Tên mặc định"; // literal type
console.log("fullName", fullName);
// enum   Method{
//     GET,PUT,POST,DELETE
// }
let method = "PUT";
const getTotal = (param) => {
    return param[1] * param[2];
};
// [ten, gia, soluong]
// tính tổng
let product = ["áo dài", 100, 99];
console.log(getTotal(product));
function getNode(name) {
    return document.getElementById(name);
}
