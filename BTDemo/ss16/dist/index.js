"use strict";
// Kiểu dữ liệu Generics trong Typescript
// Mảng trong TypeScript
let arr1 = [1, 2, 3, 4, 5];
let arr2 = [1, 2, 3, 4, 5]; // generic array
let arr3 = new Array(1, 2, 3, 4, 5); // generic array
// function in ra tham số truyền vào chưa xác định kiểu dữ liệu
const printf = (word) => {
    console.log(word);
};
const printGeneric = (word) => {
    console.log(word);
};
printGeneric("Công Vương");
printGeneric(100);
printGeneric(null);
// Khởi tạo 1 turple từ 2 tham số truyền vào
const getTurple = (a, b) => {
    return [a, b];
};
console.log(getTurple(1, "Liên"));
console.log(getTurple(undefined, "Nữ"));
console.log(getTurple(true, false));
console.log(getTurple("Liên, Thành ơi", "Đậu Đại Học Nhaaaa"));
// Các quy tắc cơ bản về đặt tên : 
// T : type
// E : Element
// K: Key
// V: Value
// N: Number
// Bài tập: tạo 1 hàm truyền vào 2 đối số : nếu 2 đối số đều là number thì trả về tổng của 2 đối số
Number() + Number();
// nếu cả 2 là chuỗi thì nỗi chuỗi
String() + String();
// còn nếu không thì in ra thông báo lỗi " Không thể xác định kiểu"
const baiTap = (a, b) => {
    if (typeof a == 'number' && typeof b == 'number') {
        return Number(a) + Number(b);
    }
    else if (typeof a == 'string' && typeof b == 'string') {
        // Nếu cả 2 là chuỗi thì nối chuỗi
        return String(a) + String(b);
    }
    else {
        // Nếu ko thì in ra báo lỗi "ko thể xác định"
        console.error("Không thể xác định");
    }
};
console.log(baiTap(1, 2));
console.log(baiTap("trung", "Ticeky"));
baiTap(null, undefined);
class Student {
    constructor(weight, height, name) {
        this.weight = weight;
        this.height = height;
        this.name = name;
    }
}
// Tạo hàm hiển thị thông tin của person
const printInfoPerson = (human) => {
    // Bất cứ kiểu dữ liệu nào kế Person đều thỏa mãn T (extends)
    console.log(human.height, human.weight);
};
let st = new Student(60, 1.6, "Trung");
// Ép kiểu ngầm định: quan hệ kế thừa - ép kiểu từ con lên cha
// Ép kiểu tường minh : Từ cha về con - <type children>
let str = st;
printInfoPerson(st);
class ArrayFakeImpl {
    constructor() {
        this.data = [];
        this.toString = () => {
            return this.data;
        };
    }
    push(item) {
        this.data.push(item);
    }
    pop() {
        return this.data.pop();
    }
}
// Khởi tạo đối tượng
let arrFake = new ArrayFakeImpl();
arrFake.push(1);
arrFake.push(2);
arrFake.push(3);
console.log(arrFake.toString());
console.log([1, 2, 3, 4, 5, 6]);
// Generic với phương thức đặc biệt : static
class Numbers {
    constructor(_so) {
        Numbers.so = _so;
    }
    static calX2() {
        return Numbers.so * 2;
    }
    static sum(a, b) {
        return Number(a) + Number(b);
    }
}
// ko cần khởi tạo đối tượng vẫn có thể truy xuất các thành phần tĩnh
// nếu như khởi tạo đối tượng
let n1 = new Numbers(2);
let n2 = new Numbers(3);
console.log(Numbers.so);
// quản lí sản phẩm
class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}
